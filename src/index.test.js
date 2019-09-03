import {validator} from './index.js';

describe('tic tac toe game validator', () => {
    it('should get an array', () => {
        expect(() => validator('someString')).toThrow('should get an array')
        expect(() => validator([])).not.toThrow('should get an array')
    })
});


//your code goes here:
