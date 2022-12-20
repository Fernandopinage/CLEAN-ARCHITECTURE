import { CreateCompanyRequest } from '@/app/dtos';
import { ResultValidator } from '@/app/validators/dto/ResultValidator';

export interface ICreateCompanyValidator {
	validate(input: CreateCompanyRequest): Promise<ResultValidator>;
}
