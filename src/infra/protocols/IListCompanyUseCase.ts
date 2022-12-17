import { ListCompaniesResponse } from '@/app/dtos';
import { Response } from '@/app/protocols/https/boundaries';
export interface IListCompaniesUseCase {
	execute(): Promise<Response<ListCompaniesResponse[]>>;
}
