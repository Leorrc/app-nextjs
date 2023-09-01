import mongoose from 'mongoose'

const Expenses = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
    min: 0,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  user: {
    type: mongoose.Types.ObjectId,
    ref: 'User',
    required: true,
  },
})

export default mongoose.model('Expense', Expenses)

// save

// import mongoose from 'mongoose'

// const Expenses = new mongoose.Schema({
//   email: {
//     type: String,
//     required: false,
//   },
//   title: {
//     type: String,
//     required: false,
//   },
//   type: {
//     type: String,
//     required: false,
//   },
//   category: {
//     type: String,
//     required: false,
//   },
//   amount: {
//     type: Number,
//     required: false,
//   },
//   createdAt: {
//     type: Date,
//     default: Date.now,
//   },
// })

// export default mongoose.model('Expense', Expenses)
