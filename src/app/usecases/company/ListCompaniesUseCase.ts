import { ListCompaniesResponse } from '@/app/dtos';
import { ICompanyGateway } from '@/app/protocols/gateways/ICompanyGateway';
import { Response } from '@/app/protocols/https/boundaries';
import { IListCompaniesUseCase } from '@/infra/protocols/IListCompanyUseCase';

export default class ListCompaniesUseCase implements IListCompaniesUseCase {
	constructor(private companyGateway: ICompanyGateway) {}
	async execute(): Promise<Response<ListCompaniesResponse[]>> {
		const result = await this.companyGateway.list();
		const reponse = result.map((e) => ({ id: e.id, name: e.name }));

		return {
			statusCode: 200,
			body: reponse
		};
	}
}
