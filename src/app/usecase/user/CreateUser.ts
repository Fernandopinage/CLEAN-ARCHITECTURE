import { UserInputBoundary } from '../../boundaries/UserInputBoundary'
import { UserOutputBoundary } from '../../boundaries/UserOutputBoundary'
import { User } from '../../../domain/entities/User';

export class CreateUser{

    execute(input:UserInputBoundary):UserOutputBoundary{

        const userCreate = User.create({
            id: input.id,
            name: input.name,
            age: input.age,
            sexo:input.sexo,
            cpf: input.cpf,
            rg: input.rg
        }); 
        
        return {
            name:userCreate.name,
            age:userCreate.age,
            sexo:userCreate.sexo,
            cpf:userCreate.cpf,
            rg:userCreate.rg
        };
    }

}