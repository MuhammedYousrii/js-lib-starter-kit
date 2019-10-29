import {expect} from 'chai';
import { addTwoNumbers } from '../src/js-lib-starter-kit';
import { X } from  '../src/x.class';
describe('Adding two numbers', () => {

    it('Should return the correct addition result of two numbers', () => {
      


        expect(addTwoNumbers(2, 3)).to.equal(5); 
    });
});

describe('Logging', () => {
    it('Should log the shape that passed to class instance', () => {
        
        const xInstance = new X('square');
        expect(xInstance.logShape()).equal('square')
    })
})
