const mongoose = require("mongoose");

const registerSchema = mongoose.Schema({
  firstName: {
    type: String,
    required: [true, "Please enter a valid name"],
  },
  lastName: {
    type: String,
    required: [true, "Please enter a valid last name"],
  },
  mobile: {
    type: String,
    //required: true,
  },
  email: {
    type: String,
  },
  adharNumber: {
    type: String,
    //required: true,
  },
  panCardNumber: {
    type: String,
    //required: true,
  },
  gstNumber: {
    type: String,
  },
  address: {
    type: String,
    //required: true
  },
  state: {
    type: String,
  },
  district: {
    type: String,
  },
  village: {
    type: String,
  },
  pinCode: {
    type: String,
    //required: true
  },
  role: {
    type: String,
    enum: ["admin", "buyer", "farmer"],
  },
  farmerDeals: {
    type: String,
    enum: ["maize", "wheat", "rice", "soyabean"],
  },
  account: {
    type: String,
  },
  acName: {
    type: String,
  },
  ifsc: {
    type: String,
  },
  branchName: {
    type: String,
  },
  bankName: {
    type: String,
  },
  adharCard: {
    type: Buffer,
    contentType: "image/png" | "image/jpeg",
  },
  panCard: {
    type: Buffer,
    contentType: "image/png" | "image/jpeg",
  },
  gstCard: {
    type: Buffer,
    contentType: "image/png" | "image/jpeg",
  },
  passCard: {
    type: Buffer,
    contentType: "image/png" | "image/jpg",
  },
  farmarPhoto: {
    type: Buffer,
    contentType: "image/png" | "image/jpeg",
  },
});

const Register = mongoose.model("Register", registerSchema);

module.exports = Register;
