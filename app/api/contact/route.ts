import { transporter, mailOptions } from "@/app/constant/nodemailer";
import { NextResponse } from "next/server";

export async function POST(request: any) {
  if (request.method === "POST") {
    const body = await request.json();

    if (!body.name || !body.email || !body.message) {
      return NextResponse.json({ error: "Bad request" }, { status: 400 });
    }

    try {
      // Send email to admin with enhanced formatting
      await transporter.sendMail({
        ...mailOptions,
        subject: `New Contact Form Submission - ${
          body.subject || "Raphael Onuku Foundation"
        }`,
        html: `
          <div style="max-width: 600px; margin: 0 auto; padding: 20px; font-family: Arial, sans-serif; line-height: 1.6;">
            <!-- Header with Logo -->
            <div style="text-align: center; margin-bottom: 20px; padding: 20px; background-color: #EBF8FF;">
              <div style="display: inline-block; background-color: #1075BB; color: white; padding: 10px 20px; border-radius: 8px; font-size: 18px; font-weight: bold;">
                Raphael Onuku Foundation
              </div>
            </div>
            
            <div style="background-color: #f8f9fa; border-left: 4px solid #1075BB; padding: 15px; margin-bottom: 20px;">
              <h2 style="color: #333; margin: 0 0 15px 0;">New Contact Form Submission</h2>
              <p style="margin: 0;"><strong>Date:</strong> ${new Date().toLocaleString()}</p>
            </div>
            
            <div style="background-color: white; border: 1px solid #dee2e6; border-radius: 4px; padding: 20px; margin-bottom: 20px; box-shadow: 0 2px 6px rgba(0,0,0,0.05);">
              <p style="margin: 0 0 10px 0;"><strong>Full Name:</strong> ${
                body.name
              }</p>
              <p style="margin: 0 0 10px 0;"><strong>Email:</strong> ${
                body.email
              }</p>
              ${
                body.phone
                  ? `<p style="margin: 0 0 10px 0;"><strong>Phone:</strong> ${body.phone}</p>`
                  : ""
              }
              <p style="margin: 0 0 10px 0;"><strong>Subject:</strong> ${
                body.subject || "No subject provided"
              }</p>
              <p style="margin: 0;"><strong>Message:</strong></p>
              <div style="background-color: #f8f9fa; padding: 15px; border-radius: 4px; margin-top: 10px; border-left: 2px solid #30C86B;">
                ${body.message.replace(/\n/g, "<br>")}
              </div>
            </div>
            
            <div style="font-size: 12px; color: #6c757d; text-align: center; margin-top: 20px;">
              <p>This message was sent from the Raphael Onuku Foundation contact form.</p>
              <p style="margin-top: 10px; color: #1075BB;">No. 23, Dan Asogwa Crescent Street, Eburummiri, Nsukka, Enugu State, Nigeria</p>
            </div>
          </div>
        `,
      });

      // Send confirmation email to the user with enhanced design
      await transporter.sendMail({
        from: mailOptions.from,
        to: body.email,
        subject: "Thank you for contacting Raphael Onuku Foundation!",
        html: `
          <div style="max-width: 600px; margin: 0 auto; padding: 20px; font-family: Arial, sans-serif; line-height: 1.6;">
            <!-- Header with Logo and Background -->
            <div style="text-align: center; margin-bottom: 30px; padding: 40px 20px; background: linear-gradient(to bottom right, #f9fafb, #ffffff, #f0fdf4, #ebf8ff); border-radius: 8px;">
              <div style="display: inline-block; background-color: #1075BB; color: white; padding: 12px 24px; border-radius: 8px; font-size: 20px; font-weight: bold;">
                Raphael Onuku Foundation
              </div>
              <p style="color: #4B5563; margin-top: 15px;">Empowering Nigerian Youth Through Education</p>
            </div>
            
            <!-- Main Content -->
            <div style="background-color: white; border-radius: 8px; box-shadow: 0 4px 10px rgba(0,0,0,0.08); padding: 30px; margin-bottom: 30px;">
              <h2 style="color: #1075BB; margin: 0 0 20px 0; text-align: center; border-bottom: 2px solid #EBF8FF; padding-bottom: 15px;">Thank You for Reaching Out!</h2>
              
              <p style="color: #4B5563; margin-bottom: 15px;">Dear ${
                body.name
              },</p>
              
              <p style="color: #4B5563; margin-bottom: 15px;">Thank you for contacting the Raphael Onuku Foundation. We have received your message and our team will review it promptly. You can expect to hear back from us within 24-48 hours.</p>
              
              <div style="background-color: #EBF8FF; border-left: 4px solid #1075BB; padding: 15px; margin: 20px 0; border-radius: 4px;">
                <p style="margin: 0; color: #4B5563;">For urgent inquiries, please contact us directly at:</p>
                <p style="margin: 5px 0 0 0; color: #1075BB; font-weight: bold;">📞 +2347011161274</p>
              </div>
              
              <p style="color: #4B5563; margin-bottom: 15px;">Best regards,</p>
              <p style="color: #1075BB; font-weight: bold; margin-bottom: 5px;">The ROF Team</p>
              <p style="color: #4B5563; font-size: 14px; margin: 0;">Raphael Onuku Foundation</p>
            </div>
            
            <!-- Mission Statement Box -->
            <div style="background-color: #F0FDF4; border: 1px solid #D1FAE5; border-radius: 8px; padding: 20px; margin-bottom: 30px; text-align: center;">
              <p style="color: #065F46; font-style: italic; margin: 0;">
                "Our mission is to empower underprivileged Nigerian youth through education and mentorship."
              </p>
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
