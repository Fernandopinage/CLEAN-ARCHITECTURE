import CreateCompanyUseCase from '@/app/usecases/company/CreateCompanyUseCase';
import ListCompaniesUseCase from '@/app/usecases/company/ListCompaniesUseCase';
import CreateCompanyValidator from '@/app/usecases/validators/CreateCompanyValidator';
import express from 'express';
import CompanyController from '../controller/CompanyController';
import CompanyGateway from '../gateways/CompanyGateway';
import EncryptGateway from '../gateways/EncryptGateway';

class CompanyRoute {
	route(app: express.Application) {
		const company = new CompanyController();

		app.post('/api/v1/companies', async (req, res) => {
			const companyGateway = new CompanyGateway();
			const response = await company.create(
				new CreateCompanyUseCase(companyGateway, new EncryptGateway(), new CreateCompanyValidator(companyGateway)),
				{
					body: {
						idCompanySize: req.body.idCompanySize,
						cnpj: req.body.cnpj,
						name: req.body.name,
						segment: req.body.segment,
						telephone: req.body.telephone,
						address: req.body.address,
						password: req.body.password,
						email: req.body.email,
						accessForum: req.body.accessForum,
						accessCalled: req.body.accessCalled,
						accessUniversityGertec: req.body.accessUniversityGertec,
						accessSupport: req.body.accessSupport,
						accessMdm: req.body.accessMdm,
						accessProduct: req.body.accessProduct,
						acceptedReceiveEmail: req.body.acceptedReceiveEmail,
						signatureNda: req.body.signatureNda
					}
				}
			);

			res.status(response.statusCode);
			res.json(response.errors || response.body);
		});

		app.get('/api/v1/companies', async (req, res) => {
			const companyGateway = new CompanyGateway();
			const response = await company.index(new ListCompaniesUseCase(companyGateway));
			res.status(response.statusCode);
			res.json(response.errors || response.body);
		});
	}
}

export default new CompanyRoute();
