import { Request, Response } from '../../protocols/http/boundaries';
import { User } from '../../../domain/entities/User';
import { EmailValid } from '../MailValid';


export class CreateUser{

    execute(input:Request):Response{
       
        if(!new EmailValid().isMailValid(input.body.mail)){
            return {
                statusCode: 404,
                mensage: 'O email não é valido ',
                body:[]
            };  
        }
        const userCreate = User.create({
            id: input.body.id,
            name: input.body.name,
            mail: input.body.mail,
            age: input.body.age,
            sexo: input.body.sexo,
            cpf: input.body.cpf,
            rg: input.body.rg,
        }); 
        
        return {
            statusCode: 201,
            mensage: 'User ',
            body:[{
                name:userCreate.name,
                mail: userCreate.mail,
                age:userCreate.age,
                sexo:userCreate.sexo,
                cpf:userCreate.cpf,
                rg:userCreate.rg
            }
            ]
        };
    }
}