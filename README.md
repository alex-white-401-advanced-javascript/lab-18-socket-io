![CF](http://i.imgur.com/7v5ASc8.png) LAB 18
=================================================

## Socket.io

### Author: Alexander White

### Links and Resources
* [PR](https://github.com/alex-white-401-advanced-javascript/lab-18-socket-io/pull/1)
* [![Build Status](https://travis-ci.com/alex-white-401-advanced-javascript/lab-18-socket-io.svg?branch=master)](https://travis-ci.com/alex-white-401-advanced-javascript/lab-18-socket-io)
<!-- * [back-end](http://xyz.com) (when applicable)
* [front-end](http://xyz.com) (when applicable) -->

#### Documentation
<!-- * [swagger](http://xyz.com) (API assignments only) -->
* [jsdoc](./docs/index.html)
### Modules
#### `server.js`
##### Exported Values and Methods

###### `server.on('connection', (socket) => server connection`

###### `let dispatchEvent = (buffer) => TCP`

#### `app.js`
##### Exported Values and Methods

###### `loadFile = (file) => readFile(file) -> reads file`
###### `saveFile = (file, buffer) => writeFile(file, buffer) -> writes to file`
###### `onvertBuffer = buffer => Buffer.from( buffer.toString().trim().toUpperCase()) -> changes file`
###### `const alterFile = (file) -> edits file`


### Setup
* Clone down the repo
* `npm i`
* Have three seperate terminal windows open
* nodemon `app.js` and `logger.js`

#### Running the app
* `node app.js text.txt`
  
#### Tests
##### How do you run tests? 
* `npm test`
##### What assertions were made? 
* 
##### What assertions need to be / should be made? 
* 

