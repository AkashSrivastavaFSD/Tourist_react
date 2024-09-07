
//import './public/css';
//import { Link } from "react-router-dom";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Bookymytour() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contactNumber, setContactNumber] = useState(""); // New field
  const [date, setDate] = useState(new Date());
  const [destination, setDestination] = useState("1");
  const [hotel, setHotel] = useState("");
  const [specialRequest, setSpecialRequest] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("Pay at Hotel");
  const [cardDetails, setCardDetails] = useState({ number: "", cvv: "", expiry: "" });

  const hotelsByDestination = {
    "1": ["Hotel A", "Hotel B", "Hotel C", "Hotel D", "Hotel E"],
    "2": ["Hotel F", "Hotel G", "Hotel H", "Hotel I", "Hotel J"],
    "3": ["Hotel K", "Hotel L", "Hotel M", "Hotel N", "Hotel O"],
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate required fields
    if (!name || !email || !contactNumber || !date || !destination || !hotel || !paymentMethod) {
      alert('Please fill all required fields.');
      return;
    }

    // Prepare booking data, hiding CVV
    const bookingData = {
      name,
      email,
      contactNumber,
      date,
      destination,
      hotel,
      specialRequest,
      paymentMethod,
      cardDetails: paymentMethod === "Online Payment" ? { number: cardDetails.number, expiry: cardDetails.expiry } : {},
    };

    try {
      await axios.post('http://localhost:8000/user/book', bookingData);
      alert('Booking successful!');
      // Clear form
      setName("");
      setEmail("");
      setContactNumber("");
      setDate(new Date());
      setDestination("1");
      setHotel("");
      setSpecialRequest("");
      setPaymentMethod("Pay at Hotel");
      setCardDetails({ number: "", cvv: "", expiry: "" });
    } catch (error) {
      console.error('Error booking:', error);
    }
  };

  return (
    <div>

    {/* Process Start */}
   
   <div class="container-xxl py-5">
        <div class="container">
            <div class="text-center pb-4 wow fadeInUp" data-wow-delay="0.1s">
                <h6 class="section-title bg-white text-center text-primary px-3">Process</h6>
                <h1 class="mb-5">3 Easy Steps</h1>
            </div>
            <div class="row gy-5 gx-4 justify-content-center">
                <div class="col-lg-4 col-sm-6 text-center pt-4 wow fadeInUp" data-wow-delay="0.1s">
                    <div class="position-relative border border-primary pt-5 pb-4 px-4">
                        <div class="d-inline-flex align-items-center justify-content-center bg-primary rounded-circle position-absolute top-0 start-50 translate-middle shadow" style={{"width": "100px", "height": "100px"}}>
                            <i class="fa fa-globe fa-3x text-white"></i>
                        </div>
                        <h5 class="mt-4">Choose A Destination</h5>
                        <hr class="w-25 mx-auto bg-primary mb-1"/>
                        <hr class="w-50 mx-auto bg-primary mt-0"/>
                        <p class="mb-0">Tempor erat elitr rebum clita dolor diam ipsum sit diam amet diam eos erat ipsum et lorem et sit sed stet lorem sit</p>
                    </div>
                </div>
                <div class="col-lg-4 col-sm-6 text-center pt-4 wow fadeInUp" data-wow-delay="0.3s">
                    <div class="position-relative border border-primary pt-5 pb-4 px-4">
                        <div class="d-inline-flex align-items-center justify-content-center bg-primary rounded-circle position-absolute top-0 start-50 translate-middle shadow" style={{"width": "100px", "height": "100px"}}>
                            <i class="fa fa-dollar-sign fa-3x text-white"></i>
                        </div>
                        <h5 class="mt-4">Pay Online</h5>
                        <hr class="w-25 mx-auto bg-primary mb-1"/>
                        <hr class="w-50 mx-auto bg-primary mt-0"/>
                        <p class="mb-0">Tempor erat elitr rebum clita dolor diam ipsum sit diam amet diam eos erat ipsum et lorem et sit sed stet lorem sit</p>
                    </div>
                </div>
                <div class="col-lg-4 col-sm-6 text-center pt-4 wow fadeInUp" data-wow-delay="0.5s">
                    <div class="position-relative border border-primary pt-5 pb-4 px-4">
                        <div class="d-inline-flex align-items-center justify-content-center bg-primary rounded-circle position-absolute top-0 start-50 translate-middle shadow" style={{"width": "100px", "height": "100px"}}>
                            <i class="fa fa-plane fa-3x text-white"></i>
                        </div>
                        <h5 class="mt-4">Fly Today</h5>
                        <hr class="w-25 mx-auto bg-primary mb-1"/>
                        <hr class="w-50 mx-auto bg-primary mt-0"/>
                        <p class="mb-0">Tempor erat elitr rebum clita dolor diam ipsum sit diam amet diam eos erat ipsum et lorem et sit sed stet lorem sit</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* Process Start */}


      {/* Booking Form UI */}
      <div className="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s">
        <div className="container">
          <div className="booking p-5">
            <div className="row g-5 align-items-center">
              <div className="col-md-6 text-white">
                <h1 className="text-white mb-4">Book A Tour</h1>
                <form onSubmit={handleSubmit}>
                  <div className="row g-3">
                    {/* Form fields */}
                    <div className="col-md-6">
                      <div className="form-floating">
                        <input
                          type="text"
                          className="form-control bg-transparent"
                          id="name"
                          placeholder="Your Name"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          required
                        />
                        <label htmlFor="name">Your Name</label>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-floating">
                        <input
                          type="email"
                          className="form-control bg-transparent"
                          id="email"
                          placeholder="Your Email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                        />
                        <label htmlFor="email">Your Email</label>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-floating">
                        <input
                          type="tel"
                          className="form-control bg-transparent"
                          id="contact"
                          placeholder="Contact Number"
                          value={contactNumber}
                          onChange={(e) => setContactNumber(e.target.value)}
                          required
                        />
                        <label htmlFor="contact">Contact Number</label>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-floating">
                        <DatePicker
                          selected={date}
                          onChange={(date) => setDate(date)}
                          showTimeSelect
                          dateFormat="Pp"
                          className="form-control bg-transparent"
                        />
                        <label htmlFor="datetime">Date & Time</label>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-floating">
                        <select
                          className="form-select bg-transparent"
                          id="select1"
                          value={destination}
                          onChange={(e) => setDestination(e.target.value)}
                          required
                        >
                          <option value="1">Thailand</option>
                          <option value="2">Malaysia</option>
                          <option value="3">Indonesia</option>
                        </select>
                        <label htmlFor="select1">Destination</label>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-floating">
                        <select
                          className="form-select bg-transparent"
                          value={hotel}
                          onChange={(e) => setHotel(e.target.value)}
                          required
                        >
                          <option value="">Select Hotel</option>
                          {hotelsByDestination[destination].map((hotel) => (
                            <option key={hotel} value={hotel}>
                              {hotel}
                            </option>
                          ))}
                        </select>
                        <label htmlFor="hotel">Choose a Hotel</label>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-floating">
                        <select
                          className="form-select bg-transparent"
                          value={paymentMethod}
                          onChange={(e) => setPaymentMethod(e.target.value)}
                          required
                        >
                          <option value="Pay at Hotel">Pay at Hotel</option>
                          <option value="Online Payment">Online Payment</option>
                        </select>
                        <label htmlFor="payment">Payment Method</label>
                      </div>
                    </div>
                    {paymentMethod === "Online Payment" && (
                      <div className="col-md-12">
                        <div className="form-floating">
                          <input
                            type="text"
                            className="form-control bg-transparent"
                            placeholder="Card Number"
                            value={cardDetails.number}
                            onChange={(e) => setCardDetails({ ...cardDetails, number: e.target.value })}
                            required
                          />
                          <label htmlFor="cardNumber">Card Number</label>
                        </div>
                        <div className="form-floating">
                          <input
                            type="text"
                            className="form-control bg-transparent"
                            placeholder="Expiry MM/YY"
                            value={cardDetails.expiry}
                            onChange={(e) => setCardDetails({ ...cardDetails, expiry: e.target.value })}
                            required
                          />
                          <label htmlFor="expiry">Expiry MM/YY</label>
                        </div>
                      </div>
                    )}
                    <div className="col-12">
                      <div className="form-floating">
                        <textarea
                          className="form-control bg-transparent"
                          placeholder="Special Request"
                          value={specialRequest}
                          onChange={(e) => setSpecialRequest(e.target.value)}
                          style={{ height: "100px" }}
                        />
                        <label htmlFor="message">Special Request</label>
                      </div>
                    </div>
                    <div className="col-12">
                      <button className="btn btn-outline-light w-100 py-3" type="submit">Book Now</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Bookymytour;

