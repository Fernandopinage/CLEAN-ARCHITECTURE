import * as dotenv from 'dotenv';
import { Dialect, Sequelize } from 'sequelize';
dotenv.config();

export const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PWD, {
	host: process.env.DB_HOST,
	dialect: process.env.DB_DIALECT as Dialect,
	define: { timestamps: false },
	logging: false
});
