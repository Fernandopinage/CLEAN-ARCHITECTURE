import { ICompanySizeGateway } from '@/app/protocols/gateways/ICompanySizeGateway';
import { CompanySize } from '../database/sequelize/models/CompanySize';

export default class CompanySizeGateway implements ICompanySizeGateway {
	async create(input: ICompanySizeGateway.CreateCompanySizeData): Promise<ICompanySizeGateway.CreateResultData> {
		const result = await CompanySize.create(input);
		return result.get({ plain: true });
	}
}
