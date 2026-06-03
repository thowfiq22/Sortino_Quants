import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const { firstName, lastName, email, phone, interest, message } = data;

    // Server-side validation
    if (!firstName || !lastName || !email || !phone) {
      return NextResponse.json(
        { success: false, error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Phase 1 lead logging
    // In production, this can fire a fetch request to a Google Sheet Web App, Zapier Webhook, or email sender service.
    console.log("=================== NEW CALLBACK LEAD ===================");
    console.log(`Timestamp: ${new Date().toISOString()}`);
    console.log(`Name: ${firstName} ${lastName}`);
    console.log(`Email: ${email}`);
    console.log(`Phone: ${phone}`);
    console.log(`Interest: ${interest}`);
    console.log(`Message: ${message || "N/A"}`);
    console.log("=========================================================");

    return NextResponse.json({
      success: true,
      message: "Lead logged successfully for Phase 1.",
    });
  } catch (error) {
    console.error("API error:", error);
    return NextResponse.json(
      { success: false, error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
