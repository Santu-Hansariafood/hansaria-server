const mongoose = require("mongoose");

const registerPhotoSchema = mongoose.Schema({
    aadhaarCard:{
        type:String, 
        required:true
    },
    panCard:{
        type:String, 
        required:true
    },
    gstCertificate:{
        type:String, 
        required:true
    },
    bankAccount:{
        type:String, 
        required:true
    },
    profilePhoto:{
        type:String, 
        required:true
    },
})

const RegisterPhoto = mongoose.model("RegisterPhoto", registerPhotoSchema);

module.exports = RegisterPhoto;