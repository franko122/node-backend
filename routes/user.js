function GetUserRoutes() {
    const express = require('express');
    const QalifiedUser = require('../usercontroller/register');
    const app = express(); 
    app.get('/register',QalifiedUser) 
}
GetUserRoutes()