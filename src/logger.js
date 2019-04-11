'use strict';

const io = require('socket.io-client');
const socket = io.connect('http://localhost:3333');

const logger = module.exports = {};

logger.save = (payload) => {
  console.log('heard', payload);
};

socket.on('message', logger.save);

socket.on('oops', error => {
  console.error(error);
});

