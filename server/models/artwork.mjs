import mongoose from 'mongoose'

const Schema = mongoose.Schema

const artworkSchema = new Schema({
  xmlId: String,
  objId: ObjectId,
  creator: String,
  title: String,
  date: String,
  comment: String,
  updated: 
  { 
    type: Date, 
    default: Date.now 
  },
})

export const Artwork = mongoose.model('Artwork', artworkSchema)