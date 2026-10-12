import sendEmail from "../utilities/sendEmail.js";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
let latestCode = null;

const sendCodeHandler = async (req, res) => {
  const { email } = req.body;
  if (emailRegex.test(email)) {
    latestCode = Math.floor(Math.random() * 1000000);
    try {
      const data = await sendEmail({
        to: email,
        subject: "Email Verification",
        html: `<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Email Verification</title>
  </head>

  <body style="margin: 0; padding: 0; background-color: #f4f6fb; font-family: Arial, Helvetica, sans-serif; color: #1f2937;">
    <table
      role="presentation"
      width="100%"
      cellpadding="0"
      cellspacing="0"
      border="0"
      style="background-color: #f4f6fb; padding: 40px 16px;"
    >
      <tr>
        <td align="center">
          <table
            role="presentation"
            width="100%"
            cellpadding="0"
            cellspacing="0"
            border="0"
            style="max-width: 480px; background-color: #ffffff; border-radius: 16px; overflow: hidden;"
          >
            <!-- Header -->
            <tr>
              <td align="center" style="padding: 32px 24px 0;">
                <img style="width:9rem ; height:12rem" src="https://ik.imagekit.io/Cinevo/Light-Icon.png?updatedAt=1791763485265"/>
              </td>
            </tr>

            <!-- Content -->
            <tr>
              <td style="padding: 0 32px 32px; text-align: center;">
                <h1
                  style="margin: 0 0 16px; font-size: 24px; line-height: 1.4; color: #111827;"
                >
                  Verify your email
                </h1>

                <p
                  style="margin: 0 0 24px; font-size: 15px; line-height: 1.8; color: #6b7280;"
                >
                  Use the verification code below to complete your registration.
                  This code will expire in 10 minutes.
                </p>

                <!-- Verification Code -->
                <div
                  style="display: inline-block; padding: 18px 32px; background-color: #eae2ff; border: 1px solid #c2aaff; border-radius: 12px; margin-bottom: 24px; box-shadow: 0 .2rem 1rem #b89ff5;"
                >
                  <span
                    style="font-size: 32px; font-weight: 700; letter-spacing: 8px; color: #9c79ff;"
                  >
                    ${latestCode}
                  </span>
                </div>

                <p
                  style="margin: 0 0 16px; font-size: 13px; line-height: 1.7; color: #9ca3af;"
                >
                  If you didn't request this code, you can safely ignore this email.
                </p>

                <hr
                  style="border: none; border-top: 1px solid #e5e7eb; margin: 28px 0 20px;"
                />

                <p
                  style="margin: 0; font-size: 12px; line-height: 1.7; color: #9ca3af;"
                >
                  This is an automated message. Please do not reply to this email.
                </p>
              </td>
            </tr>
          </table>

          <!-- Footer -->
          <table
            role="presentation"
            width="100%"
            cellpadding="0"
            cellspacing="0"
            border="0"
            style="max-width: 480px;"
          >
            <tr>
              <td
                align="center"
                style="padding: 20px 16px; font-size: 12px; color: #9ca3af; line-height: 1.6;"
              >
                © 2026 Chatly . All rights reserved.
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
      </html>`,
      });
      res.json({ message: "EMAIL_SENT" });
    } catch (error) {
      console.log(error);

      res.json({ message: "TRY_AGAIN" });
    }
  } else {
    res.json({ message: "EMAIL_NOT_VALID" });
  }
};

export { sendCodeHandler };
