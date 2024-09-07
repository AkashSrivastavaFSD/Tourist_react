import mongoose from "mongoose";
mongoose.connect("mongodb://127.0.0.1:27017/Demo_tourist");

// Defining the User registration schema
const Userreg = new mongoose.Schema({
  ename: { type: String, required: true, trim: true },
  email: { type: String, required: true, trim: true },
  mno: { type: String, required: true, trim: true },
  unm: { type: String, required: true, trim: true },
  pw: { type: String, required: true, trim: true },
  role: { type: String, required: true, trim: true },
});

// Creating the model for user registration
const userregistration = mongoose.model("user", Userreg);
export default userregistration;
