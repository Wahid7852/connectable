import mongoose from 'mongoose';

const MessageSchema = new mongoose.Schema({
  username: { type: String, required: true },
  content: { type: String, required: true },
  timestamp: { type: Date, default: Date.now },
  replyTo: { type: mongoose.Schema.Types.ObjectId, ref: 'Message', default: null }, // Optional field for replies
});

export default mongoose.models.Message || mongoose.model('Message', MessageSchema);
