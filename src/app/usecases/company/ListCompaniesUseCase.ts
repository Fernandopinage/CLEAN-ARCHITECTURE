import { HttpResponse, ListCompaniesResponse } from '@/app/dtos';
import { ICompanyGateway } from '@/app/protocols/gateways/ICompanyGateway';
import StatusCode from '@/app/status/StatusCode';
import { IListCompaniesUseCase } from '@/infra/protocols/IListCompanyUseCase';

export default class ListCompaniesUseCase implements IListCompaniesUseCase {
	constructor(private companyGateway: ICompanyGateway) {}
	async execute(): Promise<HttpResponse<ListCompaniesResponse[]>> {
		const result = await this.companyGateway.list();
		const reponse = result.map((e) => ({ id: e.id, name: e.name }));

		return {
			statusCode: StatusCode.created,
			body: reponse
		};
	}
}
