
import express from 'express';
import { login, getAllUsers,deleteUser,} from '../controllers/admincontroller.js';


const adminRouter = express.Router();

// Admin Login Route API
adminRouter.post('/login', login);

// Fetch all users API
adminRouter.get('/manage-users', getAllUsers);

// Delete a user by email API
adminRouter.delete('/manage-users', deleteUser);

// Change admin password API
//adminRouter.put('/changepassword', changePassword);

// Render settings page 
adminRouter.get('/settings', (req, res) => {
  res.render('Settings');
});

adminRouter.get('/manageusers', (req, res) => {
  res.render('manageusers');
});
adminRouter.get('/settings', (req, res) => {
  res.render('Settings');
});

export default adminRouter;
