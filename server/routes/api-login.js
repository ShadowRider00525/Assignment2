module.exports = function(app){
    app.post('/api/auth', function(req, res){
        let users = [{username:'tim09', email:'tim@a.org',pass:'123', role:'Super User'},
        {username:'bob21',email:'bob@a.org',pass:'123',role:'Group Admin'},
        {username:'steve68',email:'steve@a.org',pass:'123',role:'Group Assisstant'}]
    
        if(!req.body){
            return res.sendStatus(400)
        }

        var customer = {};
        customer.valid = false;
        customer.username = '';
        customer.email = '';
        customer.role = '';

        for(let i = 0; i < users.length; i++){
            if(req.body.username == users[i].username && req.body.pass == users[i].pass){
                customer.valid = true;
                customer.username = users[i].username;
                customer.email = users[i].email;
                customer.role = users[i].role;
            }
        }
        res.send(customer);
    });
}