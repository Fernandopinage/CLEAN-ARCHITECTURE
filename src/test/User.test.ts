import {expect, jest, test} from '@jest/globals';
import ValidateMail from '../domain/entities/usecase/validateMail';

describe('Validate the of mail', () => {

    test('Mail is string ?', () => {    

        const parm = {email: 'LuizfernandoLuck@hotmail.com'}

        const sut = new ValidateMail();
        const email = sut.isMailValid(parm);
    
        expect(email).toBe(true);
    });
  });