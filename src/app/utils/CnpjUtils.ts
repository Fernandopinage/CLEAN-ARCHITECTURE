import { cnpj } from 'cpf-cnpj-validator';

export default class CnpjUtils {
	static removeCharacters(input: string): string {
		const remove = /[^0-9]/gi;
		return input.replace(remove, '');
	}

	static isValid(input: string): boolean {
		return cnpj.isValid(this.removeCharacters(input));
	}
}
