function StartDatabse() { 
   const { default: mongoose } = require("mongoose"); 
   const mondb = require('mongoose');
   const dbUrl = "mongodb+srv://franklin:57geiWvOgDTC7Y4m@cluster0.cuy2i.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

   mongoose.connect(dbUrl).then( 
    ()=>{
         console.log(" mongodatabase connected successsfully"); 
    } 
 ).catch(error =>{
    console.log("failed to connect to  mongodatabase check your internet connection"); 
 })   
}
StartDatabse()

module.exports = StartDatabse;