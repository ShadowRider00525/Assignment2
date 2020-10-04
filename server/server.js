const express = require('express'); 
const app = express();
const path = require('path');
const http = require('http').Server(app);
const cors = require('cors');
const bodyParser = require('body-parser');
const io = require('socket.io')(http);
const sockets = require('./socket.js');
const server = require('./listen.js');

const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());

sockets.connect(io, PORT);

server.listen(http, PORT);

require('./routes/api-login.js')(app,path);
