import {expect, jest, test} from '@jest/globals';
import { CreateUser } from '../app/usecase/user/CreateUser'

describe('Validate the of mail', () => {

    test('Create user', () => {    


        const parms = {
            id: 1,
            name: 'luiz fernando',
            mail:'luizfernandoluck@hotmail.com',
            age: 30,
            sexo: 'M',
            cpf: '00496334220',
            rg: '123654789'
        }

        const create = new CreateUser();
        console.log(create.execute(parms));
        expect(true).toBe(true);
    });
  });