import mongoose from "mongoose";
const chatSchema = new mongoose.Schema({
    users: [String],
    lastMessage: { message: String, time: { type: Date, default: Date.now() } },
}, { timestamps: true });
const Chat = mongoose.model("chats", chatSchema);
export default Chat;
//# sourceMappingURL=chat.model.js.map