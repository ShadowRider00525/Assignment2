module.exports = function(db,app){
    app.post('/api/users', function(req, res){
        db.collection('users').drop(function(err, delOK){
            if (err) {return console.log(err)}
            if (delOK) console.log('Collection Deleted');
        });

        db.createCollection('users', function(err,res){
            if (err) {return console.log(err)}
            console.log("Collection Created");
        });
        var myobj = [
            {username:'tim09', email:'tim@a.org',pass:'123', role:'Super User'},
            {username:'bob21',email:'bob@a.org',pass:'123',role:'Group Admin'},
            {username:'steve68',email:'steve@a.org',pass:'123',role:'Group Assisstant'}
        ];
        db.collection('users').insertMany(myobj, function(err, res){
            if (err) {return console.log(err)}
            //console.log(res.insertedCount);   
        });

        if(!req.body){
            return res.sendStatus(400)
        }

        var customer = {};
        customer.valid = false;
        customer.username = '';
        customer.email = '';
        customer.role = '';

        for(let i = 0; i < myobj.length; i++){
            if(req.body.myobj.username == myobj[i].username && req.body.pass == myobj[i].pass){
                customer.valid = true;
                customer.username = myobj[i].username;
                customer.email = myobj[i].email;
                customer.role = myobj[i].role;
            }
        }
        res.send(customer);
    });
}