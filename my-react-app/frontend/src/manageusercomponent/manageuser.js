// frontend/adminnavcomponents/ManageUser.js
import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import { Table, Button, Box, Text, useDisclosure, AlertDialog, AlertDialogOverlay, AlertDialogContent, AlertDialogHeader, AlertDialogBody, AlertDialogFooter } from '@chakra-ui/react';

const ManageUser = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState('');
  const [selectedUser, setSelectedUser] = useState(null); // To keep track of the user to delete
  const { isOpen, onOpen, onClose } = useDisclosure(); // Chakra UI hooks for handling dialog state
  const cancelRef = useRef(); // Ref for the "No" button

  // Fetch all users
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('http://localhost:8000/admin/manage-users');
        setUsers(response.data);
      } catch (err) {
        setError('Failed to fetch users.');
      }
    };
    fetchUsers();
  }, []);

  // Confirm deletion of user
  const confirmDelete = (email) => {
    setSelectedUser(email);
    onOpen(); // Open confirmation dialog
  };

  // Delete user
  const handleDelete = async () => {
    try {
      await axios.delete('http://localhost:8000/admin/manage-users', { data: { email: selectedUser } });
      setUsers(users.filter((user) => user.email !== selectedUser));
      setSelectedUser(null);
      onClose(); // Close confirmation dialog after deletion
    } catch (err) {
      setError('Failed to delete user.');
    }
  };

  return (
    <Box p={5}>
      <Text fontSize="2xl" mb={5}>Manage Users</Text>
      {error && <Text color="red">{error}</Text>}
      <Table variant="simple">
        <thead>
          <tr>
            <th>Email</th>
            <th>Username</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.email}>
              <td>{user.email}</td>
              <td>{user.unm}</td>
              <td>
                <Button colorScheme="red" onClick={() => confirmDelete(user.email)}>
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      {/* Confirmation Dialog */}
      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              Delete User
            </AlertDialogHeader>
            <AlertDialogBody>
              Are you sure you want to delete this user?
            </AlertDialogBody>
            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={onClose}>
                No
              </Button>
              <Button colorScheme="red" onClick={handleDelete} ml={3}>
                Yes
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </Box>
  );
};

export default ManageUser;
