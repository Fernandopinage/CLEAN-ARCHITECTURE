export type CreateUserRequest = {
	name: string;
	idCompany: number;
	office: string;
	email: string;
	password: string;
	acceptedReceiveEmail: boolean;
};
