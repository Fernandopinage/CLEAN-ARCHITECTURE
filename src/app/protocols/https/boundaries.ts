export interface Request<T> {
	body?: T;
}

export interface Response<T> {
	statusCode: number;
	errors?: ErrorMessage[];
	body?: T;
}

export interface ErrorMessage {
	message: string;
	code: string;
}
