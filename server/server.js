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
        //console.log(db.databaseName);
        require('./routes/api-user.js')(db,app);

});

require('./routes/api-login.js')(app,path);
