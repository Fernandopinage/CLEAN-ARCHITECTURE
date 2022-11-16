import {expect, jest, test} from '@jest/globals';
import { SelectAllProduct } from '../app/usecase/product/SelectProduct';
import { CreateProduct } from '../app/usecase/product/CreateProduct';

describe('Product', () => {

    test('Create Product', () => {    

        const parms = {
            body:{
                id: 1,
                name: 'luiz fernando',
                price: 1.60
            }
        }

        const product = new CreateProduct();
        const result = product.execute(parms);

        expect(result.statusCode).toBe(201);
    });
  });