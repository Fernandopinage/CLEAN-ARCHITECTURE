export interface IUserGateway {
	create(input: IUserGateway.CreateUserData): Promise<IUserGateway.CreateResultData>;
	listByEmail(input: string): Promise<IUserGateway.CreateResultData[]>;
}

export namespace IUserGateway {
	export type CreateResultData = {
		name: string;
		id_company: number;
		office: string;
		email: string;
	};
	export type CreateUserData = {
		name: string;
		id_company: number;
		office: string;
		email: string;
		password: string;
		receive_email: boolean;
	};
}
