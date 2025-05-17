function Startlogin() {
    const express = require('express');
    const port = 600;
    const app = express();
    const database = require('../models/database') 

    const Userlogindata ={
        phonenumber:4344344,
        password:73763
    }
    app.listen(port,(error)=>{
        if(error){
            console.log(error); 
        }
        else{
            console.log('login server runing succefully'); 
        }
    })
}
Startlogin()