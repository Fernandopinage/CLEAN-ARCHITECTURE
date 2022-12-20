export type CreateCompanyResponse = {
	idCompanySize: number;
	cnpj: string;
	name: string;
	segment: string;
	telephone: string;
	address: string;
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
