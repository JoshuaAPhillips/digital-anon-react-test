import mongoose from "mongoose";

const Schema = mongoose.Schema;

const placeSchema = new Schema({
  // TODO: Define schema
})

export const Place = mongoose.model("Place", placeSchema);