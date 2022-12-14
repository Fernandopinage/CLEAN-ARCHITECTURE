import { CreateUserRequest, CreateUserResponse } from '@/app/dtos';
import { Request, Response } from '@/app/protocols/https/boundaries';
import { ICreateUserUseCase } from '../protocols/ICreateUserUseCase';
export default class UserController {
	constructor(private createUserUseCase: ICreateUserUseCase) {}
	create(req: Request<CreateUserRequest>): Promise<Response<CreateUserResponse>> {
		return this.createUserUseCase.execute(req);
	}
}
