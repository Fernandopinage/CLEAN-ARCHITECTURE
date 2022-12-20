import { ErrorMessage } from '../dtos/http/ErrorMessage';

export default class CommonErrors {
	static serverError: ErrorMessage = { message: 'Internal Server Error', code: 'ERROR-COMMON-1000' };
}
