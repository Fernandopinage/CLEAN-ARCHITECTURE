import { ICompanyParams } from '../protocol/company-params';

export default class CompanyDomain {
	constructor(public params: ICompanyParams) {}

	static create(params: ICompanyParams): CompanyDomain {
		return new CompanyDomain(params);
	}
}
