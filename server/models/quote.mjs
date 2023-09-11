import mongoose from 'mongoose'

const Schema = mongoose.Schema

const quoteSchema = new Schema({
  xmlId: String,
  objId: ObjectId,
  quote: String,
  source: String,
  comment: String,
  updated:
  {
    type: Date,
    default: Date.now
  },
})

export const Quote = mongoose.model('Quote', quoteSchema)