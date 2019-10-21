import { add } from 'lodash';
import { X } from './x.class';

/**
 * 
 * @param num1 
 * @param num2 
 */
function addTwoNumbers(num1: number, num2: number ): number {
    return add(num1, num2);
}

export { X, addTwoNumbers };