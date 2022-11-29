import UserRoute from '@/infra/routes/UserRoute';
import * as dotenv from 'dotenv';
import express from 'express';
dotenv.config();
const port = process.env.PORT || '3000';

export default class Route {
	public app: express.Application;

	static instance: Route;

	static getInstance() {
		if (this.instance === undefined) {
			return new Route();
		}
		return this.instance;
	}

	private constructor() {
		this.app = express();
		this.setMiddlewares();
		this.setUserRoute();
	}

	private setMiddlewares(): void {
		this.app.use(express.json());
	}

	private setUserRoute(): void {
		UserRoute.route(this.app);
	}

	listen() {
		this.app.listen(port, () => {
			console.log('http://localhost:3000/');
		});
	}
}
