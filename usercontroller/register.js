function Startbackend () {
   // here i import plugins
       const express = require("express"); 
       const app = express();
       const bodyparser =  require("body-parser");
       const cors = require("cors");
       const port = 4000;
       const sec = require("./home");  
       const database = require('../models/database');
       const userschema = require('../models/schema');
       const home = require('./home');
      //  here i user all usable plugings 
       app.use(bodyparser.json());
       app.use(cors()); 
      // here i connect to mgdatabase  
      //  create Routes 
            app.get('/register', async (req, res) => {
               const UserDetails ={
                  username:req.body.Username,
                  email:req.body.email,
                  password : req.body.password,
                  isAdmin:false,
                  companyName:req.body.companyname,
                  suspention:false, 
                  Uploadingacces:false,
               }      
               //  here i validate the data is filled
               if (!UserDetails.username  || !UserDetails.password  || !UserDetails.email  || !UserDetails.companyName) {
                  console.log("User deetails not valid", UserDetails);   
                  return res.status(400).send("All fields are required");
               } 
               else{
                  // chech if user already exists
                  try {
                     const exisstingUser = await userschema.findOne({email:UserDetails.email,Username:UserDetails.username,companyname:UserDetails.companyName})
                     if(exisstingUser){
                        console.log('User already exist');
                        res.status(400).send('User already exist')
                     }
                     else{
                        const newUser =  new userschema(UserDetails);
                        await newUser.save();
                        console.log('User created successfully ');
                        res.status(200).send('User creategd successfully')
                        
                     }
                  } catch (error) {
                    console.log(error)
                  }
               }
            });  
//  here i create server 
    app.listen(port,(err,)=>{
            if (err) {
                 console.log("error creating server");
            }
            else{
                console.log("Server running successfully on port " + port); 
            }
       }) 
}
Startbackend();
