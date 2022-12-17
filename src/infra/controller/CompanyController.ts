import { CreateCompanyRequest, CreateCompanyResponse, ListCompaniesResponse } from '@/app/dtos';
import { Request, Response } from '@/app/protocols/https/boundaries';
import { ICreateCompanyUseCase } from '../protocols/ICreateCompanyUseCase';
import { IListCompaniesUseCase } from '../protocols/IListCompanyUseCase';

export default class CompanyController {
	create(
		createCompanyUseCase: ICreateCompanyUseCase,
		req: Request<CreateCompanyRequest>
	): Promise<Response<CreateCompanyResponse>> {
		return createCompanyUseCase.execute(req);
	}

	index(listCompaniesUseCase: IListCompaniesUseCase): Promise<Response<ListCompaniesResponse[]>> {
		return listCompaniesUseCase.execute();
	}
}
