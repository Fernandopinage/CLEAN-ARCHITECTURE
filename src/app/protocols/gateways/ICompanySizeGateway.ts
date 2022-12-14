export interface ICompanySizeGateway {
	create(input: ICompanySizeGateway.CreateCompanySizeData): Promise<ICompanySizeGateway.CreateResultData>;
}

export namespace ICompanySizeGateway {
	export type CreateCompanySizeData = {
		name: string;
	};
	export type CreateResultData = {
		id: number;
		name: string;
	};
}
