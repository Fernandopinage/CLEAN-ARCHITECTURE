import { CreateCompanyRequest, CreateCompanyResponse } from '../../dtos';
import { Response } from '../https/boundaries';

export interface ICreateCompanyValidator {
	validate(input: CreateCompanyRequest): Promise<Response<CreateCompanyResponse>>;
}
