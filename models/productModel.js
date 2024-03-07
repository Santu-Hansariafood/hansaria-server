const mongoose = require("mongoose");

const productSchema = mongoose.Schema(
  {
    productName: {
      type: String,
      required: [true, "Please enter a product name"],
    },
    productUnit: {
      type: Number,
      required: true,
      default: 0,
    },
    productHsnCode: {
      type: String,
      required: true,
    },
    productImage: {
      type: String,
      required: false,
    },
    productQualityParameter: {
      type: Map,
      of: Number,
      required: true,
      validate: {
        validator: function(value) {
          return value.size === 2 && value.has('moisture') && value.has('fungus');
        },
        message: 'Both "moisture" and "fungus" parameters are required with their respective limits.',
      }
    },
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
