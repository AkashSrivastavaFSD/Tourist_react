// backend/models/bookingModel.js

import mongoose from 'mongoose';

const bookingSchema = new mongoose.Schema({
  name: String,
  email: String,
  date: Date,
  destination: String,
  hotel: String,
  specialRequest: String,
  paymentMethod: String,
  cardDetails: {
    number: String,
    cvv: String,
    expiry: String
  }
}, { timestamps: true });

const Booking = mongoose.model('Booking', bookingSchema);
export default Booking