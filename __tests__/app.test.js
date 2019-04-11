'use strict';

const {alterFile} = require('../src/app.js');

jest.mock('fs');

describe('app can', () => {

  it('Will not accept a bad file', () => {
    let file = 'bad.txt';
    alterFile(file)
      .then( error => {
        expect(error).toBeDefined();
      });
  });

});