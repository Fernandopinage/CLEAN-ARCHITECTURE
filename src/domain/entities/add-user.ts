import { IUserParams } from '../protocol/user-params';

export class UserDomain {
	constructor(public params: IUserParams) {}

	static create(params: IUserParams): UserDomain {
		return new UserDomain(params);
	}
}
