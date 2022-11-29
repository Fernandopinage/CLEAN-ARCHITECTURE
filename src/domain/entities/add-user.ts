import { IUserParms } from '../protocol/user-parms';

export class UserDomain {
	constructor(public params: IUserParms) {}

	static create(params: IUserParms): UserDomain {
		return new UserDomain(params);
	}
}
