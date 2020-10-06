const express = require('express'); 
const app = express();
const path = require('path');
const http = require('http').Server(app);
const cors = require('cors');
const bodyParser = require('body-parser');
const io = require('socket.io')(http);
const MongoClient = require('mongodb').MongoClient;
var ObjectID = require('mongodb').ObjectID;
const sockets = require('./socket.js');
const server = require('./listen.js');

const PORT = 3000;
const url = 'mongodb://localhost:27017';


app.use(cors());
app.use(bodyParser.json());

sockets.connect(io, PORT);

server.listen(http, PORT);

MongoClient.connect(url, {poolSize:10,useNewUrlParser: true,useUnifiedTopology: true},function(err, client){
    if (err) {return console.log(err)}
        const dbName = 'mydb';
        const db = client.db(dbName);
        console.log("Database Created");
        console.log(db.databaseName);
        db.collection('users').drop(function(err, delOK){
            if (err) {return console.log(err)}
            if (delOK) console.log('Collection Deleted');
        })

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
            console.log(res.insertedCount);
            
        });

});

//require('./routes/api-login.js')(app,path);
