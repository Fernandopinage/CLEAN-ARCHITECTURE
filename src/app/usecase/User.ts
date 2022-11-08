import {CreateParms} from '../repositores/IParmsCreate'
import ValidateMail from '../../domain/entities/usecase/validateMail'

export class User{

    create(parm:CreateParms){

        if(new ValidateMail().isMailValid({mail: parm.mail})){
            console.log('enviando dados para INFRA')
        }   
    }
}