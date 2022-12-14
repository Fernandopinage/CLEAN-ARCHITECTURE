export default class PhoneUtils {
	static removeCharacters(input: string): string {
		const remove = /[^0-9]/gi;
		return input.replace(remove, '');
	}

	static isValid(input: string): boolean {
		return this.removeCharacters(input).length > 10;
	}
}
