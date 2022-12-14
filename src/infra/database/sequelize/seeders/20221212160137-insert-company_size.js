'use strict';

/** @type {import('sequelize-cli').Migration} */
// eslint-disable-next-line no-undef
module.exports = {
	async up(queryInterface, _Sequelize) {
		await queryInterface.bulkInsert(
			'company_size',
			[
				{
					id: 1,
					name: 'Empresa de Pequeno Porte (EPP)'
				},
				{
					id: 2,
					name: 'Empresa de Médio Porte (EMP)'
				},
				{
					id: 3,
					name: 'Grande Empresa (GE)'
				}
			],
			{}
		);
	},

	async down(queryInterface) {
		await queryInterface.bulkDelete('company_size', null, {});
	}
};
