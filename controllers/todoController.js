const bodyParser = require('body-parser');
const mongoose = require('mongoose');

//Conect to the database
mongoose.connect('mongodb://test:testtest1@ds247001.mlab.com:47001/urdatabase', {useNewUrlParser: true});

//Create a schema
const todoSchema = new mongoose.Schema({
    item: String
});

const Todo = mongoose.model('Todo', todoSchema);
// let data = [{item: 'get milk'}, {item: 'walk dog'}, {item: 'jebac disa'}];
const urlencodedParser = bodyParser.urlencoded({extended:false});

module.exports = app =>{
    app.get('/todo', (request, response)=>{
        //Get data from database
        Todo.find({}, (err, data)=>{
            if (err) throw err;
            response.render('todo', {todos: data});
        });
    });

    app.post('/todo', urlencodedParser, (request, response)=>{
        //Send data to database
        let newTodo = Todo(request.body).save((err, data)=>{
            if (err) throw err;
            response.json(data);
        });
    });

    app.delete('/todo/:item', (request, response)=>{
        //Delete requested item from database
        Todo.findOne({item: request.params.item.replace(/\-/g, " ")}).remove((err, data)=>{
            if (err) throw err;
            response.json(data);
        });
    });
};
