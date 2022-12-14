import { ErrorMessage } from '../protocols/https/boundaries';

export default class UserErrors {
	static fieldsNotValid: ErrorMessage = { message: 'required fields', code: 'ERROR-USER-1000' };
	static emailIsNotValid: ErrorMessage = { message: 'email is not valid', code: 'ERROR-USER-1001' };
	static emailRegistered: ErrorMessage = { message: 'duplicate email', code: 'ERROR-USER-1002' };
}
