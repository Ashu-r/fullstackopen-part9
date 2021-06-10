import patientData from '../../data/patients';
import { NewPatient, NonSensitivePatientData, Patient } from '../types';
import { v1 as uuid } from 'uuid';

const patients: Array<Patient> = patientData;

const getPatient = (): Array<Patient> => {
	return patients;
};

const getNonSensitivePatientData = (): NonSensitivePatientData[] => {
	return patients.map(({ id, name, dateOfBirth, gender, occupation, entries }) => ({
		id,
		name,
		dateOfBirth,
		gender,
		occupation,
		entries,
	}));
};

const addPatient = (patient: NewPatient) => {
	const newPatient = {
		id: uuid(),
		...patient,
	};
	patients.push(newPatient);
	return newPatient;
};

export default {
	getPatient,
	getNonSensitivePatientData,
	addPatient,
};
