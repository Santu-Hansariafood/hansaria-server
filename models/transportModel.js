const mongoose = require("mongoose");

const transportSchema = mongoose.Schema(
  {
    transportName: {
      type: String,
      required: [true, "Please enter a transpoter name"],
    },
    transportMobile: {
      type: [String],
      validate: {
        validator: function (val) {
          return val.length >= 1 && val.length <= 9;
        },
        message:
          "At least one Phone Number and at most nine Phone Number are allowed",
      },
      required: true,
    },
    transportEmail: {
      type: [String],
      validate: {
        validator: function (val) {
          return val.length >= 1 && val.length <= 9;
        },
        message:
          "At least one Email Id and at most nine Emails Id's are allowed",
      },
      required: true,
    },
    transportPassword: {
      type: String,
      required: true,
    },
    isFirstLogin: {
      type: Boolean,
      required: true,
    },
    transportLocation: {
      type: [String],
      validate: {
        validator: function (val) {
          return val.length >= 1 && val.length <= 9;
        },
        message: "At least one location and at most nine locations are allowed",
      },
      required: true,
    },
    transportGSTno: {
      type: [String],
      validate: {
        validator: function (val) {
          return val.length >= 1 && val.length <= 9;
        },
        message:
          "At least one GST Number and at most nine GST Number are allowed",
      },
      required: true,
    },
    transportBillingAddress: {
      type: [String],
      validate: {
        validator: function (val) {
          return val.length >= 1 && val.length <= 9;
        },
        message:
          "At least one Billing Address and at most nine Billing Address are allowed",
      },
      required: true,
    },
    transportShipingAddress: {
      type: [String],
      validate: {
        validator: function (val) {
          return val.length >= 1 && val.length <= 9;
        },
        message:
          "At least one Transport shiping Address and at most nine Transport shiping Address are allowed",
      },
      required: true,
    },
  },

  {
    timestamps: true,
  }
);

const Transport = mongoose.model("Transport", transportSchema);

module.exports = Transport;
