import mongoose, { Types } from 'mongoose'

const User = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    index: { unique: true },
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
})

export default mongoose.model('User', User)
