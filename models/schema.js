 
    const mongoose = require('mongoose');  
// Define the schema
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    trim: true
  },
  email:{
    type: String,
    required: true, 
    unique: true,
    trim: true,
    lowercase: true
  },
  password: {
    type: String,
    required: true
  },
  companyName: {
    type: String,
    required: true,
    trim: true
  }, 
  suspention: { 
    type: Boolean,
     default: false 
  }, 
  kycverification: { 
    type: Boolean,
     default: false 
  },
  monthlysub: { 
    type: Boolean, 
    default: false 
  },
  emailverification: { 
    type: Boolean, 
    default: false 
  },
  isAdmin: { 
    type: Boolean,
     default: false 
  },
  yearlysub: {
   type: Boolean,
   default: false }
}, {
  timestamps: true // Automatically adds createdAt and updatedAt fields
});

// Create the model
const User = mongoose.model('users', userSchema); 
module.exports = userSchema;