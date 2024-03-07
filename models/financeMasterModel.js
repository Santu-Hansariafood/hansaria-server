const mongoose = require("mongoose");

const financeMasterSchema = mongoose.Schema(
  {
    financerName: {
      type: String,
      required: [true, "Please enter a transpoter name"],
    },
    financerEmail: {
      type: [String],
      validate: {
        validator: function (val) {
          return val.length >= 1 && val.length <= 9;
        },
        message: "At least One Email and at most nine Email are allowed",
      },
      required: true,
    },
    financerPhone: {
      type: [String],
      validate: {
        validator: function (val) {
          return val.length >= 1 && val.length <= 9;
        },
        message:
          "At least One Phone Number and at most nine Phone Number are allowed",
      },
      required: true,
    },
    contactPerson: {
      type: [String],
      validate: {
        validator: function (val) {
          return val.length >= 1 && val.length <= 9;
        },
        message:
          "At least One Contact person and at most nine Contact Person are allowed",
      },
      required: true,
    },
    charges: {
      type: String,
      required: true,
    },
    address1: {
      type: [String],
      validate: {
        validator: function (val) {
          return val.length >= 1 && val.length <= 9;
        },
        message: "At least One Address and at most nine address are allowed",
      },
      required: true,
    },
    address2: {
      type: [String],
      validate: {
        validator: function (val) {
          return val.length >= 1 && val.length <= 9;
        },
        message: "At least One Address and at most nine address are allowed",
      },
      required: true,
    },
    address3: {
      type: [String],
      validate: {
        validator: function (val) {
          return val.length >= 1 && val.length <= 9;
        },
        message: "At least One Address and at most nine address are allowed",
      },
      required: true,
    },
    city: {
      type: [String],
      validate: {
        validator: function (val) {
          return val.length >= 1 && val.length <= 9;
        },
        message: "At least One Address and at most nine address are allowed",
      },
      required: true,
    },
    pin: {
      type: [String],
      validate: {
        validator: function (val) {
          return val.length >= 1 && val.length <= 9;
        },
        message: "At least One Address and at most nine address are allowed",
      },
      required: true,
    },
    state: {
      type: [String],
      validate: {
        validator: function (val) {
          return val.length >= 1 && val.length <= 9;
        },
        message: "At least One Address and at most nine address are allowed",
      },
      required: true,
    },
    action: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

const FinanceMastar = mongoose.model("FinanceMastar", financeMasterSchema);

module.exports = FinanceMastar;
