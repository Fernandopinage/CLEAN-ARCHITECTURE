import { CreateUserRequest } from '@/app/dtos/user/create-user/CreateUserRequest';
import { CreateUserResponse } from '@/app/dtos/user/create-user/CreateUserResponse';
import UserErrors from '@/app/errors/UserErrors';
import { IUserGateway } from '@/app/protocols/gateways/IUserGateway';
import { Response } from '@/app/protocols/https/boundaries';
import { ICreateUserValidator } from '@/app/protocols/validators/ICreateUserValidator';
import EmailUtils from '../../utils/EmailUtils';
import RequiredFields from '../user/RequiredFieldsUserUseCase';

export default class CreateUserValidator implements ICreateUserValidator {
	constructor(private userGateway: IUserGateway) {}

	async validate(input: CreateUserRequest): Promise<Response<CreateUserResponse>> {
		if (!RequiredFields.fieldsValid(input)) {
			return {
				statusCode: 400,
				errors: [UserErrors.fieldsNotValid]
			};
		}
		if ((await this.userGateway.listByEmail(input.email)).length > 0) {
			return {
				statusCode: 400,
				errors: [UserErrors.emailRegistered]
			};
		}

		if (!EmailUtils.isValid(input.email)) {
			return {
				statusCode: 400,
				errors: [UserErrors.emailIsNotValid]
			};
		}
		return { statusCode: 0 };
	}
}
