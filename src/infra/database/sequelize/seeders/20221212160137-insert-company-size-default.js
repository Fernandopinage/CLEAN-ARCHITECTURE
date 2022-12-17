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
					name: 'Microempreendedor Individual'
				},
				{
					id: 2,
					name: 'Microempresa'
				},
				{
					id: 3,
					name: 'Empresa de Pequeno Porte'
				},
				{
					id: 4,
					name: 'Empresa de Médio Porte'
				},
				{
					id: 5,
					name: 'Grande Empresa'
				}
			],
			{}
		);
	},

	async down(queryInterface) {
		await queryInterface.bulkDelete('company_size', null, {});
	}
};
