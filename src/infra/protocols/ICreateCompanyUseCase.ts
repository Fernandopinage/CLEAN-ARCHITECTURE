import { CreateCompanyRequest, CreateCompanyResponse, HttpRequest, HttpResponse } from '@/app/dtos';

export interface ICreateCompanyUseCase {
	execute(input: HttpRequest<CreateCompanyRequest>): Promise<HttpResponse<CreateCompanyResponse>>;
}
