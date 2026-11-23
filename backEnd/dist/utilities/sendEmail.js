import nodemailer from "nodemailer";
const sendEmail = async ({ to, subject, html }) => {
    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
            user: process.env.GMAIL_USER,
            pass: process.env.GMAIL_APP_PASSWORD,
        },
    });
    return transporter.sendMail({
        from: `Chatly <${process.env.GMAIL_USER}>`,
        to,
        subject,
        html,
    });
};
export default sendEmail;
//# sourceMappingURL=sendEmail.js.map