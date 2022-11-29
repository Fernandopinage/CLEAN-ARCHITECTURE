import { UserCreateRequest, UserCreateResponse } from '@/app/dtos';
import { Request, Response } from '@/app/protocols/https/boundaries';
import { IUserGateway } from '@/app/protocols/IUserGateway';
import { ICreateUserUseCase } from '@/infra/protocols/ICreateUserUseCase';
export class CreateUserUseCase implements ICreateUserUseCase {
	constructor(private userGateway: IUserGateway) {}

	async execute(input: Request<UserCreateRequest>): Promise<Response<UserCreateResponse>> {
		const result = await this.userGateway.create({
			name: input.body.name,
			organization: input.body.organization,
			office: input.body.office,
			email: input.body.email,
			password: input.body.password
		});

		return {
			statusCode: 201,
			body: result
		};
	}
}
