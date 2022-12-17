import CompanyRoute from '@/infra/routes/CompanyRoute';
import CompanySizeRoute from '@/infra/routes/CompanySizeRoute';
import UserRoute from '@/infra/routes/UserRoute';
import cors from 'cors';
import * as dotenv from 'dotenv';
import express from 'express';
dotenv.config();

const port = process.env.PORT;
const host = process.env.HOST;

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
		this.setRoutes();
	}

	private setMiddlewares(): void {
		this.app.use(express.json());
		this.app.use(
			cors({
				methods: ['GET', 'POST', 'PUT', 'DELETE'],
				origin: process.env.HOST_CLIENT
			})
		);
	}

	private setRoutes(): void {
		UserRoute.route(this.app);
		CompanyRoute.route(this.app);
		CompanySizeRoute.route(this.app);
	}

	listen() {
		this.app.listen(port, () => {
			console.log(`${host}:${port}`);
		});
	}
}
