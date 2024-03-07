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
  },
  email: {
    type: String,
  },
  adharNumber: {
    type: String,
    required: true,
  },
  panCardNumber: {
    type: String,
    required: true,
  },
  gstNumber: {
    type: String,
  },
  address: {
    type: String,
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
  },
  role: {
    type: String,
    enum: ["admin", "buyer", "farmer"],
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
  image: {
    data: Buffer,
    contentType: String,
  }
});

const Register = mongoose.model("Register", registerSchema);

module.exports = Register;
