import { ErrorMessage } from '../protocols/https/boundaries';

export default class CompanyErrors {
	static emailRegistered: ErrorMessage = { message: 'duplicate email', code: 'ERROR-USER-1002' };
	static PhoneUtilsRegisterd: ErrorMessage = { message: 'invalid PhoneUtils', code: 'ERROR-USER-1002' };
}
