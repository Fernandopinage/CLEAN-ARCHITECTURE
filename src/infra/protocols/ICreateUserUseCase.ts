import { UserCreateRequest, UserCreateResponse } from '@/app/dtos';
import { Request, Response } from '@/app/protocols/https/boundaries';

export interface ICreateUserUseCase {
	execute(input: Request<UserCreateRequest>): Promise<Response<UserCreateResponse>>;
}
