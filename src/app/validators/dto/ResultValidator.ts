import { ErrorMessage } from '@/app/dtos/http/ErrorMessage';

export type ResultValidator = {
	statusCode: number;
	errors?: ErrorMessage[];
};
