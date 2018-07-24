module.exports = app =>{
    app.get('/todo', (request, response)=>{
        response.render('todo');
    });
    app.post('/todo', (request, response)=>{
        
    });
    app.delete('/todo', (request, response)=>{
        
    });
};