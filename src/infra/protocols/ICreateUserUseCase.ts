import { CreateUserRequest, CreateUserResponse, HttpRequest, HttpResponse } from '@/app/dtos';

export interface ICreateUserUseCase {
	execute(input: HttpRequest<CreateUserRequest>): Promise<HttpResponse<CreateUserResponse>>;
}
