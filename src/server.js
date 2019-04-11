'use strict';

const io = require('socket.io')(3333);

io.on('connection', (socket) => {

  console.log('Connected', socket.id);
  
  socket.on('error', (payload) => {
    console.log('i got here');
    socket.broadcast.emit('oops', payload);
  });

  socket.on('save', (payload) => {
    console.log('Made it to server on save');
    socket.broadcast.emit('message', payload);
  });

  socket.on('disconnection', ()=>{
    console.log('goodbye');
  });

});


