import { CreateCompanySizeRequest, CreateCompanySizeResponse, HttpRequest, HttpResponse } from '@/app/dtos';
import CommonErrors from '@/app/errors/CommonErrors';
import StatusCode from '@/app/status/StatusCode';
import { ICreateCompanySizeUseCase } from '../protocols/ICreateCompanySizeUseCase';

export default class CompanySizeController {
	constructor(private CreateCompanySizeUseCase: ICreateCompanySizeUseCase) {}
	async create(req: HttpRequest<CreateCompanySizeRequest>): Promise<HttpResponse<CreateCompanySizeResponse>> {
		try {
			return this.CreateCompanySizeUseCase.execute(req);
		} catch (error) {
			console.log(error);
			return {
				statusCode: StatusCode.serveError,
				errors: [CommonErrors.serverError]
			};
		}
	}
}
