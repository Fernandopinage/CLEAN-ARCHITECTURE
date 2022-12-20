import { ErrorMessage } from '../dtos/http/ErrorMessage';

export default class CompanyErrors {
	static emailRegistered: ErrorMessage = { message: 'duplicate email', code: 'ERROR-CMP-1000' };
	static phoneRegisterd: ErrorMessage = { message: 'invalid Phone', code: 'ERROR-CMP-1001' };
	static emailNonCorporate: ErrorMessage = { message: 'email is not corporate', code: 'ERROR-CMP-1002' };
	static fieldsNotValid: ErrorMessage = { message: 'required fields', code: 'ERROR-CMP-1003' };
	static cnpjInvalid: ErrorMessage = { message: 'invalid CNPJ', code: 'ERROR-CMP-1004' };
}
