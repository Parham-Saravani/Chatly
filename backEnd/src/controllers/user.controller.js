import EmailOTP from "../models/EmailOTP.model.js";
import sendEmail from "../utilities/sendEmail.js";
import bcrypt from "bcrypt";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const hashRounds = 10;

const sendCodeHandler = async (req, res) => {
  const { email } = req.body;
  if (emailRegex.test(email)) {
    try {
      const code = Math.floor(Math.random() * 1000000);
      const hashedCode = await bcrypt.hash(String(code), hashRounds);
      const time = new Date();
      time.setTime(time.getTime() + 60 * 1000);

      const isAlreadyExist = await EmailOTP.findOne({ email });
      if (isAlreadyExist) {
        if (isAlreadyExist.expiresAt <= new Date()) {
          await EmailOTP.deleteOne({ email });
          await EmailOTP.create({
            email,
            hashedCode,
            expiresAt: time,
          });
          const data = await sendEmail({
            to: email,
            subject: "Email Verification",
            html: `<!DOCTYPE html>
          <html lang="en">
          <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>Chatly Verification Code</title>
          </head>

          <body style="margin:0; padding:0; background-color:#f1f5f9; font-family:Arial,Helvetica,sans-serif; color:#0f172a;">

            <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background-color:#f1f5f9; padding:40px 16px;">
              <tr>
                <td align="center">

                  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="max-width:480px; background-color:#ffffff; border:1px solid #e2e8f0; border-radius:20px; overflow:hidden;">

                    <!-- Header -->
                    <tr>
                      <td align="center" style="padding:32px 24px 16px;">
                         <img style="width:9rem ; height:12rem" src="https://ik.imagekit.io/Cinevo/Light-Icon.png?updatedAt=1791763485265"/>
                      </td>
                    </tr>

                    <!-- Content -->
                    <tr>
                      <td align="center" style="padding:16px 32px 32px;">

                        <h1 style="margin:0 0 12px; font-size:24px; line-height:1.4; color:#0f172a;">
                          Verify your email
                        </h1>

                        <p style="margin:0 0 28px; font-size:14px; line-height:1.8; color:#475569;">
                          Use the verification code below to securely continue to your Chatly account.
                        </p>

                        <!-- Verification Code -->
                        <div style="background-color:#f5f3ff; border:1px solid #ddd6fe; border-radius:14px; padding:20px 16px; margin-bottom:20px;">
                          <div style="font-size:32px; font-weight:700; letter-spacing:10px; color:#7c4dff; text-align:center;">
                            ${code}
                          </div>
                        </div>

                        <p style="margin:0 0 24px; font-size:13px; line-height:1.7; color:#64748b;">
                          This code expires in <strong style="color:#0f172a;">10 minutes</strong>.
                        </p>

                        <div style="height:1px; background-color:#e2e8f0; margin-bottom:20px;"></div>

                        <p style="margin:0; font-size:12px; line-height:1.8; color:#64748b;">
                          If you didn't request this code, you can safely ignore this email.
                          Never share your verification code with anyone.
                        </p>

                      </td>
                    </tr>

                    <!-- Footer -->
                    <tr>
                      <td align="center" style="background-color:#f8fafc; border-top:1px solid #e2e8f0; padding:20px 24px;">
                        <p style="margin:0; font-size:12px; color:#94a3b8;">
                          © 2026 Chatly. All rights reserved.
                        </p>
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
        } else {
          res.json({ message: "TRY_ONE_MINUTE_LATER" });
        }
      } else {
        try {
          await EmailOTP.create({
            email,
            hashedCode,
            expiresAt: time,
          });
          const data = await sendEmail({
            to: email,
            subject: "Email Verification",
            html: `<!DOCTYPE html>
          <html lang="en">
          <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>Chatly Verification Code</title>
          </head>

          <body style="margin:0; padding:0; background-color:#f1f5f9; font-family:Arial,Helvetica,sans-serif; color:#0f172a;">

            <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background-color:#f1f5f9; padding:40px 16px;">
              <tr>
                <td align="center">

                  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="max-width:480px; background-color:#ffffff; border:1px solid #e2e8f0; border-radius:20px; overflow:hidden;">

                    <!-- Header -->
                    <tr>
                      <td align="center" style="padding:32px 24px 16px;">
                         <img style="width:9rem ; height:12rem" src="https://ik.imagekit.io/Cinevo/Light-Icon.png?updatedAt=1791763485265"/>
                      </td>
                    </tr>

                    <!-- Content -->
                    <tr>
                      <td align="center" style="padding:16px 32px 32px;">

                        <h1 style="margin:0 0 12px; font-size:24px; line-height:1.4; color:#0f172a;">
                          Verify your email
                        </h1>

                        <p style="margin:0 0 28px; font-size:14px; line-height:1.8; color:#475569;">
                          Use the verification code below to securely continue to your Chatly account.
                        </p>

                        <!-- Verification Code -->
                        <div style="background-color:#f5f3ff; border:1px solid #ddd6fe; border-radius:14px; padding:20px 16px; margin-bottom:20px;">
                          <div style="font-size:32px; font-weight:700; letter-spacing:10px; color:#7c4dff; text-align:center;">
                            ${code}
                          </div>
                        </div>

                        <p style="margin:0 0 24px; font-size:13px; line-height:1.7; color:#64748b;">
                          This code expires in <strong style="color:#0f172a;">10 minutes</strong>.
                        </p>

                        <div style="height:1px; background-color:#e2e8f0; margin-bottom:20px;"></div>

                        <p style="margin:0; font-size:12px; line-height:1.8; color:#64748b;">
                          If you didn't request this code, you can safely ignore this email.
                          Never share your verification code with anyone.
                        </p>

                      </td>
                    </tr>

                    <!-- Footer -->
                    <tr>
                      <td align="center" style="background-color:#f8fafc; border-top:1px solid #e2e8f0; padding:20px 24px;">
                        <p style="margin:0; font-size:12px; color:#94a3b8;">
                          © 2026 Chatly. All rights reserved.
                        </p>
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
          res.json({ message: error.message });
        }
      }
    } catch (error) {
      res.json({ message: error.message });
    }
  } else {
    res.json({ message: "EMAIL_NOT_VALID" });
  }
};

export { sendCodeHandler };
