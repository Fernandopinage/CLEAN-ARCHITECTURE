import { IEncryptGateway } from '@/app/protocols/gateways/IEncryptGateway';
import { compare, hash } from 'bcrypt';
import * as dotenv from 'dotenv';
dotenv.config();

export default class EncryptGateway implements IEncryptGateway {
	async crypt(input: string): Promise<string> {
		const result = await hash(input, Number(process.env.SALTROUNDS));
		return result;
	}

	async isValidHash(input: string, hash: string): Promise<boolean> {
		return await compare(input, hash);
	}
}
