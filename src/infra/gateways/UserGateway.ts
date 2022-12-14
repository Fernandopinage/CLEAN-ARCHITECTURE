import { IUserGateway } from '@/app/protocols/gateways/IUserGateway';
import { User } from '@/infra/database/sequelize/models/User';

export default class UserGateway implements IUserGateway {
	async create(input: IUserGateway.CreateUserData): Promise<IUserGateway.CreateResultData> {
		const result = await User.create(input);
		return result.get({ plain: true });
	}

	async listByEmail(email: string): Promise<IUserGateway.CreateResultData[]> {
		const { rows } = await User.findAndCountAll({
			where: {
				email: email
			}
		});
		return rows as unknown as IUserGateway.CreateResultData[];
	}
}
