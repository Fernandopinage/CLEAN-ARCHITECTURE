import { sequelize } from '@/infra/database/sequelize/config/database';
import { DataTypes, Model } from 'sequelize';
import { Company } from './Company';

export class User extends Model {}

User.init(
	{
		id: {
			type: DataTypes.BIGINT,
			autoIncrement: true,
			primaryKey: true
		},
		name: {
			type: DataTypes.STRING,
			allowNull: false
		},
		id_company: {
			type: DataTypes.BIGINT,
			allowNull: false
		},
		office: {
			type: DataTypes.STRING,
			allowNull: false
		},
		email: {
			type: DataTypes.STRING,
			allowNull: false
		},
		password: {
			type: DataTypes.STRING,
			allowNull: false
		},
		receive_email: {
			type: DataTypes.BOOLEAN,
			defaultValue: false
		}
	},
	{
		sequelize,
		modelName: 'user',
		tableName: 'users'
	}
);
User.belongsTo(Company, {
	as: 'company',
	foreignKey: 'id_company'
});

Company.hasMany(User, {
	as: 'users',
	foreignKey: 'id'
});
