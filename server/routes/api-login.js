module.exports = function(app){
    app.post('/api/auth', function(req, res){
        let users = [{'username':'steve67','email':'steve@com','pass':'321','role':'Group Assistant'},{'username':'bob21', 'email':'bob@com','pass':'321','role':'Group Admin'},{'username':'timmy09','email':'timmy@com','pass':'321','role':'Super User'}]
    
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