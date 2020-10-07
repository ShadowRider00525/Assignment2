module.exports = {

    connect: function (io, PORT)
    {
        io.on('connection', (socket)=> {
            io.emit('User connection on port ' + socket.io);
            console.log('User connection on port ' + PORT + ' : ' + socket.io);
           socket.on('message', (message)=>{
               io.emit('message', message);
           });
           socket.on('disconnect', function(){
            io.emit("User Left Chat " + socket.id);  
            console.log("User Left Chat " + socket.id);
           });
        });
    }
}