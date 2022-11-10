import { UserInputBoundary } from '../../boundaries/UserInputBoundary'
import { UserOutputBoundary } from '../../boundaries/UserOutputBoundary'
import { User } from '../../../domain/entities/User';

export class CreateUser{

    execute(input:UserInputBoundary):UserOutputBoundary{

        this.isValidItens(input);
        
        const userCreate = User.create({
            id: input.id,
            name: input.name,
            mail: input.mail,
            age: input.age,
            sexo: input.sexo,
            cpf: input.cpf,
            rg: input.rg,
        }); 
        
        return {
            statusCode: 200,
            mensage: 'User ',
            result:[{
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

    isValidItens(input: UserInputBoundary){
        for (const item in input){
            console.log(item);
        }
    }

}