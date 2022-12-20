import { ErrorMessage } from '../dtos/http/ErrorMessage';

export default class UserErrors {
	static fieldsNotValid: ErrorMessage = { message: 'required fields', code: 'ERROR-USER-1000' };
	static emailIsNotValid: ErrorMessage = { message: 'email is not valid', code: 'ERROR-USER-1001' };
	static emailRegistered: ErrorMessage = { message: 'duplicate email', code: 'ERROR-USER-1002' };
	static companyRegistered: ErrorMessage = { message: 'unregistered company', code: 'ERROR-USER-1003' };
	static emailNonCorporate: ErrorMessage = { message: 'email is not corporate', code: 'ERROR-USER-1004' };
}
