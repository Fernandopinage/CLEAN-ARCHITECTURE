import { IEmailValid } from '../interfaces/IEmailValid';


export class EmailValid implements IEmailValid{
  
    isMailValid(parm:string): boolean {
        if (!parm)
        {
            return false;
        }
        return true;
    }

}