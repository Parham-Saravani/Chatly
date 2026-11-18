import EmailOTP from "../models/EmailOTP.model.js";
import sendEmail from "../utilities/sendEmail.js";
import bcrypt from "bcrypt";
import User from "../models/user.model.js";
import crypto from "crypto";
import { decompressToken, generateToken } from "../utilities/token.js";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const userNameRegex = /^[a-zA-Z0-9-]+$/;

const hashRounds = 10;

const registerNewUser = async (req, res) => {
  const { email, username, name, imageUrl, bio } = req.body;
  try {
    if (
      emailRegex.test(email) &&
      Boolean(name) &&
      userNameRegex.test(username)
    ) {
      const isEmailAlradyUsed = await User.findOne({ email });
      const chechIsUsernameTaken = await User.findOne({ id: username });
      if (isEmailAlradyUsed) {
        return res.json({
          message:
            "This email is already registered. Please use another email.",
        });
      } else if (chechIsUsernameTaken) {
        return res.json({
          message: "This username is already taken. Please choose another one.",
        });
      }
      const userData = await User.create({
        name,
        id: username,
        email,
        ...(imageUrl && { imageUrl }),
        ...(bio && { bio }),
      });
      const token = generateToken(userData._id);
      res.status(201).json({
        message: "Your account has been created successfully.",
        token,
        userData,
      });
    } else {
      res.json({
        message:
          "Please check your email, name, and username. One or more fields are invalid.",
      });
    }
  } catch (error) {
    res.json({ message: "Something went wrong. Please try again later." });
  }
};
const updateUserData = async (req, res) => {
  const { previousEmail, newEmail, username, name, imageUrl, bio } = req.body;
  try {
    if (
      (emailRegex.test(previousEmail) && emailRegex.test(newEmail)) ||
      Boolean(name) ||
      userNameRegex.test(username) ||
      Boolean(imageUrl) ||
      Boolean(bio)
    ) {
      const userData = await User.findOneAndUpdate(
        { email: previousEmail },
        {
          ...(name && { name }),
          ...(username && { username }),
          ...(newEmail && { email: newEmail }),
          ...(imageUrl && { imageUrl }),
          ...(bio && { bio }),
        },
      );
      res.json({
        message: "Your profile has been updated successfully.",
      });
    }
  } catch (error) {
    res.json({ message: "Something went wrong. Please try again later." });
  }
};
const takeUserData = async (req, res) => {
  const { token } = req.body;
  if (token) {
    try {
      const userID = decompressToken(token);

      if (!userID) throw Error();
      try {
        const userData = await User.findOne(
          { _id: userID },
          {
            _id: false,
            updatedAt: false,
          },
        );
        if (userData) {
          res.json(userData);
        } else {
          throw new Error("NOT_FOUND");
        }
      } catch (error) {
        res.status(404).json({ message: error });
      }
    } catch (error) {
      res.json({ message: "INVALID_TOKEN" });
    }
  } else {
    res.status(400).json({ message: "INVALID_DATA" });
  }
};
const sendCodeHandler = async (req, res) => {
  const { email } = req.body;
  if (emailRegex.test(email)) {
    try {
      const code = crypto.randomInt(100000, 1000000);
      const hashedCode = await bcrypt.hash(String(code), hashRounds);
      const htmlElements = `<!DOCTYPE html>
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
                          This code expires in <strong style="color:#0f172a;">1 minutes</strong>.
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
      </html>`;
      const time = new Date();
      time.setTime(time.getTime() + 60 * 1000);

      const isAlreadyExist = await EmailOTP.findOne({ email });
      if (isAlreadyExist) {
        if (isAlreadyExist.expiresAt > new Date()) {
          await EmailOTP.deleteOne({ email });
          await EmailOTP.create({
            email,
            hashedCode,
            expiresAt: time,
          });
          await sendEmail({
            to: email,
            subject: "Email Verification",
            html: htmlElements,
          });
          res.json({ message: "EMAIL_SENT" });
        } else {
          res.json({ message: "TRY_ONE_MINUTE_LATER" });
        }
      } else {
        await EmailOTP.create({
          email,
          hashedCode,
          expiresAt: time,
        });
        await sendEmail({
          to: email,
          subject: "Email Verification",
          html: htmlElements,
        });
        res.json({ message: "EMAIL_SENT" });
      }
    } catch (error) {
      res.json({ message: "INTERNAL_SERVER_ERROR" });
    }
  } else {
    res.json({ message: "EMAIL_NOT_VALID" });
  }
};

const codeVerifierHandler = async (req, res) => {
  const { code, email } = req.body;
  try {
    if (emailRegex.test(email)) {
      if (/^\d{6}$/.test(String(code))) {
        const currentEmailOTP = await EmailOTP.findOne({ email });
        if (currentEmailOTP) {
          if (currentEmailOTP.expiresAt > Date.now()) {
            const isCodeSame = await bcrypt.compare(
              String(code),
              currentEmailOTP.hashedCode,
            );
            if (isCodeSame) {
              const temp = await EmailOTP.findOneAndDelete({ email });

              const userData = await User.findOne(
                { email },
                { createdAt: false },
              );
              if (userData) {
                const token = generateToken(userData._id);
                return res.json({
                  message: "VERIFIED",
                  userStatus: "registerd",
                  userData,
                  token,
                });
              }
              res.json({ message: "VERIFIED", userStatus: "not_registerd" });
            } else {
              return res.json({ message: "CODE_NOT_MATCH" });
            }
          } else {
            return res.json({ message: "TIME_PASSED" });
          }
        } else {
          return res.json({ message: "OTP_NOT_FOUND" });
        }
      } else {
        return res.json({ message: "NOT_VALID_CODE" });
      }
    } else {
      return res.json({ message: "EMAIL_NOT_VALID" });
    }
  } catch (error) {
    res.json({ message: "INTERNAL_SERVER_ERROR" });
  }
};

const checkIsUserIDAvailable = async (req, res) => {
  const { id } = req.body;
  try {
    if (id) {
      if (typeof id === "string") {
        if (id.length > 3) {
          const isIDTaken = await User.findOne({ id });
          if (isIDTaken) {
            res.json({ message: "ID_TAKEN" });
          } else {
            res.json({ message: "ID_NOT_TAKEN" });
          }
        } else {
          res.json({ message: "ID_MUST_BE_AT_LEAST_THREE_CHARACTERS" });
        }
      } else {
        res.json({ message: "ID_MUST_BE_STRING" });
      }
    } else {
      res.json({ message: "INVALID_ID" });
    }
  } catch (error) {
    res.json({ message: "INTERNAL_SERVER_ERROR" });
  }
};

export {
  sendCodeHandler,
  codeVerifierHandler,
  checkIsUserIDAvailable,
  registerNewUser,
  updateUserData,
  takeUserData,
};
