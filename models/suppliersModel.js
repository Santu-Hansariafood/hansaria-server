const mongoose = require("mongoose");

const suppliersSchema = mongoose.Schema({
  supplierName: {
    type: String,
    required: [true, "Please enter a product name"],
  },
  supplierEmail: {
    type: [String],
    validate: {
      validator: function (val) {
        return val.length >= 1 && val.length <= 9;
      },
      message:
        "At least one company email should be provided for Other Company option.",
    },
    required: true,
  },
  supplierMobile: {
    type: [String],
    validate: {
      validator: function (val) {
        return val.length >= 1 && val.length <= 9;
      },
      message:
        "At least one Mobile Number should be provided for Other Company option.",
    },
    required: true,
  },
  supplierPassword: {
    type: String,
    required: true,
  },
  isFirstLogin: {
    type: Boolean,
  },
  supplierLocation: {
    type: [String],
    validate: {
      validator: function (val) {
        return val.length >= 1 && val.length <= 9;
      },
      message: "At least one location and at most nine locations are allowed",
    },
    required: true,
  },
  supplierGSTno: {
    type: [String],
    validate: {
      validator: function (val) {
        return val.length >= 1 && val.length <= 9;
      },
      message:
        "At least one GST number and at most nine GST numbers are allowed",
    },
    required: true,
  },
  supplierBillingAddress: {
    type: [String],
    validate: {
      validator: function (val) {
        return val.length >= 1 && val.length <= 9;
      },
      message: "At least one Supplier Billing  Address field is needed.",
    },
    required: true,
  },
  supplierShipingAddress: {
    type: [String],
    validate: {
      validator: function (val) {
        return val.length >= 1 && val.length <= 9;
      },
      message: "At least one supplier shiping address is needed",
    },
    required: true,
  },
  supplierState: {
    type: String,
    enum: ["State1", "State2", "State3" /* Add more states here */],
    required: true,
  },
  supplierCity: {
    type: String,
    enum: ["city1", "city2", "city3" /* Add more states here */],
    required: true,
  },
  supplierSeals: {
    type: [String],
    validate: {
      validator: function (val) {
        return val.length >= 1 && val.length <= 9;
      },
      message:
        "At least one product name should be provided for Other suppliers.",
    },
    required: true,
  },
  otherCompany: {
    type: [String],
    validate: {
      validator: function (val) {
        return val.length >= 1 && val.length <= 9;
      },
      message:
        "At least one company  name should be provided for Other Company option.",
    },
    required: true,
  },
  supplierBankname: {
    type: [String],
    validate: {
      validator: function (val) {
        return val.length >= 1 && val.length <= 9;
      },
      message: "At least one Bank Account number are needed to complete",
    },
    required: true,
  },
  supplierBranchname: {
    type: [String],
    validate: {
      validator: function (val) {
        return val.length >= 1 && val.length <= 9;
      },
      message:
        "At least one Branch Name number and at most nine Branch Name are allowed",
    },
    required: true,
  },
  supplierIfsc: {
    type: [String],
    validate: {
      validator: function (val) {
        return val.length >= 1 && val.length <= 9;
      },
      message:
        "At least one IFSC number and at most nine IFSC numbers are allowed",
    },
    required: true,
  },
  supplierAccountnumber: {
    type: [String],
    validate: {
      validator: function (val) {
        return val.length >= 1 && val.length <= 9;
      },
      message:
        "At least one Account number and at most nine Account numbers are allowed",
    },
    required: true,
  },
  supplierNameAsPerBank: {
    type: [String],
    validate: {
      validator: function (val) {
        return val.length >= 1 && val.length <= 9;
      },
      message: "At least one Name and at most nine Name numbers are allowed",
    },
    required: true,
  },
});

const Suppliers = mongoose.model("Suppliers", suppliersSchema);
module.exports = Suppliers;
