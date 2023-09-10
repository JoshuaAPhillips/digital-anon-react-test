import mongoose from 'mongoose'

const Schema = mongoose.Schema

const artworkSchema = new Schema({
  //TODO: Define schema
})

export const Artwork = mongoose.model('Artwork', artworkSchema)