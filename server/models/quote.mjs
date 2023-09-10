import mongoose from 'mongoose'

const Schema = mongoose.Schema

const quoteSchema = new Schema({
  //TODO: Define schema
})

export const Quote = mongoose.model('Quote', quoteSchema)