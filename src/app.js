const express = require('express');
const todoController = require('./controllers/todoController');

const app = express();
//Set template engine
app.set('view engine', 'ejs');
//Static files
app.use('/assets', express.static('../public'));
//Start controllers
todoController(app);
//Listen to port
app.listen(8080);
console.log('Server started. Now listening...');