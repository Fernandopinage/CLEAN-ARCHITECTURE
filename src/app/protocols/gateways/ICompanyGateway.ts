export interface ICompanyGateway {
	create(input: ICompanyGateway.CreateCompanyData): Promise<ICompanyGateway.CreateResultData>;
	listByEmail(input: string): Promise<ICompanyGateway.CreateResultData[]>;
	list(): Promise<ICompanyGateway.ListCompaniesData[]>;
	hasCompany(input: number): Promise<boolean>;
}

export namespace ICompanyGateway {
	export type CreateResultData = {
		id_company_size: number;
		cnpj: string;
		name: string;
		segment: string;
		telephone: string;
		address: string;
		password: string;
		email: string;
		access_forum: boolean;
		access_called: boolean;
		access_university_gertec: boolean;
		access_support: boolean;
		access_mdm: boolean;
		access_product: boolean;
		receive_email: boolean;
		signature_nda: boolean;
	};

	export type CreateCompanyData = {
		id_company_size: number;
		cnpj: string;
		name: string;
		segment: string;
		telephone: string;
		address: string;
		password: string;
		email: string;
		access_forum: boolean;
		access_called: boolean;
		access_university_gertec: boolean;
		access_support: boolean;
		access_mdm: boolean;
		access_product: boolean;
		receive_email: boolean;
		signature_nda: boolean;
	};
	export type ListCompaniesData = {
		id: number;
		name: string;
	};
}
