import { transporter, mailOptions } from "@/app/constant/nodemailer";
import { NextResponse } from "next/server";

// Replace this URL with your Brevo API endpoint
const BREVO_API_URL = "https://api.brevo.com/v3/contacts";
// Make sure to add your Brevo API key to your environment variables
const BREVO_API_KEY =
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
      const brevoResponse = await fetch(BREVO_API_URL, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "api-key": BREVO_API_KEY,
        },
        body: JSON.stringify({
          email: body.email,
          listIds: [parseInt(process.env.BREVO_LIST_ID || "2")], // Replace with your actual list ID
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
        subject: "Welcome to the Raphael Onuku Foundation Newsletter!",
        html: `
          <div style="max-width: 600px; margin: 0 auto; padding: 20px; font-family: Arial, sans-serif; line-height: 1.6;">
            <!-- Header with Logo and Background -->
            <div style="text-align: center; margin-bottom: 30px; padding: 40px 20px; background: linear-gradient(to right, #1075BB, #0d5f91); border-radius: 8px;">
              <div style="display: inline-block; background-color: #ffffff; color: #1075BB; padding: 12px 24px; border-radius: 8px; font-size: 20px; font-weight: bold;">
                Raphael Onuku Foundation
              </div>
              <p style="color: #ffffff; margin-top: 15px; opacity: 0.9;">Empowering Nigerian Youth Through Education</p>
            </div>
            
            <!-- Main Content -->
            <div style="background-color: white; border-radius: 8px; box-shadow: 0 4px 10px rgba(0,0,0,0.08); padding: 30px; margin-bottom: 30px;">
              <h2 style="color: #1075BB; margin: 0 0 20px 0; text-align: center; border-bottom: 2px solid #EBF8FF; padding-bottom: 15px;">Thanks for Subscribing!</h2>
              
              <p style="color: #4B5563; margin-bottom: 15px;">Welcome to the Raphael Onuku Foundation newsletter community!</p>
              
              <p style="color: #4B5563; margin-bottom: 15px;">You'll now receive regular updates about our programs, success stories, and upcoming events. We're excited to share our journey of empowering underprivileged Nigerian youth through education and mentorship.</p>
              
              <div style="background-color: #EBF8FF; border-left: 4px solid #1075BB; padding: 15px; margin: 20px 0; border-radius: 4px;">
                <p style="margin: 0; color: #4B5563;"><strong>What to expect in our newsletter:</strong></p>
                <ul style="margin-top: 10px; padding-left: 20px; color: #4B5563;">
                  <li>Impact stories from our beneficiaries</li>
                  <li>Updates on our educational programs</li>
                  <li>Opportunities to get involved</li>
                  <li>Educational resources and inspiration</li>
                </ul>
              </div>
              
              <p style="color: #4B5563; margin-bottom: 15px;">If you ever wish to unsubscribe, you'll find an unsubscribe link at the bottom of every newsletter we send.</p>
              
              <p style="color: #4B5563; margin-bottom: 15px;">Thank you for your interest in our mission!</p>
              
              <p style="color: #4B5563; margin-bottom: 15px;">Warm regards,</p>
              <p style="color: #1075BB; font-weight: bold; margin-bottom: 5px;">Communications Team</p>
              <p style="color: #4B5563; font-size: 14px; margin: 0;">Raphael Onuku Foundation</p>
            </div>
            
            <!-- Footer -->
            <div style="border-top: 1px solid #E5E7EB; padding-top: 20px; text-align: center;">
              <div style="margin-bottom: 15px;">
                <a href="https://facebook.com/raphaelonukufoundation" style="display: inline-block; margin: 0 5px; color: #1075BB;"><img src="https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/facebook.svg" alt="Facebook" style="width: 20px; height: 20px;"></a>
                <a href="https://twitter.com/rof_nigeria" style="display: inline-block; margin: 0 5px; color: #1075BB;"><img src="https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/twitter.svg" alt="Twitter" style="width: 20px; height: 20px;"></a>
                <a href="https://instagram.com/raphaelonukufoundation" style="display: inline-block; margin: 0 5px; color: #1075BB;"><img src="https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/instagram.svg" alt="Instagram" style="width: 20px; height: 20px;"></a>
                <a href="https://linkedin.com/company/raphael-onuku-foundation" style="display: inline-block; margin: 0 5px; color: #1075BB;"><img src="https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/linkedin.svg" alt="LinkedIn" style="width: 20px; height: 20px;"></a>
              </div>
              <p style="color: #6B7280; font-size: 12px; margin: 0 0 10px 0;">&copy; ${new Date().getFullYear()} Raphael Onuku Foundation. All Rights Reserved.</p>
              <p style="margin: 0; font-size: 12px; color: #6B7280;">
                No. 23, Dan Asogwa Crescent Street, Eburummiri, Nsukka, Enugu State, Nigeria
              </p>
            </div>
          </div>
        `,
      });

      // 3. Send notification to admin (optional)
      await transporter.sendMail({
        ...mailOptions,
        subject: "New Newsletter Subscription - Raphael Onuku Foundation",
        html: `
          <div style="max-width: 600px; margin: 0 auto; padding: 20px; font-family: Arial, sans-serif; line-height: 1.6;">
            <!-- Header with Logo -->
            <div style="text-align: center; margin-bottom: 20px; padding: 20px; background: linear-gradient(to right, #1075BB, #0d5f91);">
              <div style="display: inline-block; background-color: #ffffff; color: #1075BB; padding: 10px 20px; border-radius: 8px; font-size: 18px; font-weight: bold;">
                Raphael Onuku Foundation
              </div>
            </div>
            
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
              <p style="margin-top: 10px; color: #ffffff;">No. 23, Dan Asogwa Crescent Street, Eburummiri, Nsukka, Enugu State, Nigeria</p>
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
