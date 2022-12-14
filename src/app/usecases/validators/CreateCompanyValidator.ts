import { CreateCompanyRequest, CreateCompanyResponse } from '@/app/dtos';
import CompanyErrors from '@/app/errors/CompanyErrors';
import { ICompanyGateway } from '@/app/protocols/gateways/ICompanyGateway';
import { Response } from '@/app/protocols/https/boundaries';
import { ICreateCompanyValidator } from '@/app/protocols/validators/ICreateCompanyValidator';
import PhoneUtils from '../../utils/PhoneUtils';

export default class CreateCompanyValidator implements ICreateCompanyValidator {
	constructor(private companyGateway: ICompanyGateway) {}

	async validate(input: CreateCompanyRequest): Promise<Response<CreateCompanyResponse>> {
		if ((await this.companyGateway.listByEmail(input.email)).length > 0) {
			return {
				statusCode: 400,
				errors: [CompanyErrors.emailRegistered]
			};
		}
		if (!PhoneUtils.isValid(input.telephone)) {
			return {
				statusCode: 400,
				errors: [CompanyErrors.PhoneUtilsRegisterd]
			};
		}

		return { statusCode: 0 };
	}
}
