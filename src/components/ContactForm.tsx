"use client";

import { useState } from "react";

const webhookUrl = process.env.NEXT_PUBLIC_GOOGLE_SHEETS_URL || "";
const fieldClassName =
  "w-full rounded-sm border border-border-muted bg-surface-slate px-4 py-3 font-sans text-sm text-text-primary outline-none transition-colors placeholder:text-text-secondary/70 focus:border-primary focus:ring-1 focus:ring-primary";
const labelClassName =
  "block font-mono text-xs uppercase tracking-widest text-text-secondary";

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
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const nextErrors: Record<string, string> = {};
    if (!formData.firstName.trim()) nextErrors.firstName = "First name is required.";
    if (!formData.lastName.trim()) nextErrors.lastName = "Last name is required.";
    if (!formData.email.trim()) {
      nextErrors.email = "Email address is required.";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      nextErrors.email = "Enter a valid email address.";
    }
    if (!formData.phone.trim()) nextErrors.phone = "Phone number is required.";
    if (!formData.agree) nextErrors.agree = "You must acknowledge the legal notice.";

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    const { name, value, type } = event.target;
    const nextValue = type === "checkbox" ? (event.target as HTMLInputElement).checked : value;
    setFormData((current) => ({ ...current, [name]: nextValue }));
    setErrors((current) => ({ ...current, [name]: "" }));
    if (status === "error") setStatus("idle");
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!validate()) return;

    if (!webhookUrl) {
      console.error("Contact form is unavailable: NEXT_PUBLIC_GOOGLE_SHEETS_URL is not configured.");
      setStatus("error");
      return;
    }

    setStatus("loading");

    try {
      const response = await fetch(webhookUrl, {
        method: "POST",
        redirect: "follow",
        headers: { "Content-Type": "text/plain;charset=utf-8" },
        body: JSON.stringify(formData),
      });
      const result = await response.json();

      if (!response.ok || result.success !== true) {
        throw new Error("Contact endpoint did not confirm the submission.");
      }

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
      setErrors({});
    } catch (error) {
      console.error("Contact form submission failed:", error);
      setStatus("error");
    }
  };

  const errorFor = (field: string) =>
    errors[field] ? (
      <p id={`${field}-error`} role="alert" className="mt-1 text-xs text-status-error">
        {errors[field]}
      </p>
    ) : null;

  return (
    <div className="form-focus-glow relative overflow-hidden rounded-sm border border-border-muted bg-surface-card p-6 shadow-2xl md:p-10">
      <div className="pointer-events-none absolute right-0 top-0 h-32 w-32 rounded-bl-full border-r border-t border-primary/20 bg-primary/5" />

      <div className="relative z-10 mb-10">
        <h2 className="mb-2 font-display text-2xl font-bold text-text-primary">Request a Callback</h2>
        <p className="text-sm leading-relaxed text-text-secondary">
          Tell us what you would like to discuss and how our team can contact you.
        </p>
      </div>

      {status === "success" ? (
        <div className="relative z-10 rounded-sm border border-status-success/30 bg-status-success/10 p-6 text-center" role="status" aria-live="polite">
          <span className="material-symbols-outlined mb-4 block text-5xl text-status-success" aria-hidden="true">check_circle</span>
          <h3 className="mb-2 font-display text-lg font-bold text-text-primary">Inquiry Submitted</h3>
          <p className="text-sm leading-relaxed text-text-secondary">
            Thank you. Our team will review your details and respond as soon as possible.
          </p>
          <button type="button" onClick={() => setStatus("idle")} className="mt-6 min-h-11 px-3 font-mono text-xs uppercase tracking-widest text-primary hover:underline">
            Submit Another Request
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="relative z-10 space-y-6" noValidate>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="space-y-2">
              <label className={labelClassName} htmlFor="firstName">First name</label>
              <input type="text" name="firstName" id="firstName" autoComplete="given-name" value={formData.firstName} onChange={handleChange} placeholder="John" aria-invalid={Boolean(errors.firstName)} aria-describedby={errors.firstName ? "firstName-error" : undefined} className={fieldClassName} />
              {errorFor("firstName")}
            </div>
            <div className="space-y-2">
              <label className={labelClassName} htmlFor="lastName">Last name</label>
              <input type="text" name="lastName" id="lastName" autoComplete="family-name" value={formData.lastName} onChange={handleChange} placeholder="Doe" aria-invalid={Boolean(errors.lastName)} aria-describedby={errors.lastName ? "lastName-error" : undefined} className={fieldClassName} />
              {errorFor("lastName")}
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="space-y-2">
              <label className={labelClassName} htmlFor="email">Email address</label>
              <input type="email" name="email" id="email" autoComplete="email" value={formData.email} onChange={handleChange} placeholder="j.doe@example.com" aria-invalid={Boolean(errors.email)} aria-describedby={errors.email ? "email-error" : undefined} className={fieldClassName} />
              {errorFor("email")}
            </div>
            <div className="space-y-2">
              <label className={labelClassName} htmlFor="phone">Phone number</label>
              <input type="tel" name="phone" id="phone" autoComplete="tel" value={formData.phone} onChange={handleChange} placeholder="+44..." aria-invalid={Boolean(errors.phone)} aria-describedby={errors.phone ? "phone-error" : undefined} className={fieldClassName} />
              {errorFor("phone")}
            </div>
          </div>

          <div className="space-y-2">
            <label className={labelClassName} htmlFor="interest">Area of interest</label>
            <div className="relative">
              <select name="interest" id="interest" value={formData.interest} onChange={handleChange} className={`${fieldClassName} appearance-none cursor-pointer`}>
                <option value="Gold Trading">Gold Trading</option>
                <option value="Crypto Trading">Crypto Trading</option>
                <option value="Stocks">Stocks</option>
                <option value="Mentorship">Mentorship</option>
                <option value="Trading Community">Trading Community</option>
                <option value="Partnership">Partnership</option>
              </select>
              <span className="material-symbols-outlined pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-text-secondary" aria-hidden="true">expand_more</span>
            </div>
          </div>

          <div className="space-y-2">
            <label className={labelClassName} htmlFor="message">Message</label>
            <textarea name="message" id="message" value={formData.message} onChange={handleChange} placeholder="Briefly describe what you would like to discuss..." rows={4} className={`${fieldClassName} resize-y`} />
          </div>

          <div className="space-y-2">
            <div className="flex items-start gap-3">
              <input type="checkbox" name="agree" id="agree" checked={formData.agree} onChange={handleChange} aria-invalid={Boolean(errors.agree)} aria-describedby={errors.agree ? "agree-error" : undefined} className="mt-0.5 h-5 w-5 flex-shrink-0 cursor-pointer rounded-sm border-border-muted bg-surface-slate text-primary" />
              <label htmlFor="agree" className="cursor-pointer select-none text-xs leading-relaxed text-text-secondary">
                I acknowledge the <a href="/disclaimer/" target="_blank" rel="noopener noreferrer" className="text-primary underline">Educational Risk Waiver</a> and <a href="/privacy/" target="_blank" rel="noopener noreferrer" className="text-primary underline">Privacy Policy</a>. I understand that Sortino Quants provides education, not financial advice.
              </label>
            </div>
            {errorFor("agree")}
          </div>

          {status === "error" && (
            <div role="alert" aria-live="assertive" className="rounded-sm border border-status-error/30 bg-status-error/10 p-4 text-center text-sm text-status-error">
              We could not send this request. Email <a className="font-bold underline" href="mailto:sortinoquants@gmail.com">sortinoquants@gmail.com</a> or contact us on <a className="font-bold underline" href="https://wa.me/447442515815" target="_blank" rel="noopener noreferrer">WhatsApp</a>.
            </div>
          )}

          <button type="submit" disabled={status === "loading"} className="flex min-h-12 w-full cursor-pointer items-center justify-center gap-2 rounded-sm bg-primary py-4 font-display text-xs font-bold uppercase tracking-widest text-background transition-all hover:brightness-110 active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-50">
            {status === "loading" ? "Sending..." : "Submit Inquiry"}
            {status !== "loading" && <span className="material-symbols-outlined text-lg" aria-hidden="true">arrow_right_alt</span>}
          </button>
        </form>
      )}
    </div>
  );
}
