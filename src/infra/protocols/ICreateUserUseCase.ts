import { CreateUserRequest, CreateUserResponse } from '@/app/dtos';
import { Request, Response } from '@/app/protocols/https/boundaries';

export interface ICreateUserUseCase {
	execute(input: Request<CreateUserRequest>): Promise<Response<CreateUserResponse>>;
}
