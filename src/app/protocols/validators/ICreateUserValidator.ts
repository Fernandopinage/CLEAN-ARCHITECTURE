import { CreateUserRequest } from '@/app/dtos';
import { ResultValidator } from '@/app/validators/dto/ResultValidator';

export interface ICreateUserValidator {
	validate(input: CreateUserRequest): Promise<ResultValidator>;
}
