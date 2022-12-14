import { CreateCompanyRequest, CreateCompanyResponse } from '@/app/dtos';
import { Request, Response } from '@/app/protocols/https/boundaries';
import { ICreateCompanyUseCase } from '../protocols/ICreateCompanyUseCase';

export default class CompanyController {
	constructor(private createCompanyUseCase: ICreateCompanyUseCase) {}
	create(req: Request<CreateCompanyRequest>): Promise<Response<CreateCompanyResponse>> {
		return this.createCompanyUseCase.execute(req);
	}
}
