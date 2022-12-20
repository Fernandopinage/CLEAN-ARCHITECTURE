import { EMAILS_NON_CORPORATE } from './constants/EmailsNonCorporate';

export class EmailUtils {
	static isValid(email: string): boolean {
		const re = /\S+@\S+\.\S+/;
		return re.test(email);
	}

	static isNonCorporateEmail(email: string): boolean {
		const emails = EMAILS_NON_CORPORATE.replace(/\s/g, '').split(',');
		return emails.some((e) => email.includes(e));
	}
}
