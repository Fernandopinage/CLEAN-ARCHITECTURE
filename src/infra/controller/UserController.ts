import { UserCreateRequest, UserCreateResponse } from '@/app/dtos';
import { Request, Response } from '@/app/protocols/https/boundaries';
import { ICreateUserUseCase } from '../protocols/ICreateUserUseCase';
export class UserController {
	constructor(private createUserUseCase: ICreateUserUseCase) {}

	index() {
		return true;
	}
	show() {
		return true;
	}
	create(req: Request<UserCreateRequest>): Promise<Response<UserCreateResponse>> {
		return this.createUserUseCase.execute(req);
	}
}
