import mongoose from "mongoose";
const EmailOTPSchema = new mongoose.Schema({
    email: { type: String, reqiured: true },
    hashedCode: { type: String, required: true },
    expiresAt: { type: Date, required: true, expires: 0 },
});
const EmailOTP = mongoose.model("EmailOTP", EmailOTPSchema);
export default EmailOTP;
//# sourceMappingURL=EmailOTP.model.js.map