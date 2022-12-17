import { ICompanyGateway } from '@/app/protocols/gateways/ICompanyGateway';
import { Company } from '@/infra/database/sequelize/models/Company';
import { User } from '../database/sequelize/models/User';

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

	async list(): Promise<ICompanyGateway.ListCompaniesData[]> {
		const result = await User.findAll();
		return result as unknown as ICompanyGateway.ListCompaniesData[];
	}

	async hasCompany(input: number): Promise<boolean> {
		const { count } = await Company.findAndCountAll({
			where: {
				id: input
			}
		});
		console.log(count);
		return count !== 0;
	}
}
