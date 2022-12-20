import { CreateUserRequest, CreateUserResponse, HttpRequest, HttpResponse } from '@/app/dtos';
import CommonErrors from '@/app/errors/CommonErrors';
import StatusCode from '@/app/status/StatusCode';
import { ICreateUserUseCase } from '../protocols/ICreateUserUseCase';

export default class UserController {
	constructor(private createUserUseCase: ICreateUserUseCase) {}
	async create(req: HttpRequest<CreateUserRequest>): Promise<HttpResponse<CreateUserResponse>> {
		try {
			return this.createUserUseCase.execute(req);
		} catch (error) {
			console.log(error);
			return {
				statusCode: StatusCode.serveError,
				errors: [CommonErrors.serverError]
			};
		}
	}
}
