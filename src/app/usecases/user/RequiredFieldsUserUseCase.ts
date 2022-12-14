export default class RequiredFields {
	static fieldsValid(input): boolean {
		for (const property in input) {
			if (!input[property]) {
				return false;
			}
		}
		return true;
	}
}
