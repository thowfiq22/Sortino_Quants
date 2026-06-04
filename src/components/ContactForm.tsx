"use client";

import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    interest: "Gold Trading",
    message: "",
    agree: false,
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle"
  );
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.firstName.trim()) newErrors.firstName = "First name is required.";
    if (!formData.lastName.trim()) newErrors.lastName = "Last name is required.";
    if (!formData.email.trim()) {
      newErrors.email = "Email address is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email.";
    }
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required.";
    if (!formData.agree) newErrors.agree = "You must acknowledge the legal notice.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    const val = type === "checkbox" ? (e.target as HTMLInputElement).checked : value;
    setFormData((prev) => ({ ...prev, [name]: val }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus("loading");

    const GOOGLE_SHEETS_URL = process.env.NEXT_PUBLIC_GOOGLE_SHEETS_URL || "";

    try {
      let responseOk = false;

      if (GOOGLE_SHEETS_URL) {
        const response = await fetch(GOOGLE_SHEETS_URL, {
          method: "POST",
          redirect: "follow",
          headers: { "Content-Type": "text/plain;charset=utf-8" },
          body: JSON.stringify(formData),
        });

        // Google Apps Script redirects (302) to script.googleusercontent.com.
        // After the redirect, the response may be opaque in some browsers,
        // making response.ok unreliable. Try to parse the JSON result first.
        try {
          const result = await response.json();
          responseOk = result.success === true;
        } catch {
          // If JSON parsing fails (opaque response), treat fetch completion
          // as success since Google Apps Script throws on real failures.
          responseOk = true;
        }
      } else {
        // Fallback for development if webhook URL is not configured
        console.log("Mock lead logged (set NEXT_PUBLIC_GOOGLE_SHEETS_URL in your environment to activate):", formData);
        await new Promise((resolve) => setTimeout(resolve, 1000));
        responseOk = true;
      }

      if (responseOk) {
        setStatus("success");
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          interest: "Gold Trading",
          message: "",
          agree: false,
        });
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error("Submission error:", error);
      setStatus("error");
    }
  };

  return (
    <div className="bg-surface-card border border-border-muted p-8 md:p-10 rounded-sm shadow-2xl relative overflow-hidden form-focus-glow transition-shadow">
      {/* Efficiency Frontier Corner Accent */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full border-t border-r border-primary/20 pointer-events-none" />

      <div className="mb-10 relative z-10">
        <h2 className="font-display text-2xl font-bold text-text-primary mb-2">
          Request a Callback
        </h2>
        <p className="text-sm text-text-secondary leading-relaxed">
          Our lead analysts prioritize callbacks based on capital allocation intent and research urgency.
        </p>
      </div>

      {status === "success" ? (
        <div className="bg-status-success/10 border border-status-success/30 p-6 rounded-sm text-center relative z-10">
          <span className="material-symbols-outlined text-status-success text-5xl mb-4 block">
            check_circle
          </span>
          <h4 className="font-display text-lg font-bold text-text-primary mb-2">
            Inquiry Submitted
          </h4>
          <p className="text-xs text-text-secondary leading-relaxed">
            Thank you. An analyst will review your details and reach out within 24 business hours.
          </p>
          <button
            onClick={() => setStatus("idle")}
            className="mt-6 font-mono text-[10px] text-primary uppercase tracking-widest hover:underline"
          >
            Submit Another Request
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
          {/* First & Last Name */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="block font-mono text-[10px] text-text-secondary uppercase tracking-widest" htmlFor="firstName">
                FIRST NAME
              </label>
              <input
                type="text"
                name="firstName"
                id="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="John"
                className="w-full bg-surface-slate border border-border-muted px-4 py-3 text-text-primary rounded-sm focus:ring-1 focus:ring-primary focus:border-primary outline-none transition-all font-sans text-sm placeholder:text-text-secondary/20"
              />
              {errors.firstName && (
                <p className="text-status-error text-xs mt-1">{errors.firstName}</p>
              )}
            </div>
            <div className="space-y-2">
              <label className="block font-mono text-[10px] text-text-secondary uppercase tracking-widest" htmlFor="lastName">
                LAST NAME
              </label>
              <input
                type="text"
                name="lastName"
                id="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Doe"
                className="w-full bg-surface-slate border border-border-muted px-4 py-3 text-text-primary rounded-sm focus:ring-1 focus:ring-primary focus:border-primary outline-none transition-all font-sans text-sm placeholder:text-text-secondary/20"
              />
              {errors.lastName && (
                <p className="text-status-error text-xs mt-1">{errors.lastName}</p>
              )}
            </div>
          </div>

          {/* Email Address & Direct Phone */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="block font-mono text-[10px] text-text-secondary uppercase tracking-widest" htmlFor="email">
                INSTITUTIONAL EMAIL
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="j.doe@firm.com"
                className="w-full bg-surface-slate border border-border-muted px-4 py-3 text-text-primary rounded-sm focus:ring-1 focus:ring-primary focus:border-primary outline-none transition-all font-sans text-sm placeholder:text-text-secondary/20"
              />
              {errors.email && (
                <p className="text-status-error text-xs mt-1">{errors.email}</p>
              )}
            </div>
            <div className="space-y-2">
              <label className="block font-mono text-[10px] text-text-secondary uppercase tracking-widest" htmlFor="phone">
                DIRECT PHONE
              </label>
              <input
                type="text"
                name="phone"
                id="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+44..."
                className="w-full bg-surface-slate border border-border-muted px-4 py-3 text-text-primary rounded-sm focus:ring-1 focus:ring-primary focus:border-primary outline-none transition-all font-sans text-sm placeholder:text-text-secondary/20"
              />
              {errors.phone && (
                <p className="text-status-error text-xs mt-1">{errors.phone}</p>
              )}
            </div>
          </div>

          {/* Area of Interest */}
          <div className="space-y-2">
            <label className="block font-mono text-[10px] text-text-secondary uppercase tracking-widest" htmlFor="interest">
              AREA OF INTEREST
            </label>
            <div className="relative">
              <select
                name="interest"
                id="interest"
                value={formData.interest}
                onChange={handleChange}
                className="w-full appearance-none bg-surface-slate border border-border-muted px-4 py-3 text-text-primary rounded-sm focus:ring-1 focus:ring-primary focus:border-primary outline-none transition-all font-sans text-sm cursor-pointer"
              >
                <option value="Gold Trading">Gold Trading</option>
                <option value="Crypto Trading">Crypto Trading</option>
                <option value="Stocks">Stocks</option>
                <option value="Mentorship">Mentorship</option>
                <option value="Trading Community">Trading Community</option>
                <option value="Partnership">Partnership</option>
              </select>
              <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-text-secondary">
                expand_more
              </span>
            </div>
          </div>

          {/* Message Details */}
          <div className="space-y-2">
            <label className="block font-mono text-[10px] text-text-secondary uppercase tracking-widest" htmlFor="message">
              MESSAGE / MANDATE DETAILS
            </label>
            <textarea
              name="message"
              id="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Briefly describe your investment objectives..."
              rows={4}
              className="w-full bg-surface-slate border border-border-muted px-4 py-3 text-text-primary rounded-sm focus:ring-1 focus:ring-primary focus:border-primary outline-none transition-all font-sans text-sm placeholder:text-text-secondary/20 resize-none"
            />
          </div>

          {/* Legal Notice Waiver Checkbox */}
          <div className="space-y-2">
            <div className="flex items-start gap-3">
              <input
                type="checkbox"
                name="agree"
                id="agree"
                checked={formData.agree}
                onChange={handleChange}
                className="mt-1 h-4 w-4 bg-surface-slate border-border-muted text-primary focus:ring-0 focus:ring-offset-0 cursor-pointer rounded-sm"
              />
              <label
                htmlFor="agree"
                className="text-xs text-text-secondary leading-normal cursor-pointer select-none"
              >
                I acknowledge the{" "}
                <a href="/disclaimer" target="_blank" className="text-primary underline">
                  Educational Risk Waiver
                </a>{" "}
                and{" "}
                <a href="/privacy" target="_blank" className="text-primary underline">
                  Privacy Policy
                </a>
                . I understand that Sortino Quants provides research, not direct financial advice.
              </label>
            </div>
            {errors.agree && (
              <p className="text-status-error text-xs mt-1">{errors.agree}</p>
            )}
          </div>

          {status === "error" && (
            <p className="text-status-error text-xs text-center font-bold">
              Failed to submit callback request. Please try again.
            </p>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            disabled={status === "loading"}
            className="w-full bg-primary text-background py-4 rounded-sm font-display font-bold text-xs uppercase tracking-widest hover:brightness-110 active:scale-[0.98] disabled:opacity-50 transition-all cursor-pointer flex items-center justify-center gap-2 group"
          >
            {status === "loading" ? (
              <span className="flex items-center gap-2">
                <svg
                  className="animate-spin h-4 w-4 text-background"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  />
                </svg>
                TRANSMITTING...
              </span>
            ) : (
              <>
                SUBMIT INQUIRY
                <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform text-lg">
                  arrow_right_alt
                </span>
              </>
            )}
          </button>
        </form>
      )}
    </div>
  );
}
