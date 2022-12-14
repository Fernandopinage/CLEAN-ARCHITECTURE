export type CreateCompanyRequest = {
	idCompanySize: number;
	name: string;
	segment: string;
	telephone: string;
	address: string;
	password: string;
	email: string;
	accessForum: boolean;
	accessCalled: boolean;
	accessUniversityGertec: boolean;
	accessSupport: boolean;
	accessMdm: boolean;
	accessProduct: boolean;
	acceptedReceiveEmail: boolean;
	signatureNda: boolean;
};
