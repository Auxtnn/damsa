import { transporter, mailOptions } from "@/app/constant/nodemailer";
import { NextResponse } from "next/server";

export async function POST(request: any) {
  if (request.method === "POST") {
    const body = await request.json();

    if (!body.name || !body.email || !body.message) {
      return NextResponse.json({ error: "Bad request" }, { status: 400 });
    }

    try {
      // Send email to admin with enhanced formatting using brand color
      await transporter.sendMail({
        ...mailOptions,
        subject: `New Request Custom Content - "DAMSA"`,
        html: `
      <div style="max-width: 600px; margin: 0 auto; padding: 20px; font-family: Arial, sans-serif; line-height: 1.6;">
  
        <div style="background-color: rgba(10,17,40,0.05); border-left: 4px solid #0A1128; padding: 15px; margin-bottom: 20px;">
          <h2 style="color: #0A1128; margin: 0 0 15px 0;">New Request Custom Content</h2>
          <p><strong>Date:</strong> ${new Date().toLocaleString()}</p>
        </div>
  
        <div style="background-color: white; border: 1px solid #E5E7EB; border-radius: 4px; padding: 20px; box-shadow: 0 2px 6px rgba(10,17,40,0.1);">
          <p><strong>Full Name:</strong> ${body.name}</p>
          <p><strong>Email:</strong> ${body.email}</p>
          <p><strong>Message:</strong></p>
          <div style="background-color: #F9FAFB; padding: 15px; border-left: 3px solid #0A1128; border-radius: 4px;">
            ${body.message.replace(/\n/g, "<br>")}
          </div>
        </div>
  
        <div style="font-size: 12px; color: #6B7280; text-align: center; margin-top: 30px;">
          <p>This message was sent from the DAMSA contact form.</p>
        </div>
      </div>
    `,
      });

      // Send confirmation email to the user with enhanced design using brand color
      await transporter.sendMail({
        from: mailOptions.from,
        to: body.email,
        subject: "Thanks for reaching out to DAMSA!",
        html: `
          <div style="max-width: 600px; margin: 0 auto; padding: 20px; font-family: Arial, sans-serif; line-height: 1.6;">
            <!-- DAMSA Brand Header -->
            <div style="text-align: center; margin-bottom: 30px; padding: 30px 20px; background: linear-gradient(to bottom, #0A1128, #161F3C, #232E50); border-radius: 8px; color: white;">
              <div style="display: inline-block; background-color: rgba(255,255,255,0.1); color: white; padding: 12px 24px; border-radius: 8px; font-size: 22px; font-weight: bold; border: 1px solid rgba(255,255,255,0.2);">
                DAMSA
              </div>
              <p style="color: #E0E7FF; margin-top: 15px;">Curating media content for digital assets mastery & providing DLT solutions that empower anyone for greater good.</p>
            </div>
      
            <!-- Content -->
            <div style="background-color: white; border-radius: 8px; box-shadow: 0 4px 15px rgba(10,17,40,0.12); padding: 30px; margin-bottom: 30px; border-top: 5px solid #0A1128;">
              <h2 style="color: #0A1128; margin: 0 0 20px 0; text-align: center;">We've received your message!</h2>
      
              <p style="color: #374151;">Hi ${body.name},</p>
              <p style="color: #374151;">Thanks for reaching out to DAMSA. We're excited to guide you through your digital assets development journey with our custom contents curated specially for you. Our team has received your message and will respond within 24–48 hours.</p>
      
              <div style="background-color: rgba(10,17,40,0.05); border-left: 4px solid #0A1128; padding: 15px; margin: 20px 0; border-radius: 4px;">
                <p style="margin: 0;">For urgent matters, please chat with us on:</p>
                <p style="margin-top: 5px; color: #0A1128; font-weight: bold;">
                  <a href="https://t.me/+2348036441014" style="margin: 0 5px; color: #0A1128; text-decoration: none;">Telegram</a>
                </p>
              </div>
      
              <p style="color: #374151;">Warm regards,</p>
              <p style="color: #0A1128; font-weight: bold;">The DAMSA Team</p>
            </div>
      
            <!-- Mission Box -->
            <div style="background-color: rgba(10,17,40,0.03); border: 1px solid rgba(10,17,40,0.1); border-radius: 8px; padding: 20px; text-align: center;">
              <p style="color: #0A1128; font-style: italic; margin: 0;">
                "At DAMSA, we revolutionize digital asset access and blockchain technology, empowering global users to generate sustainable income safely."
              </p>
            </div>
      
            <!-- Footer -->
            <div style="border-top: 1px solid #E5E7EB; padding-top: 20px; text-align: center; margin-top: 30px;">
              <div style="margin-bottom: 15px;">
                <a href="https://www.damsa.network" style="color: #0A1128; text-decoration: none; font-size: 14px; font-weight: bold;">www.damsa.network</a>
              </div>
            
              <p style="color: #6B7280; font-size: 12px;">&copy; ${new Date().getFullYear()} DAMSA. All Rights Reserved.</p>
            </div>
          </div>
        `,
      });

      return NextResponse.json({
        message: "Message sent successfully",
        success: true,
      });
    } catch (error) {
      console.log(error);
      return NextResponse.json(
        { error: "Internal Server Error" },
        { status: 500 }
      );
    }
  }

  return NextResponse.json({ error: "Bad request" }, { status: 400 });
}

export async function GET(request: any) {
  return NextResponse.json({ error: "Method not allowed" }, { status: 405 });
}

