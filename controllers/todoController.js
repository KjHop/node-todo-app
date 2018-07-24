const bodyParser = require('body-parser');

let data = [{item: 'get milk'}, {item: 'walk dog'}, {item: 'jebac disa'}];
const urlencodedParser = bodyParser.urlencoded({extended:false});

module.exports = app =>{
    app.get('/todo', (request, response)=>{
        response.render('todo', {todos: data});
    });

    app.post('/todo', urlencodedParser, (request, response)=>{
        data.push(request.body);
        response.json();
    });

    app.delete('/todo/:item', (request, response)=>{
        data = data.filter((todo)=>{
            return todo.item.replace(/ /g, '-') !== request.params.item;
        });
    });
};