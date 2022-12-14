import { CreateCompanyRequest, CreateCompanyResponse } from '@/app/dtos';
import { ICompanyGateway } from '@/app/protocols/gateways/ICompanyGateway';
import { IEncryptGateway } from '@/app/protocols/gateways/IEncryptGateway';
import { Request, Response } from '@/app/protocols/https/boundaries';
import { ICreateCompanyValidator } from '@/app/protocols/validators/ICreateCompanyValidator';
import { ICreateCompanyUseCase } from '@/infra/protocols/ICreateCompanyUseCase';
import PhoneUtils from '../../utils/PhoneUtils';

export default class CreateCompanyUseCase implements ICreateCompanyUseCase {
	constructor(
		private companyGateway: ICompanyGateway,
		private encryptGateway: IEncryptGateway,
		private validator: ICreateCompanyValidator
	) {}

	async execute(input: Request<CreateCompanyRequest>): Promise<Response<CreateCompanyResponse>> {
		const responseValidate = await this.validator.validate(input.body);
		if (responseValidate.statusCode !== 0) {
			return responseValidate;
		}
		const result = await this.companyGateway.create({
			id_company_size: input.body.idCompanySize,
			name: input.body.name,
			segment: input.body.segment,
			telephone: PhoneUtils.removeCharacters(input.body.telephone),
			address: input.body.address,
			password: await this.encryptGateway.crypt(input.body.password),
			email: input.body.email,
			access_forum: input.body.accessForum,
			access_called: input.body.accessCalled,
			access_university_gertec: input.body.accessUniversityGertec,
			access_support: input.body.accessSupport,
			access_mdm: input.body.accessMdm,
			access_product: input.body.accessProduct,
			receive_email: input.body.acceptedReceiveEmail,
			signature_nda: input.body.signatureNda
		});

		return {
			statusCode: 201,
			body: {
				idCompanySize: result.id_company_size,
				name: result.name,
				segment: result.segment,
				telephone: result.telephone,
				address: result.address,
				email: result.email,
				accessForum: result.access_forum,
				accessCalled: result.access_called,
				accessUniversityGertec: result.access_university_gertec,
				accessSupport: result.access_support,
				accessMdm: result.access_mdm,
				accessProduct: result.access_product,
				acceptedReceiveEmail: result.receive_email,
				signatureNda: result.signature_nda
			}
		};
	}
}
