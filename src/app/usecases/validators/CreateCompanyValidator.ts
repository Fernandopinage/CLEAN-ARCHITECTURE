import { CreateCompanyRequest } from '@/app/dtos';
import CompanyErrors from '@/app/errors/CompanyErrors';
import { ICompanyGateway } from '@/app/protocols/gateways/ICompanyGateway';
import { ICreateCompanyValidator } from '@/app/protocols/validators/ICreateCompanyValidator';
import StatusCode from '@/app/status/StatusCode';
import { EmailUtils, PhoneUtils } from '@/app/utils';
import CnpjUtils from '@/app/utils/CnpjUtils';
import { ResultValidator } from '@/app/validators/dto/ResultValidator';

export default class CreateCompanyValidator implements ICreateCompanyValidator {
	constructor(private companyGateway: ICompanyGateway) {}

	private isFieldsInvalid(input: CreateCompanyRequest): boolean {
		return (
			!input.idCompanySize ||
			!input.name ||
			!input.segment ||
			!input.telephone ||
			!input.address ||
			!input.password ||
			!input.email
		);
	}

	async validate(input: CreateCompanyRequest): Promise<ResultValidator> {
		if (this.isFieldsInvalid(input)) {
			return {
				statusCode: StatusCode.badRequest,
				errors: [CompanyErrors.fieldsNotValid]
			};
		}

		if (!CnpjUtils.isValid(input.cnpj)) {
			return {
				statusCode: StatusCode.badRequest,
				errors: [CompanyErrors.cnpjInvalid]
			};
		}

		if ((await this.companyGateway.listByEmail(input.email)).length > 0) {
			return {
				statusCode: StatusCode.badRequest,
				errors: [CompanyErrors.emailRegistered]
			};
		}

		if (!PhoneUtils.isValid(input.telephone)) {
			return {
				statusCode: StatusCode.badRequest,
				errors: [CompanyErrors.phoneRegisterd]
			};
		}

		if (EmailUtils.isNonCorporateEmail(input.email)) {
			return {
				statusCode: StatusCode.badRequest,
				errors: [CompanyErrors.emailNonCorporate]
			};
		}

		return { statusCode: 0 };
	}
}
