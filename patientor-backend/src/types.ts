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

export type Patient = {
	ssn: string;
	id: string;
	name: string;
	dateOfBirth: string;
	gender: Gender;
	occupation: string;
};

export type NonSensitivePatientData = Omit<Patient, 'ssn'>;

export type NewPatient = Omit<Patient, 'id'>;
