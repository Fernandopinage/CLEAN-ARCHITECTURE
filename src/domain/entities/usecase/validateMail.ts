import { MailParms } from '../repositores/IParmsMail'
export default class ValidateMail {

    isMailValid(parm:MailParms){
        if (!parm.mail) return false;
        if (typeof parm.mail === 'string') return true;
        return false
    }
}