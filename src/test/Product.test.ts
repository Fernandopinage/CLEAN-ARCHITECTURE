import {expect, jest, test} from '@jest/globals';
import { SelectProduct } from '../app/usecase/product/SelectProduct'

describe('Validate the of mail', () => {

    test('Select Product', () => {    
        const product = new SelectProduct();
        console.log(product.execute());

        expect(true).toBe(true);
    });
  });