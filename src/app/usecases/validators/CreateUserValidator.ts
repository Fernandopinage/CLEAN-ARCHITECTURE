import { CreateUserRequest } from '@/app/dtos/user/create-user/CreateUserRequest';
import UserErrors from '@/app/errors/UserErrors';
import { ICompanyGateway } from '@/app/protocols/gateways/ICompanyGateway';
import { IUserGateway } from '@/app/protocols/gateways/IUserGateway';
import { ICreateUserValidator } from '@/app/protocols/validators/ICreateUserValidator';
import StatusCode from '@/app/status/StatusCode';
import { EmailUtils } from '@/app/utils';
import { ResultValidator } from '@/app/validators/dto/ResultValidator';

export default class CreateUserValidator implements ICreateUserValidator {
	constructor(private userGateway: IUserGateway, private companyGateway: ICompanyGateway) {}

	private isFieldsInvalid(input: CreateUserRequest): boolean {
		return !input.name || !input.idCompany || !input.office || !input.email || !input.password;
	}

	async validate(input: CreateUserRequest): Promise<ResultValidator> {
		if (this.isFieldsInvalid(input)) {
			return {
				statusCode: StatusCode.badRequest,
				errors: [UserErrors.fieldsNotValid]
			};
		}
		if ((await this.userGateway.listByEmail(input.email)).length > 0) {
			return {
				statusCode: StatusCode.badRequest,
				errors: [UserErrors.emailRegistered]
			};
		}

		if (!EmailUtils.isValid(input.email)) {
			return {
				statusCode: StatusCode.badRequest,
				errors: [UserErrors.emailIsNotValid]
			};
		}

		if (EmailUtils.isNonCorporateEmail(input.email)) {
			return {
				statusCode: StatusCode.badRequest,
				errors: [UserErrors.emailNonCorporate]
			};
		}

		if (!(await this.companyGateway.hasCompany(input.idCompany))) {
			return {
				statusCode: StatusCode.badRequest,
				errors: [UserErrors.companyRegistered]
			};
		}
		return { statusCode: 0 };
	}
}
