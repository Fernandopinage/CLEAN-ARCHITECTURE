import { CreateCompanySizeRequest, CreateCompanySizeResponse } from '@/app/dtos';
import { Request, Response } from '@/app/protocols/https/boundaries';

export interface ICreateCompanySizeUseCase {
	execute(input: Request<CreateCompanySizeRequest>): Promise<Response<CreateCompanySizeResponse>>;
}
