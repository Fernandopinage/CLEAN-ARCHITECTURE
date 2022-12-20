import { ErrorMessage } from './ErrorMessage';

export type HttpResponse<T> = {
	statusCode: number;
	errors?: ErrorMessage[];
	body?: T;
};
