
import React, { useState } from 'react';
import axios from 'axios';
import { Box, Input, Button, FormLabel, FormControl, Text,useToast } from '@chakra-ui/react';

const Setting = () => {
  const [email, setEmail] = useState('');
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [message, setMessage] = useState('');
  const toast = useToast();
  const handleChangePassword = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put('http://localhost:8000/user/changepassword', {
        email,
        oldPassword,
        newPassword,
      });
      toast({
        title: "Password Change Successfully.",
        description: " updated ",
        status: "success",
        duration: 3000,
        isClosable: true,
      });

      // Clear the input fields
      setEmail('');
      setOldPassword('');
      setNewPassword('');

      setMessage(response.data.message);
    } 
    catch (err) {
      console.error('Error changing password:', err.response?.data || err.message);
      setMessage(err.response?.data?.message || 'Failed to change password.');
    }
  };

  return (
    <Box p={5}>
      <Text fontSize="2xl" mb={5}>Settings</Text>
      <form onSubmit={handleChangePassword}>
        <FormControl mb={3}>
          <FormLabel>Email</FormLabel>
          <Input
            type="email"
            value={email} placeholder='Enter your Email'
            onChange={(e) => setEmail(e.target.value)}
            required maxW="500px" 
          />
        </FormControl>
        <FormControl mb={3}>
          <FormLabel>Old Password</FormLabel>
          <Input
            type="password"
            value={oldPassword} placeholder='Enter Current Password'
            onChange={(e) => setOldPassword(e.target.value)}
            required maxW="500px" 
          />
        </FormControl>
        <FormControl mb={3}>
          <FormLabel>New Password</FormLabel>
          <Input
            type="password"
            value={newPassword} placeholder='Enter New Password'
            onChange={(e) => setNewPassword(e.target.value)}
            required maxW="500px" 
          />
        </FormControl>
        <Button colorScheme="blue" type="submit">
          Change Password
        </Button>
      </form>
      {message && <Text mt={3}>{message}</Text>}
    </Box>
  );
};

export default Setting;
