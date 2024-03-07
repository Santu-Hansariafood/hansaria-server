const mongoose = require("mongoose");

const buyercompanySchema = mongoose.Schema(
  {
    companyName: {
      type: String,
      required: [true, "Please enter a transpoter name"],
    },
    companyLocation: {
      type: [String],
      validate: {
        validator: function (val) {
          return val.length >= 1 && val.length <= 9;
        },
        message: "At least One Location and at most nine location are allowed",
      },
      required: true,
    },
    companyBillingAddress: {
      type: [String],
      validate: {
        validator: function (val) {
          return val.length >= 1 && val.length <= 9;
        },
        message:
          "At least One Billing Address and at most nine Address are allowed",
      },
      required: true,
    },
    companyGSTno: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: ["Active", "Inactive"],
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Buyercompany = mongoose.model("Buyercompany", buyercompanySchema);

module.exports = Buyercompany;
