require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const multer=require('multer');
const path = require('path');
var fs = require('fs');
const Product = require("./models/productModel");
const Suppliers = require("./models/suppliersModel");
const Transport = require("./models/transportModel");
const Buyercompany = require("./models/buyercompanyModel");
const FinanceMastar = require("./models/financeMasterModel");
const Register = require("./models/register");
const EmployeeRegister = require("./models/employeeRegisterModel");
const RegisterPhoto = require("./models/registerPhoto")
const app = express();

app.use(express.json());
app.use(cors());
const PORT = process.env.PORT || 3000;

// Multer storage configuration
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, "uploads"));
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage: storage });



// -------product API Start------
// find all product

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

// Register

app.post("/register", async (req, res) => {
  try {
    const register = await Register.create(req.body);
    res.status(200).json(register);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({
      message: error.message,
    });
  }
});

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

app.get("/register/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const register = await Register.findById(id);
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

// register photo uploaded

// app.post("/registerPhoto", async (req, res) => {
//   const body = req.body;
//   try{
//       const newImage = await RegisterPhoto.create(body)
//       newImage.save();
//       res.status(201).json({ msg : "New image uploaded...!"})
//   }catch(error){
//       res.status(409).json({ message : error.message })
//   }
// })


// app.get('/registerPhoto', (req, res) => {
//   try{
//       RegisterPhoto.find({}).then(data => {
//           res.json(data)
//       }).catch(error => {
//           res.status(408).json({ error })
//       })
//   }catch(error){
//       res.json({error})
//   }
// })


// Endpoint for uploading photos
// app.post("/registerPhoto", upload.single("file"), async (req, res) => {
//   const body = req.body;
//   try {
//     const newImage = await RegisterPhoto.create(body);
//     newImage.save();
//     res.status(201).json({ msg: "New image uploaded...!" });
//   } catch (error) {
//     res.status(409).json({ message: error.message });
//   }
// });

app.post("/registerPhoto", upload.fields([
  { name: 'aadhaarCard', maxCount: 1 },
  { name: 'panCard', maxCount: 1 },
  { name: 'gstCertificate', maxCount: 1 },
  { name: 'bankAccount', maxCount: 1 },
  { name: 'profilePhoto', maxCount: 1 }
]), async (req, res) => {
  try {
    const files = req.files;
    // Process each file as needed
    const uploadedFiles = {};
    Object.keys(files).forEach(fieldName => {
      uploadedFiles[fieldName] = files[fieldName][0].filename;
    });
    // Save the filenames to the database or perform any other actions you need
    res.status(201).json({ msg: "New images uploaded successfully!", files: uploadedFiles });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Endpoint for retrieving photos
app.get("/registerPhoto", async (req, res) => {
  try {
    const photos = await RegisterPhoto.find({});
    res.status(200).json(photos);
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
