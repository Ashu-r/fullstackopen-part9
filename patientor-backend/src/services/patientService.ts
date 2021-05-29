import patientData from '../../data/patients.json';
import { NonSensitivePatientData, Patient } from '../types';

const patients: Array<Patient> = patientData;

const getPatient = (): Array<Patient> => {
	return patients;
};

const getNonSensitivePatientData = (): NonSensitivePatientData[] => {
	return patients.map(({ id, name, dateOfBirth, gender, occupation }) => ({
		id,
		name,
		dateOfBirth,
		gender,
		occupation,
	}));
};

const addPatient = () => {
	return null;
};

export default {
	getPatient,
	getNonSensitivePatientData,
	addPatient,
};
