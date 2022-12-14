'use strict';

/** @type {import('sequelize-cli').Migration} */
// eslint-disable-next-line no-undef
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable('companies', {
			id: {
				type: Sequelize.BIGINT,
				autoIncrement: true,
				primaryKey: true
			},
			id_company_size: {
				type: Sequelize.BIGINT,
				allowNull: false
			},
			name: {
				type: Sequelize.STRING,
				allowNull: false
			},
			segment: {
				type: Sequelize.STRING,
				allowNull: false
			},
			telephone: {
				type: Sequelize.STRING,
				allowNull: false
			},
			address: {
				type: Sequelize.STRING,
				allowNull: false
			},
			password: {
				type: Sequelize.STRING,
				allowNull: false
			},
			email: {
				type: Sequelize.STRING,
				allowNull: false
			},
			access_forum: {
				type: Sequelize.BOOLEAN,
				allowNull: false
			},
			access_called: {
				type: Sequelize.BOOLEAN,
				allowNull: false
			},
			access_university_gertec: {
				type: Sequelize.BOOLEAN,
				allowNull: false
			},
			access_support: {
				type: Sequelize.BOOLEAN,
				allowNull: false
			},
			access_mdm: {
				type: Sequelize.BOOLEAN,
				allowNull: false
			},
			access_product: {
				type: Sequelize.BOOLEAN,
				allowNull: false
			},
			receive_email: {
				type: Sequelize.BOOLEAN,
				allowNull: false
			},
			signature_nda: {
				type: Sequelize.BOOLEAN,
				allowNull: false
			},
			created_at: {
				allowNull: false,
				type: Sequelize.DATE,
				defaultValue: Sequelize.fn('NOW')
			},
			updated_at: {
				allowNull: false,
				type: Sequelize.DATE,
				defaultValue: Sequelize.fn('NOW')
			}
		});
	},

	async down(queryInterface) {
		await queryInterface.dropTable('companies');
	}
};
