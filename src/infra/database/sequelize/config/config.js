/* eslint-disable no-undef */
// eslint-disable-next-line @typescript-eslint/no-var-requires, no-undef
require('dotenv').config();
// eslint-disable-next-line no-undef
module.exports = {
	development: {
		username: process.env.DB_USER,
		password: process.env.DB_PWD,
		database: process.env.DB_NAME,
		host: process.env.DB_HOST,
		port: process.env.DB_PORT,
		dialect: process.env.DB_DIALECT,
		logging: false
	},
	test: {
		username: process.env.DB_USER,
		password: process.env.DB_PWD,
		database: process.env.DB_NAME,
		host: process.env.DB_HOST,
		port: process.env.DB_PORT,
		dialect: process.env.DB_DIALECT,
		logging: false
	},
	production: {
		username: process.env.DB_USER,
		password: process.env.DB_PWD,
		database: process.env.DB_NAME,
		host: process.env.DB_HOST,
		port: process.env.DB_PORT,
		dialect: process.env.DB_DIALECT,
		logging: false
	}
};