import { CreateCompanySizeRequest, CreateCompanySizeResponse } from '@/app/dtos';
import { Request, Response } from '@/app/protocols/https/boundaries';
import { ICreateCompanySizeUseCase } from '../protocols/ICreateCompanySizeUseCase';

export default class CompanySizeController {
	constructor(private CreateCompanySizeUseCase: ICreateCompanySizeUseCase) {}
	create(req: Request<CreateCompanySizeRequest>): Promise<Response<CreateCompanySizeResponse>> {
		return this.CreateCompanySizeUseCase.execute(req);
	}
}
