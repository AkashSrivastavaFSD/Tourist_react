// frontend/Payment.js

import React, { useState } from "react";
import axios from 'axios';
import {useLocation } from 'react-router-dom';

function Payment() {
  const location = useLocation();
  
  const { cardDetails, booking } = location.state || {};

  const [paymentStatus, setPaymentStatus] = useState("");

  const handlePayment = async () => {
    try {
      await axios.post('http://localhost:8000/user/book', {
        ...booking,
        cardDetails,
      });
      setPaymentStatus('Payment successful!');
      
    } catch (error) {
      setPaymentStatus('Payment failed.');
      console.error('Payment error:', error);
    }
  };

  return (
    <div>
      <h1>Online Payment</h1>
      <div>
        <h3>Card Details</h3>
        <p>Card Number: {cardDetails.number}</p>
        <p>CVV: {cardDetails.cvv}</p>
        <p>Expiry: {cardDetails.expiry}</p>
        <button onClick={handlePayment}>Pay Now</button>
        <p>{paymentStatus}</p>
      </div>
    </div>
  );
}

export default Payment;
