import { CreateUserUseCase } from '@/app/usecases/user/CreateUserUseCase';
import express from 'express';
import { UserController } from '../controller/UserController';
import { UserGateway } from '../gateways/UserGateway';

class UserRoute {
	route(app: express.Application) {
		app.post('/users', async (req, res) => {
			const user = new UserController(new CreateUserUseCase(new UserGateway()));
			const response = await user.create({
				body: {
					name: req.body.name,
					organization: req.body.organization,
					office: req.body.office,
					password: req.body.password,
					email: req.body.email
				}
			});

			res.status(response.statusCode);
			res.json(response.errors || response.body);
		});
	}
}
export default new UserRoute();
