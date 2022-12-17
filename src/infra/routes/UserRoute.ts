import CreateUserUseCase from '@/app/usecases/user/CreateUserUseCase';
import CreateUserValidator from '@/app/usecases/validators/CreateUserValidator';
import express from 'express';
import UserController from '../controller/UserController';
import CompanyGateway from '../gateways/CompanyGateway';
import EncryptGateway from '../gateways/EncryptGateway';
import UserGateway from '../gateways/UserGateway';

class UserRoute {
	route(app: express.Application) {
		app.post('/api/v1/users', async (req, res) => {
			const userGateway = new UserGateway();
			const user = new UserController(
				new CreateUserUseCase(
					userGateway,
					new CreateUserValidator(userGateway, new CompanyGateway()),
					new EncryptGateway()
				)
			);
			const response = await user.create({
				body: {
					name: req.body.name,
					idCompany: req.body.idCompany,
					office: req.body.office,
					password: req.body.password,
					email: req.body.email,
					acceptedReceiveEmail: req.body.acceptedReceiveEmail
				}
			});

			res.status(response.statusCode);
			res.json(response.errors || response.body);
		});
	}
}
export default new UserRoute();
