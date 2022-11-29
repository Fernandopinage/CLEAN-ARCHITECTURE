export interface IUserGateway {
	create(input: IUserGateway.CreateUserData): Promise<IUserGateway.body>;
}

export namespace IUserGateway {
	export type body = {
		name: string;
		organization: string;
		office: string;
		email: string;
	};
	export type CreateUserData = {
		name: string;
		organization: string;
		office: string;
		email: string;
		password: string;
	};
}
