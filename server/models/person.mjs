import mongoose from 'mongoose'

const Schema = mongoose.Schema

const personSchema = new Schema({
  //TODO: Define schema
})

export const Person = mongoose.model('Person', personSchema)