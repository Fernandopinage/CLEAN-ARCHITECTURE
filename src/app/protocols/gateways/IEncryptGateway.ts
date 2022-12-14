export interface IEncryptGateway {
	crypt(input: string): Promise<string>;
	isValidHash(input: string, hash: string): Promise<boolean>;
}
