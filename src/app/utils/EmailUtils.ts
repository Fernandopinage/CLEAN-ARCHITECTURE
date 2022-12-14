export default class EmailUtils {
	static isValid(email: string): boolean {
		const re = /\S+@\S+\.\S+/;
		return re.test(email);
	}
}
