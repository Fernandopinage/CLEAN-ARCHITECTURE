import CreateCompanyUseCase from '@/app/usecases/company/CreateCompanyUseCase';
import CreateCompanyValidator from '@/app/usecases/validators/CreateCompanyValidator';
import express from 'express';
import CompanyController from '../controller/CompanyController';
import CompanyGateway from '../gateways/CompanyGateway';
import EncryptGateway from '../gateways/EncryptGateway';

class CompanyRoute {
	route(app: express.Application) {
		app.post('/api/v1/companies', async (req, res) => {
			const companyGateway = new CompanyGateway();
			const company = new CompanyController(
				new CreateCompanyUseCase(companyGateway, new EncryptGateway(), new CreateCompanyValidator(companyGateway))
			);

			const response = await company.create({
				body: {
					idCompanySize: req.body.idCompanySize,
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
			});

			res.status(response.statusCode);
			res.json(response.errors || response.body);
		});
	}
}

export default new CompanyRoute();
