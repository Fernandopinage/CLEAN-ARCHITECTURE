import { Request } from '../protocols/http/boundaries'
export class MailValid  {

   
    static isMailValid(parm:Request): boolean {
        if (!parm || !parm.body.mail)
        {
            return false;
        }
        return true;
    }

}