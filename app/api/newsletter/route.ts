import { transporter, mailOptions } from "@/app/constant/nodemailer";
import { NextResponse } from "next/server";

// const BREVO_URL = process.env.BREVO_API_URL;

// const BREVO_KEY = process.env.BREVO_API_KEY;

const BREVO_URL = "https://api.brevo.com/v3/contacts";
const BREVO_KEY =
  "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";

export async function POST(request: any) {
  if (request.method === "POST") {
    const body = await request.json();

    if (!body.email) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(body.email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }

    try {
      // 1. Add subscriber to Brevo list
      const brevoResponse = await fetch(BREVO_URL, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "api-key": BREVO_KEY,
        },
        body: JSON.stringify({
          email: body.email,
          listIds: [parseInt(process.env.BREVO_LIST_ID || "2")],
          updateEnabled: true,
          attributes: {
            NEWSLETTER: true,
            SOURCE: "website",
            SIGNUP_DATE: new Date().toISOString().split("T")[0],
          },
        }),
      });

      const brevoData = await brevoResponse.json();

      if (!brevoResponse.ok) {
        console.error("Brevo API error:", brevoData);
        // If the error is that the contact already exists, still send a confirmation
        if (
          brevoResponse.status !== 400 ||
          !brevoData.message?.includes("Contact already exist")
        ) {
          throw new Error(
            brevoData.message || "Failed to subscribe to newsletter"
          );
        }
      }

      // 2. Send confirmation email to subscriber
      await transporter.sendMail({
        from: mailOptions.from,
        to: body.email,
        subject: "Welcome to the DAMSA Newsletter!",
        html: `
          <div style="max-width: 600px; margin: 0 auto; padding: 20px; font-family: Arial, sans-serif; line-height: 1.6;">
            <!-- Header with Logo and Background -->
            <div style="text-align: center; margin-bottom: 30px; padding: 40px 20px; background: linear-gradient(to bottom, #0A1128, #161F3C, #232E50); border-radius: 8px;">
              <div style="display: inline-block; background-color: rgba(255,255,255,0.1); color: white; padding: 12px 24px; border-radius: 8px; font-size: 22px; font-weight: bold; border: 1px solid rgba(255,255,255,0.2);">
                DAMSA
              </div>
              <p style="color: #E0E7FF; margin-top: 15px;">Curating media content for digital assets mastery & providing DLT solutions that empower anyone for greater good.</p>
            </div>
            
            <!-- Main Content -->
            <div style="background-color: white; border-radius: 8px; box-shadow: 0 4px 15px rgba(10,17,40,0.15); padding: 30px; margin-bottom: 30px; border-top: 5px solid #0A1128;">
              <h2 style="color: #0A1128; margin: 0 0 20px 0; text-align: center; border-bottom: 2px solid rgba(10,17,40,0.1); padding-bottom: 15px;">Thanks for Subscribing!</h2>
              
              <p style="color: #4B5563; margin-bottom: 15px;">Welcome to the DAMSA newsletter community!</p>
              
              <p style="color: #4B5563; margin-bottom: 15px;">You'll now receive regular updates about our resources, market analysis, and digital media content. We're excited to share our journey of empowering underprivileged Nigerian youth through education and mentorship.</p>
              
              <div style="background-color: rgba(10,17,40,0.05); border-left: 4px solid #0A1128; padding: 15px; margin: 20px 0; border-radius: 4px;">
                <p style="margin: 0; color: #4B5563;"><strong>What to expect in our newsletter:</strong></p>
                <ul style="margin-top: 10px; padding-left: 20px; color: #4B5563;">
                  <li>Media resources to help you learn and earn while mastering digital assets</li>
                  <li>Educational resources help maximize your results with minimal input</li>
                  <li>Market Reports and Technical Insights</li>
                </ul>
              </div>
              
              <p style="color: #4B5563; margin-bottom: 15px;">If you ever wish to unsubscribe, you'll find an unsubscribe link at the bottom of every newsletter we send.</p>
              
              <p style="color: #4B5563; margin-bottom: 15px;">Thank you for your interest to start your digital asset journey with us.</p>
              
              <p style="color: #4B5563; margin-bottom: 15px;">Warm regards,</p>
              <p style="color: #0A1128; font-weight: bold; margin-bottom: 5px;">Communications Team</p>
              <p style="color: #4B5563; font-size: 14px; margin: 0;">DAMSA</p>
            </div>
            
            <!-- Footer -->
            <div style="border-top: 1px solid #E5E7EB; padding-top: 20px; text-align: center;">
              <div style="margin-bottom: 15px;">
                <a href="https://www.damsa.network" style="color: #0A1128; text-decoration: none; font-size: 14px; font-weight: bold;">www.damsa.network</a>
              </div>
           
              <p style="color: #6B7280; font-size: 12px; margin: 0 0 10px 0;">&copy; ${new Date().getFullYear()} DAMSA. All Rights Reserved.</p>
            </div>
          </div>
        `,
      });

      // 3. Send notification to admin (optional)
      await transporter.sendMail({
        ...mailOptions,
        subject: "New Newsletter Subscription - DAMSA",
        html: `
          <div style="max-width: 600px; margin: 0 auto; padding: 20px; font-family: Arial, sans-serif; line-height: 1.6;">
          
            
            <div style="background-color: #f8f9fa; border-left: 4px solid #1075BB; padding: 15px; margin-bottom: 20px;">
              <h2 style="color: #333; margin: 0 0 15px 0;">New Newsletter Subscription</h2>
              <p style="margin: 0;"><strong>Date:</strong> ${new Date().toLocaleString()}</p>
            </div>
            
            <div style="background-color: white; border: 1px solid #dee2e6; border-radius: 4px; padding: 20px; margin-bottom: 20px; box-shadow: 0 2px 6px rgba(0,0,0,0.05);">
              <p style="margin: 0 0 10px 0;"><strong>Email:</strong> ${
                body.email
              }</p>
              <p style="margin: 0 0 10px 0;"><strong>Source:</strong> Website Newsletter Form</p>
              <p style="margin: 0 0 10px 0;"><strong>Signup Date:</strong> ${new Date().toLocaleDateString()}</p>
            </div>
            
            <div style="font-size: 12px; color: #6c757d; text-align: center; margin-top: 20px;">
              <p>This subscriber has been added to your Brevo newsletter list.</p>
            
            </div>
          </div>
        `,
      });

      return NextResponse.json({
        message: "Successfully subscribed to newsletter",
        success: true,
      });
    } catch (error) {
      console.error("Newsletter subscription error:", error);
      return NextResponse.json(
        {
          error: "Failed to process subscription",
          message: error.message,
        },
        { status: 500 }
      );
    }
  }

  return NextResponse.json({ error: "Method not allowed" }, { status: 405 });
}
