function GetUserRoutes() {
    const express = require('express');
    const app = express();
    const QalifiedUser = require('../usercontroller/register');
    const app = express(); 
    app.post('/register',QalifiedUser) 
}
GetUserRoutes()