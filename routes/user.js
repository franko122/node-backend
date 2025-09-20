function GetUserRoutes() {
    const express = require('express');
    const app = express();
    const QalifiedUser = require('../usercontroller/register'); 
    app.post('/register',QalifiedUser) 
}
GetUserRoutes()