import { CreateCompanySizeRequest, CreateCompanySizeResponse, HttpRequest, HttpResponse } from '@/app/dtos';

export interface ICreateCompanySizeUseCase {
	execute(input: HttpRequest<CreateCompanySizeRequest>): Promise<HttpResponse<CreateCompanySizeResponse>>;
}
