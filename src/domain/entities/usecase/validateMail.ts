import { MailParms } from '../protocols/IParmsMail'
export default class ValidateMail {

    isMailValid(parm:MailParms){
        if (!parm.email) return false;
        if (typeof parm.email === 'string') return true;
        return false
    }
}