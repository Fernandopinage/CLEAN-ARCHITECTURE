import { sequelize } from '@/infra/database/sequelize/config/database';
import { DataTypes, Model } from 'sequelize';
import { Company } from './Company';
export class CompanySize extends Model {}

CompanySize.init(
	{
		id: {
			type: DataTypes.BIGINT,
			autoIncrement: true,
			primaryKey: true
		},
		name: {
			type: DataTypes.STRING,
			allowNull: false
		}
	},
	{
		sequelize,
		modelName: 'company_size',
		tableName: 'company_size'
	}
);

Company.belongsTo(CompanySize, {
	as: 'company-size',
	foreignKey: 'id_company_size'
});

Company.hasMany(CompanySize, {
	as: 'companies',
	foreignKey: 'id'
});
