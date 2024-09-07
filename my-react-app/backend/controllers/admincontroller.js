// backend/controller/admincontroller.js
import Userreg from '../models/userregistration.js';
import bcrypt from 'bcryptjs';


// Login existing user
export const login = async (req, res) => {
  try {
    const { email, pw } = req.body;
    const user = await Userreg.findOne({ email });

    if (user && (await bcrypt.compare(pw, user.pw))) {
      req.session.unm = user.unm;
      req.session.role = user.role;

      res.status(200).json({ message: 'Login successful', role: user.role });
    } else {
      res.status(401).json({ message: 'Invalid email or password' });
    }
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).send('An error occurred while logging in.');
  }
};

// Fetch all users
export const getAllUsers = async (req, res) => {
  try {
    const users = await Userreg.find({}, 'email unm'); // Fetch email and username only
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch users.' });
  }
};

// Delete a user by email
export const deleteUser = async (req, res) => {
  const { email } = req.body;
  try {
    await Userreg.findOneAndDelete({ email });
    res.status(200).json({ message: 'User deleted successfully.' });
  } catch (error) {
    res.status(500).json({ message: 'Failed to delete user.' });
  }
};
