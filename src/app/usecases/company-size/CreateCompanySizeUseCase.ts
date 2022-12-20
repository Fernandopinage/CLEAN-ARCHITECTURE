import { CreateCompanySizeRequest, CreateCompanySizeResponse, HttpRequest, HttpResponse } from '@/app/dtos';
import { ICompanySizeGateway } from '@/app/protocols/gateways/ICompanySizeGateway';
import StatusCode from '@/app/status/StatusCode';
import { ICreateCompanySizeUseCase } from '@/infra/protocols/ICreateCompanySizeUseCase';

export default class CreateCompanySizeUseCase implements ICreateCompanySizeUseCase {
	constructor(private companySize: ICompanySizeGateway) {}

	async execute(input: HttpRequest<CreateCompanySizeRequest>): Promise<HttpResponse<CreateCompanySizeResponse>> {
		const result = await this.companySize.create({
			name: input.body.name
		});
		return {
			statusCode: StatusCode.created,
			body: {
				id: result.id,
				name: result.name
			}
		};
	}
}
