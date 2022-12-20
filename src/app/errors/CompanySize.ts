import { ErrorMessage } from '../dtos/http/ErrorMessage';

export default class CompanySize {
	static serverError: ErrorMessage = { message: 'Internal Server Error', code: 'ERROR-CMPS-1000' };
}
