import { CreateCompanySizeRequest, CreateCompanySizeResponse } from '@/app/dtos';
import { ICompanySizeGateway } from '@/app/protocols/gateways/ICompanySizeGateway';
import { Request, Response } from '@/app/protocols/https/boundaries';
import { ICreateCompanySizeUseCase } from '@/infra/protocols/ICreateCompanySizeUseCase';

export default class CreateCompanySizeUseCase implements ICreateCompanySizeUseCase {
	constructor(private companySize: ICompanySizeGateway) {}

	async execute(input: Request<CreateCompanySizeRequest>): Promise<Response<CreateCompanySizeResponse>> {
		const result = await this.companySize.create({
			name: input.body.name
		});
		return {
			statusCode: 201,
			body: {
				id: result.id,
				name: result.name
			}
		};
	}
}
