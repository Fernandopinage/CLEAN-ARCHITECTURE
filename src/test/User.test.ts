import {expect, jest, test} from '@jest/globals';
import { CreateUser } from '../app/usecase/user/CreateUser'

describe('Validate the of mail', () => {

    test('Valid mail user', () => {    

        const parms = {
            body:{
                id: 1,
                name: 'luiz fernando',
                age: 30,
                sexo: 'M',
                cpf: '00496334220',
                rg: '123654789'
            }
        }

        const create = new CreateUser();
        const result = create.execute(parms);
        expect(result.statusCode).toBe(404);
    });

    test('Create user', () => {    


        const parms = {
            body:{
                id: 1,
                name: 'luiz fernando',
                mail:'luizfernandoluck@hotmail.com',
                age: 30,
                sexo: 'M',
                cpf: '00496334220',
                rg: '123654789'
            }
        }

        const create = new CreateUser();
        const result = create.execute(parms);
        // console.log('result++', result)
        expect(result.statusCode).toBe(201);
    });
  });