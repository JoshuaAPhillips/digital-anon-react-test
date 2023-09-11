import mongoose from 'mongoose'

const Schema = mongoose.Schema

const personSchema = new Schema({
  xmlId: String,
  objId: ObjectId,
  name: String,
  birthDate: {
    date: Date,
    exact: Boolean,
  },
  deathDate: {
    date: Date,
    exact: Boolean,
  },
  comment: String,
  updated: 
  { 
    type: Date, 
    default: Date.now 
  },
})

export const Person = mongoose.model('Person', personSchema)