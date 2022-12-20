import { HttpResponse, ListCompaniesResponse } from '@/app/dtos';
export interface IListCompaniesUseCase {
	execute(): Promise<HttpResponse<ListCompaniesResponse[]>>;
}
