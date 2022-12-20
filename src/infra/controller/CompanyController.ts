import {
	CreateCompanyRequest,
	CreateCompanyResponse,
	HttpRequest,
	HttpResponse,
	ListCompaniesResponse
} from '@/app/dtos';
import CommonErrors from '@/app/errors/CommonErrors';
import StatusCode from '@/app/status/StatusCode';
import { ICreateCompanyUseCase } from '../protocols/ICreateCompanyUseCase';
import { IListCompaniesUseCase } from '../protocols/IListCompanyUseCase';

export default class CompanyController {
	async create(
		createCompanyUseCase: ICreateCompanyUseCase,
		req: HttpRequest<CreateCompanyRequest>
	): Promise<HttpResponse<CreateCompanyResponse>> {
		try {
			return createCompanyUseCase.execute(req);
		} catch (error) {
			console.log(error);
			return {
				statusCode: StatusCode.serveError,
				errors: [CommonErrors.serverError]
			};
		}
	}

	async index(listCompaniesUseCase: IListCompaniesUseCase): Promise<HttpResponse<ListCompaniesResponse[]>> {
		try {
			return listCompaniesUseCase.execute();
		} catch (error) {
			console.log(error);
			return {
				statusCode: StatusCode.serveError,
				errors: [CommonErrors.serverError]
			};
		}
	}
}
