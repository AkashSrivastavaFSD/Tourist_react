import Booking from '../models/bookingModel.js'; 
import mongoose from 'mongoose';

// Create a new booking
export const createBooking = async (req, res) => {
  const { name, email, date, destination, hotel, specialRequest, paymentMethod, cardDetails, contactNumber } = req.body;

  if (!name || !email || !date || !destination || !hotel || !paymentMethod || !contactNumber) {
    return res.status(400).json({ message: 'All fields except special request are required.' });
  }

  try {
    const bookingData = {
      name,
      email,
      date,
      destination,
      hotel,
      specialRequest,
      paymentMethod,
      contactNumber,
    };

    if (paymentMethod === 'Online Payment') {
      bookingData.cardDetails = {
        ...cardDetails,
        cvv: undefined,
      };
    }

    const newBooking = new Booking(bookingData);
    await newBooking.save();

    return res.status(201).json({ message: 'Booking successful!' });
  } catch (error) {
    console.error('Error creating booking:', error);
    return res.status(500).json({ message: 'Failed to create booking.' });
  }
};

// Get all bookings for a specific user
export const getUserBookings = async (req, res) => {
  const { email } = req.params;

  try {
    const bookings = await Booking.find({ email });
    return res.status(200).json(bookings);
  } catch (error) {
    console.error('Error fetching user bookings:', error);
    return res.status(500).json({ message: 'Failed to fetch bookings.' });
  }
};

// Cancel a specific booking
export const cancelBooking = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ message: 'Invalid booking ID.' });
  }

  try {
    await Booking.findByIdAndDelete(id);
    return res.status(200).json({ message: 'Booking cancelled successfully.' });
  } catch (error) {
    console.error('Error cancelling booking:', error);
    return res.status(500).json({ message: 'Failed to cancel booking.' });
  }
};


