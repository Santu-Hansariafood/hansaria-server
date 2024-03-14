const mongoose = require("mongoose");

const registerStoreSchema = mongoose.Schema({
  storeName: {
    type: String,
    required: true,
  },
  storeLocation: {
    type: String,
    required: true,
  },
  storeCapacity: {
    type: Number,
    required: true,
  },
  storeManager: {
    type: String,
    required: true,
  },
  storeAddress: {
    type: String,
    required: true,
  },
  pinCode: {
    type: String,
    required: true,
  },
  storeMobileNumber: {
    type: String,
    required: true,
  },
});

const RegisterStore = mongoose.model("RegisterStore", registerStoreSchema);

module.exports = RegisterStore;
