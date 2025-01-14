const mongoose = require("mongoose");
const { Schema } = mongoose;

const PlaceSchema = new Schema({
    //We want to know who is the owner of what Place
    owner: {type : mongoose.Schema.Types.ObjectId , ref :"User" },
  title: String,
  address: String,
  photos: [String],
  description: String,
  perks: [String],
  extraInfo: String,
  checkIn: Number,
  checkOut: Number,
  maxGuests: Number,
  price: Number,
});

const PlaceModel = mongoose.model('Place',PlaceSchema);
module.exports = PlaceModel;