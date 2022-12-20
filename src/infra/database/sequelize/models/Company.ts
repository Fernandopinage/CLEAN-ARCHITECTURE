import { sequelize } from '@/infra/database/sequelize/config/database';
import { DataTypes, Model } from 'sequelize';

export class Company extends Model {}

Company.init(
	{
		id: {
			type: DataTypes.BIGINT,
			autoIncrement: true,
			primaryKey: true
		},
		id_company_size: {
			type: DataTypes.BIGINT,
			allowNull: false
		},
		cnpj: {
			type: DataTypes.STRING,
			allowNull: false
		},
		name: {
			type: DataTypes.STRING,
			allowNull: false
		},
		segment: {
			type: DataTypes.STRING,
			allowNull: false
		},
		telephone: {
			type: DataTypes.STRING,
			allowNull: false
		},
		address: {
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
		access_forum: {
			type: DataTypes.BOOLEAN,
			allowNull: false
		},
		access_called: {
			type: DataTypes.BOOLEAN,
			allowNull: false
		},
		access_university_gertec: {
			type: DataTypes.BOOLEAN,
			allowNull: false
		},
		access_support: {
			type: DataTypes.BOOLEAN,
			allowNull: false
		},
		access_mdm: {
			type: DataTypes.BOOLEAN,
			allowNull: false
		},
		access_product: {
			type: DataTypes.BOOLEAN,
			allowNull: false
		},
		receive_email: {
			type: DataTypes.BOOLEAN,
			allowNull: false
		},
		signature_nda: {
			type: DataTypes.BOOLEAN,
			allowNull: false
		}
	},
	{
		sequelize,
		modelName: 'company',
		tableName: 'companies'
	}
);
