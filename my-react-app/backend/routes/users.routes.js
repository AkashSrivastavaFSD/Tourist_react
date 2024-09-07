import express from 'express';
import { insertData, login, changePassword } from '../controllers/userregistration.js';
import { createBooking, getUserBookings, cancelBooking } from '../controllers/bookingcontroller.js';

const userRouter = express.Router();

// BOOKING API
userRouter.post('/book', createBooking);
userRouter.get('/mybookings/:email', getUserBookings); // Make sure the endpoint is correct
userRouter.delete('/cancel/:id', cancelBooking);

// Registration Route API
userRouter.post("/create", insertData);

// Login Route API
userRouter.post("/login", login);

// Change user password API
userRouter.put('/changepassword', changePassword);

// Middleware to check if the user is authenticated
userRouter.use((req, res, next) => {
    if (req.session.unm !== undefined && (req.session.role === 'user' || req.session.role === 'admin')) {
        next();
    } else {
        res.redirect("/login");
    }
});

// Protected Routes (only accessible when logged in)
userRouter.get('/', (req, res) => {
    const user1 = req.session.unm;
    res.render("userindex", { 'msg': user1 });
});

userRouter.get("/mybookings", (req, res) => {
    res.render("My Bookings");
});

userRouter.get("/bookmytour", (req, res) => {
    res.render("Book Tour");
});
userRouter.get("/team", (req, res) => {
    res.render("team");
});
userRouter.get("/contact", (req, res) => {
    res.render("Contact");
});

userRouter.get("/about", (req, res) => {
    res.render("About");
});

userRouter.get("/service", (req, res) => {
    res.render("service");
});
userRouter.get('/settings', (req, res) => {
    res.render('Settings');
});
userRouter.get("/testimonial", (req, res) => {
    res.render("testimonial");
});
userRouter.get("/booking", (req, res) => {
    res.render("booking");
});

export default userRouter;



