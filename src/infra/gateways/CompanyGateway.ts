import { ICompanyGateway } from '@/app/protocols/gateways/ICompanyGateway';
import { Company } from '@/infra/database/sequelize/models/Company';

export default class CompanyGateway implements ICompanyGateway {
	async create(input: ICompanyGateway.CreateCompanyData): Promise<ICompanyGateway.CreateResultData> {
		const result = await Company.create(input);
		return result.get({ plain: true });
	}
	async listByEmail(email: string): Promise<ICompanyGateway.CreateResultData[]> {
		const { rows } = await Company.findAndCountAll({
			where: {
				email: email
			}
		});
		return rows as unknown as ICompanyGateway.CreateResultData[];
	}
}
