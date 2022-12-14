import CreateCompanySizeUseCase from '@/app/usecases/company-size/CreateCompanySizeUseCase';
import CompanySizeController from '@/infra/controller/CompanySizeController';
import express from 'express';
import CompanySizeGateway from '../gateways/CompanySizeGateway';

class CompanySizeRoute {
	route(app: express.Application) {
		app.post('/api/v1/company-sizes', async (req, res) => {
			const companySizeGateway = new CompanySizeGateway();
			const companysize = new CompanySizeController(new CreateCompanySizeUseCase(companySizeGateway));
			const response = await companysize.create({
				body: {
					name: req.body.name
				}
			});

			res.status(response.statusCode);
			res.json(response.errors || response.body);
		});
	}
}

export default new CompanySizeRoute();
