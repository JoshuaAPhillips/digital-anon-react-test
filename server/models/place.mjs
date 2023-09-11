import mongoose from "mongoose";

const Schema = mongoose.Schema;

const placeSchema = new Schema({
  xmlId: String,
  objId: ObjectId,
  name: String,
  longitude: Number,
  latitude: Number,
  comment: String,
  updated:
  {
    type: Date,
    default: Date.now
  },
})

export const Place = mongoose.model("Place", placeSchema);