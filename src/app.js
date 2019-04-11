'use strict';

const fs = require('fs');
const util = require('util');

const io = require('socket.io-client');
const socket = io.connect('http://localhost:3333');

const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);

const loadFile = (file) => readFile(file);

const saveFile = (file,buffer) => writeFile(file,buffer);

const convertBuffer = buffer => Buffer.from(buffer.toString().trim().toUpperCase());

// socket.emit('save', 'Poop');

const alterFile = (file) => {
  return loadFile(file)
    .then( contents => convertBuffer(contents))
    .then( buffer => saveFile(file, buffer))
    .then (() => socket.emit('save', file))
    .catch( error => {
      console.log('hello world', error);
      socket.emit('error', error);
      return error;
    });
};

let file = process.argv.slice(2).shift();
let test = alterFile(file);

console.log('test', test);

module.exports = {loadFile, saveFile, convertBuffer, alterFile};