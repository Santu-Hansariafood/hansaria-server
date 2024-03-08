const mongoose = require("mongoose");

const employeeRegisterSchema = mongoose.Schema({
  firstname: {
    type: String,
    required: [true, "Please enter a valid name"],
  },
  lastname: {
    type: String,
    required: [true, "Please enter a valid last name"],
  },
  mobile: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    lowercase: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  confirmPassword: {
    type: String,
    required: true,
  },
});

const EmployeeRegister = mongoose.model(
  "EmployeeRegister",
  employeeRegisterSchema
);

module.exports = EmployeeRegister;
