import { ICompanySizeParams } from '../protocol/company-size-params';

export default class CompanySizeDomain {
	constructor(public params: ICompanySizeParams) {}

	static create(params: ICompanySizeParams): CompanySizeDomain {
		return new CompanySizeDomain(params);
	}
}
