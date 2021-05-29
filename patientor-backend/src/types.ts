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
	gender: string;
	occupation: string;
};

export type NonSensitivePatientData = Omit<Patient, 'ssn'>;
