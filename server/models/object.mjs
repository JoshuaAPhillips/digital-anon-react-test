import mongoose from 'mongoose'

const Schema = mongoose.Schema

const objectSchema = new Schema({
  xmlId: String,
  objId: ObjectId,
  title: String,
  comment: String,
  updated: 
  { 
    type: Date, 
    default: Date.now 
  },
})

export const Object = mongoose.model('Object', objectSchema)