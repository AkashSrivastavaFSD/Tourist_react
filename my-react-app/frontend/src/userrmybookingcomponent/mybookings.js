import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  Button,
  Alert,
  AlertIcon,
  Box,
  Heading,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@chakra-ui/react";

function MyBookings() {
  const [bookings, setBookings] = useState([]);
  const [error, setError] = useState("");
  const [selectedBooking, setSelectedBooking] = useState(null);
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const email = localStorage.getItem("userEmail"); // Assuming email is stored in localStorage
        if (!email) {
          setError("User email not found. Please log in again.");
          return;
        }

        const response = await axios.get(
          `http://localhost:8000/user/mybookings/${email}`
        );
        if (response.data.length === 0) {
          setError("No bookings found.");
        } else {
          setBookings(response.data);
        }
      } catch (err) {
        console.error("Failed to fetch bookings:", err);
        setError("Failed to load bookings. Please try again later.");
      }
    };

    fetchBookings();
  }, []);

  const handleCancelBooking = async (id) => {
    try {
      await axios.delete(`http://localhost:8000/user/cancel/${id}`);
      alert("Booking canceled successfully!");
      setBookings(bookings.filter((booking) => booking._id !== id));
      onClose(); // Close the modal after successful cancellation
    } catch (err) {
      console.error("Failed to cancel booking:", err);
      alert("Failed to cancel booking. Please try again later.");
    }
  };

  return (
    <Box p={4}>
      <Heading as="h2" size="lg" mb={4}>
        My Bookings
      </Heading>

      {error ? (
        <Alert status="error" mb={4}>
          <AlertIcon />
          {error}
        </Alert>
      ) : bookings.length > 0 ? (
        <Table variant="striped" colorScheme="teal">
          <TableCaption>All your current bookings are listed here</TableCaption>
          <Thead>
            <Tr>
              <Th>Booking ID</Th>
              <Th>Date</Th>
              <Th>Destination</Th>
              <Th>Hotel</Th>
              <Th>Payment Method</Th>
              <Th>Actions</Th>
            </Tr>
          </Thead>
          <Tbody>
            {bookings.map((booking) => (
              <Tr key={booking._id}>
                <Td>{booking._id}</Td>
                <Td>{new Date(booking.date).toLocaleDateString()}</Td>
                <Td>{booking.destination}</Td>
                <Td>{booking.hotel}</Td>
                <Td>{booking.paymentMethod}</Td>
                <Td>
                  <Button
                    colorScheme="red"
                    size="sm"
                    onClick={() => {
                      setSelectedBooking(booking._id);
                      onOpen(); // Open the confirmation modal
                    }}
                  >
                    Cancel
                  </Button>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      ) : (
        <Alert status="info">
          <AlertIcon />
          No bookings found.
        </Alert>
      )}

      {/* Confirmation Modal */}
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Confirm Cancellation</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            Are you sure you want to cancel this booking?
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button
              colorScheme="red"
              onClick={() => {
                if (selectedBooking) {
                  handleCancelBooking(selectedBooking);
                }
              }}
            >
              Cancel Booking
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
}

export default MyBookings;


  
  
  {/*
  import React, { useState, useEffect } from "react";
import axios from 'axios';

function MyBookings() {
  const [bookings, setBookings] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const email = localStorage.getItem('userEmail'); // Assuming email is stored in localStorage
        const response = await axios.get(`http://localhost:8000/user/mybookings/${email}`);
        setBookings(response.data);
      } catch (err) {
        console.error('Failed to fetch bookings:', err);
        setError('Failed to load bookings. Please try again later.');
      }
    };

    fetchBookings();
  }, []);

  const handleCancelBooking = async (id) => {
    try {
      await axios.delete(`http://localhost:8000/user/cancel/${id}`);
      alert('Booking canceled successfully!');
      setBookings(bookings.filter((booking) => booking._id !== id));
    } catch (err) {
      console.error('Failed to cancel booking:', err);
      alert('Failed to cancel booking. Please try again later.');
    }
  };

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div>
      <h2>My Bookings</h2>
      {bookings.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th>Booking ID</th>
              <th>Date</th>
              <th>Destination</th>
              <th>Hotel</th>
              <th>Payment Method</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking) => (
              <tr key={booking._id}>
                <td>{booking._id}</td>
                <td>{new Date(booking.date).toLocaleDateString()}</td>
                <td>{booking.destination}</td>
                <td>{booking.hotel}</td>
                <td>{booking.paymentMethod}</td>
                <td>
                  <button onClick={() => handleCancelBooking(booking._id)}>Cancel</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No bookings found.</p>
      )}
    </div>
  );
}

export default MyBookings;

*/}