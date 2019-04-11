'use strict';

const logger = require('../src/logger.js');

jest.mock('fs');

describe('logger can', () => {

  it('Wiil not accept a bad file', () => {

  });

  it('logs the console', () => {
    const log = jest.spyOn(console, 'log');
    logger.save('hello');
    expect(log).toHaveBeenCalled();
  });

});