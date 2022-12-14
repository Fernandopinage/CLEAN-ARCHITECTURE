import { CreateCompanyRequest, CreateCompanyResponse } from '@/app/dtos';
import { Request, Response } from '@/app/protocols/https/boundaries';

export interface ICreateCompanyUseCase {
	execute(input: Request<CreateCompanyRequest>): Promise<Response<CreateCompanyResponse>>;
}
