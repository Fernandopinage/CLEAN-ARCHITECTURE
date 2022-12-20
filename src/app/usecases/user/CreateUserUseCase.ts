import { CreateUserRequest, CreateUserResponse, HttpRequest, HttpResponse } from '@/app/dtos';
import { IEncryptGateway } from '@/app/protocols/gateways/IEncryptGateway';
import { IUserGateway } from '@/app/protocols/gateways/IUserGateway';
import { ICreateUserValidator } from '@/app/protocols/validators/ICreateUserValidator';
import StatusCode from '@/app/status/StatusCode';
import { ICreateUserUseCase } from '@/infra/protocols/ICreateUserUseCase';

export default class CreateUserUseCase implements ICreateUserUseCase {
	constructor(
		private userGateway: IUserGateway,
		private validator: ICreateUserValidator,
		private encryptGateway: IEncryptGateway
	) {}

	async execute(input: HttpRequest<CreateUserRequest>): Promise<HttpResponse<CreateUserResponse>> {
		const responseValidate = await this.validator.validate(input.body);
		if (responseValidate.statusCode !== 0) {
			return responseValidate;
		}

		const result = await this.userGateway.create({
			name: input.body.name,
			id_company: input.body.idCompany,
			office: input.body.office,
			email: input.body.email,
			password: await this.encryptGateway.crypt(input.body.password),
			receive_email: input.body.acceptedReceiveEmail
		});

		return {
			statusCode: StatusCode.created,
			body: {
				name: result.name,
				idCompany: result.id_company,
				office: result.office,
				email: result.email
			}
		};
	}
}
