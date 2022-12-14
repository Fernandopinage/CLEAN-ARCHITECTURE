import { CreateUserRequest, CreateUserResponse } from '../../dtos';
import { Response } from '../https/boundaries';

export interface ICreateUserValidator {
	validate(input: CreateUserRequest): Promise<Response<CreateUserResponse>>;
}
