require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const multer = require("multer");
const path = require("path");
const Product = require("./models/productModel");
const Suppliers = require("./models/suppliersModel");
const Transport = require("./models/transportModel");
const Buyercompany = require("./models/buyercompanyModel");
const FinanceMastar = require("./models/financeMasterModel");
const Register = require("./models/register");
const EmployeeRegister = require("./models/employeeRegisterModel");
const RegisterPhoto = require("./models/registerPhoto");
const RegisterStore = require("./models/registerStoreModel");
const app = express();

app.use(express.json());
app.use(cors());
const PORT = process.env.PORT || 3000;

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

app.get("/product", async (req, res) => {
  try {
    const product = await Product.find({});
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//save the product into the database

app.post("/product", async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(200).json(product);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({
      message: error.message,
    });
  }
});

// find the product by id

app.get("/product/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findById(id);
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//update the product exsting products

app.put("/product/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findByIdAndUpdate(id, req.body);
    if (!product) {
      return res
        .status(404)
        .json({ message: `cannot find any product with ID ${id}` });
    }
    const updatedProduct = await Product.findById(id);
    res.status(200).json(updatedProduct);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// delete a product

app.delete("/product/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findByIdAndDelete(id);
    if (!product) {
      return res
        .status(404)
        .json({ message: `cannot find any product with ID ${id}` });
    }
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// ------Product API END------

// ------Suppliers Api Start -------
//save the product into the database
app.post("/suppliers", async (req, res) => {
  try {
    const suppliers = await Suppliers.create(req.body);
    res.status(200).json(suppliers);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({
      message: error.message,
    });
  }
});

// find all suppliers

app.get("/suppliers", async (req, res) => {
  try {
    const suppliers = await Suppliers.find({});
    res.status(200).json(suppliers);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//find the user by  its ID

app.get("/suppliers/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const suppliers = await Suppliers.findById(id);
    res.status(200).json(suppliers);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//update the suppliers in to the suppliers

app.put("/suppliers/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const suppliers = await Suppliers.findByIdAndUpdate(id, req.body);
    if (!suppliers) {
      return res
        .status(404)
        .json({ message: `cannot find any Suppliers with ID ${id}` });
    }
    const updatedSuppliers = await Suppliers.findById(id);
    res.status(200).json(updatedSuppliers);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Delete a suppliers

app.delete("/suppliers/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const suppliers = await Suppliers.findByIdAndDelete(id);
    if (!suppliers) {
      return res
        .status(404)
        .json({ message: `cannot find any suppliers with ID ${id}` });
    }
    res.status(200).json(suppliers);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// ------Suppliers Api END -------

// --------- Transporter api Start -------

app.post("/transport", async (req, res) => {
  try {
    const transport = await Transport.create(req.body);
    res.status(200).json(transport);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({
      message: error.message,
    });
  }
});

// find all transport

app.get("/transport", async (req, res) => {
  try {
    const transport = await Transport.find({});
    res.status(200).json(transport);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//find the transport by  its ID

app.get("/transport/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const transport = await Transport.findById(id);
    res.status(200).json(transport);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//update the transport in to the suppliers

app.put("/transport/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const transport = await Transport.findByIdAndUpdate(id, req.body);
    if (!transport) {
      return res
        .status(404)
        .json({ message: `cannot find any Suppliers with ID ${id}` });
    }
    const updatedTransport = await Transport.findById(id);
    res.status(200).json(updatedTransport);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Delete a transport

app.delete("/transport/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const transport = await Transport.findByIdAndDelete(id);
    if (!transport) {
      return res
        .status(404)
        .json({ message: `cannot find any transport with ID ${id}` });
    }
    res.status(200).json(transport);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//---End of transport API ---

// APi Start for Buyercompany

app.post("/buyerCompany", async (req, res) => {
  try {
    const buyerCompany = await Buyercompany.create(req.body);
    res.status(200).json(buyerCompany);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({
      message: error.message,
    });
  }
});

// find all Buyercompany

app.get("/buyerCompany", async (req, res) => {
  try {
    const buyerCompany = await Buyercompany.find({});
    res.status(200).json(buyerCompany);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//find the Buyercompany by  its ID

app.get("/buyerCompany/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const buyerCompany = await Buyercompany.findById(id);
    res.status(200).json(buyerCompany);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//update the Buyercompany in to the Buyercompany

app.put("/buyerCompany/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const buyerCompany = await Buyercompany.findByIdAndUpdate(id, req.body);
    if (!buyerCompany) {
      return res
        .status(404)
        .json({ message: `cannot find any Buyercompany with ID ${id}` });
    }
    const updatedBuyerCompany = await Buyercompany.findById(id);
    res.status(200).json(updatedBuyerCompany);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Delete a transport

app.delete("/buyerCompany/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const buyerCompany = await Buyercompany.findByIdAndDelete(id);
    if (!buyerCompany) {
      return res
        .status(404)
        .json({ message: `cannot find any buyerCompany with ID ${id}` });
    }
    res.status(200).json(buyerCompany);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//---End of Buyercompany API ---

// find all financeMaster

app.get("/financeMaster", async (req, res) => {
  try {
    const financeMaster = await FinanceMastar.find({});
    res.status(200).json(financeMaster);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//find the financeMaster by  its ID

app.get("/financeMaster/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const financeMaster = await FinanceMastar.findById(id);
    res.status(200).json(financeMaster);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//update the financeMaster in to the financeMaster

app.put("/financeMaster/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const financeMaster = await FinanceMastar.findByIdAndUpdate(id, req.body);
    if (!financeMaster) {
      return res
        .status(404)
        .json({ message: `cannot find any Finance Master with ID ${id}` });
    }
    const updatedFinanceMaster = await FinanceMastar.findById(id);
    res.status(200).json(updatedFinanceMaster);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Delete a financeMaster

app.delete("/financeMaster/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const financeMaster = await FinanceMastar.findByIdAndDelete(id);
    if (!financeMaster) {
      return res
        .status(404)
        .json({ message: `cannot find any financeMaster with ID ${id}` });
    }
    res.status(200).json(financeMaster);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//---End of Buyercompany API ---

// Register for farmer

// app.post("/register", async (req, res) => {
//   try {
//     const register = await Register.create(req.body);
//     res.status(200).json(register);
//   } catch (error) {
//     console.log(error.message);
//     res.status(500).json({
//       message: error.message,
//     });
//   }
// });

app.post(
  "/register",
  upload.fields([
    { name: "adharCard", maxCount: 1 },
    { name: "panCard", maxCount: 1 },
    { name: "gstCard", maxCount: 1 },
    { name: "passCard", maxCount: 1 },
    { name: "farmarPhoto", maxCount: 1 },
  ]),
  async (req, res) => {
    try {
      // Check if all required files are present
      const requiredFiles = ["adharCard", "panCard", "gstCard", "passCard", "farmarPhoto"];
      for (const file of requiredFiles) {
        if (!req.files[file]) {
          return res.status(400).json({ message: `${file} is required` });
        }
      }

      // Access file buffers and assign them to respective fields
      const adharCard = req.files["adharCard"][0].buffer;
      const panCard = req.files["panCard"][0].buffer;
      const gstCard = req.files["gstCard"][0].buffer;
      const passCard = req.files["passCard"][0].buffer;
      const farmarPhoto = req.files["farmarPhoto"][0].buffer;

      // Create a new Register document
      const register = await Register.create({
        ...req.body,
        adharCard: adharCard,
        panCard: panCard,
        gstCard: gstCard,
        passCard: passCard,
        farmarPhoto: farmarPhoto,
      });

      res.status(200).json(register);
    } catch (error) {
      console.log(error.message);
      res.status(500).json({ message: error.message });
    }
  }
);


// GET register

app.get("/register", async (req, res) => {
  try {
    const register = await Register.find({});
    res.status(200).json(register);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//find the register by  its ID

// app.get("/register/:id", async (req, res) => {
//   try {
//     const { id } = req.params;
//     const register = await Register.findById(id);
//     res.status(200).json(register);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });

app.get("/register/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const register = await Register.findById(id);
    if (!register) {
      return res.status(404).json({ message: "Register not found" });
    }
    // If imagePath exists, assume it's a path to the image
    if (register.imagePath) {
      // Construct the absolute path to the image
      const absolutePath = path.join(__dirname, 'public', register.imagePath); // Assuming images are stored in a 'public' directory
      // Add imagePath to the register object before sending JSON response
      register.imagePath = absolutePath;
    }
    res.status(200).json(register);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//update the register in to the Buyercompany

app.put("/register/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const register = await Register.findByIdAndUpdate(id, req.body);
    if (!register) {
      return res
        .status(404)
        .json({ message: `cannot find any Register with ID ${id}` });
    }
    const updatedregister = await Register.findById(id);
    res.status(200).json(updatedregister);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Delete a register

app.delete("/register/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const register = await Register.findByIdAndDelete(id);
    if (!register) {
      return res
        .status(404)
        .json({ message: `cannot find any register with ID ${id}` });
    }
    res.status(200).json(register);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// EmployeeRegister

app.post("/employeeRegister", async (req, res) => {
  try {
    const employeeRegister = await EmployeeRegister.create(req.body);
    res.status(200).json(employeeRegister);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({
      message: error.message,
    });
  }
});

// GET employeeRegister

app.get("/employeeRegister", async (req, res) => {
  try {
    const employeeRegister = await EmployeeRegister.find({});
    res.status(200).json(employeeRegister);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//find the employeeRegister by  its ID

app.get("/employeeRegister/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const employeeRegister = await EmployeeRegister.findById(id);
    res.status(200).json(employeeRegister);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//update the employeeRegister in to the Buyercompany

app.put("/employeeRegister/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const employeeRegister = await EmployeeRegister.findByIdAndUpdate(
      id,
      req.body
    );
    if (!employeeRegister) {
      return res
        .status(404)
        .json({ message: `cannot find any Register with ID ${id}` });
    }
    const updatedemployeeRegister = await EmployeeRegister.findById(id);
    res.status(200).json(updatedemployeeRegister);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Delete a employeeRegister

app.delete("/employeeRegister/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const employeeRegister = await EmployeeRegister.findByIdAndDelete(id);
    if (!employeeRegister) {
      return res
        .status(404)
        .json({ message: `cannot find any register with ID ${id}` });
    }
    res.status(200).json(employeeRegister);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.post(
  "/registerPhoto",
  upload.fields([
    { name: "aadhaarCard", maxCount: 1 },
    { name: "panCard", maxCount: 1 },
    { name: "gstCertificate", maxCount: 1 },
    { name: "bankAccount", maxCount: 1 },
    { name: "profilePhoto", maxCount: 1 },
  ]),
  async (req, res) => {
    try {
      const files = req.files;

      const uploadedFiles = {};
      Object.keys(files).forEach((fieldName) => {
        uploadedFiles[fieldName] = files[fieldName][0].filename;
      });
      const registerPhoto = await RegisterPhoto.create(uploadedFiles);
      res
        .status(201)
        .json({
          msg: "New images uploaded successfully!",
          files: registerPhoto,
        });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
);

app.get("/registerPhoto", async (req, res) => {
  try {
    const photos = await RegisterPhoto.find({});
    res.status(200).json(photos);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// register store API

app.post("/registerStore", async (req, res) => {
  try {
    const registerStore = await RegisterStore.create(req.body);
    res.status(200).json(registerStore);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({
      message: error.message,
    });
  }
});

app.get("/registerStore", async (req, res) => {
  try {
    const registerStore = await RegisterStore.find({});
    res.status(200).json(registerStore);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//find the register by  its ID

app.get("/registerStore/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const registerStore = await RegisterStore.findById(id);
    res.status(200).json(registerStore);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//update the register in to the Buyercompany

app.put("/registerStore/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const registerStore = await RegisterStore.findByIdAndUpdate(id, req.body);
    if (!registerStore) {
      return res
        .status(404)
        .json({ message: `cannot find any Register with ID ${id}` });
    }
    const updatedregisterStore = await RegisterStore.findById(id);
    res.status(200).json(updatedregisterStore);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Delete a register

app.delete("/registerStore/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const registerStore = await RegisterStore.findByIdAndDelete(id);
    if (!registerStore) {
      return res
        .status(404)
        .json({ message: `cannot find any register Store with ID ${id}` });
    }
    res.status(200).json(registerStore);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

mongoose.set("strictQuery", false);
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("Connected to DB");
    app.listen(PORT, () => console.log(`http://localhost:${PORT}`));
  })
  .catch((error) => {
    console.log(error);
  });
