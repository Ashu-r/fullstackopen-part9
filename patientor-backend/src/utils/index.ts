import { Gender, NewPatient } from '../types';

const isString = (text: unknown): text is string => {
	return typeof text === 'string' || text instanceof String;
};

const isDate = (date: string): boolean => {
	return Boolean(Date.parse(date));
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const isGender = (param: any): param is Gender => {
	return Object.values(Gender).includes(param);
};

const parseString = (str: unknown, field: string): string => {
	if (!str || !isString(str)) {
		throw new Error('Incorrect or missing field: ' + field);
	}
	return str;
};

const parseDate = (date: unknown): string => {
	if (!date || !isString(date) || !isDate(date)) {
		throw new Error('Incorrect or missing date: ' + date);
	}
	return date;
};

const parseGender = (gender: unknown): Gender => {
	if (!gender || !isGender(gender)) {
		throw new Error('Incorrect or missing Gender: ' + gender);
	}
	return gender;
};

type Fields = {
	ssn: unknown;
	name: unknown;
	dateOfBirth: unknown;
	gender: unknown;
	occupation: unknown;
};

const toNewPatient = ({ ssn, name, dateOfBirth, gender, occupation }: Fields): NewPatient => {
	const newPatient: NewPatient = {
		ssn: parseString(ssn, 'ssn'),
		name: parseString(name, 'name'),
		dateOfBirth: parseDate(dateOfBirth),
		gender: parseGender(gender),
		occupation: parseString(occupation, 'occupation'),
	};
	return newPatient;
};

export default toNewPatient;
