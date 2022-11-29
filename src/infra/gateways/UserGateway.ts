import { IUserGateway } from '@/app/protocols/IUserGateway';
import { User } from '../database/sequelize/models/User';

export class UserGateway implements IUserGateway {
	async create(input: IUserGateway.CreateUserData): Promise<IUserGateway.body> {
		const result = await User.create(input);
		return result.get({ plain: true });
	}
}
