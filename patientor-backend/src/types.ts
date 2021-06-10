export enum Gender {
	Male = 'male',
	Female = 'female',
	Other = 'other',
}

export type Diagnose = {
	code: string;
	name: string;
	latin?: string;
};

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface Entry {}

export type Patient = {
	ssn: string;
	id: string;
	name: string;
	dateOfBirth: string;
	gender: Gender;
	occupation: string;
	entries: Entry[];
};

export type NonSensitivePatientData = Omit<Patient, 'ssn' | 'entries'>;

export type NewPatient = Omit<Patient, 'id'>;
