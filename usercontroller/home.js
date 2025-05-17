function StartHome() {
    let express = require("express");
    let app =express();  
    let port = 5000;  
     app.get('/home:id',(req,res)=>{
        
        let id = req.params.id  

        const Userdetails = {
            Userid:id,
            Username:'frank',
            password:65751649,
            email:'franklin@gmail.com',
            isAdmin:true,
            suspention:false,
            companyName:'Enoxo',
            Uploadingacces:false,  
        }
        
        let mainUser = id =Userdetails.Userid;
        
        console.log(mainUser , Userdetails); 
        
        res.send(`welcome ${Userdetails.Username} <br> your password ${Userdetails.password} <br> Your id ${Userdetails.Userid} <br> Your email ${Userdetails.email}`)
        
        // here i validate user is admin
        if(Userdetails.isAdmin == true){ 
        console.log('redirecting to admin'); 
        }
        else{
            console.log('u are not admin');                                                                 
        }  
     })
    app.listen(port,(err)=>{
       if (err) {
           console.log('error to connect to server');
       }
       else{
           console.log('connected to server 5000 successfully'); 
       }
    })

 
    
}
StartHome();