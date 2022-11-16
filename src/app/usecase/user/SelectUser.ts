import { IUser } from "../../interfaces/IUser";
import { Request, Response } from '../../protocols/http/boundaries';

class SelectUser implements IUser{

    async execute(): Promise<Response> {

        return {
            statusCode: 200,
            mensage: 'sucesso',
            body: [{
                id:1,
                name:'luiz',
                email: 'luizfernandoluck@hotmail.com',
                age: 32,
                sexo:'M',
                cpf:'00496334220',
                rg:'123654789'
         }]
        }
    }
}