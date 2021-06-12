import { State } from './state';
import { Patient } from '../types';

export type Action =
	| {
			type: 'SET_PATIENT_LIST';
			payload: Patient[];
			// eslint-disable-next-line no-mixed-spaces-and-tabs
	  }
	| {
			type: 'ADD_PATIENT';
			payload: Patient;
			// eslint-disable-next-line no-mixed-spaces-and-tabs
	  };

export const reducer = (state: State, action: Action): State => {
	switch (action.type) {
		case 'SET_PATIENT_LIST':
			return {
				...state,
				patients: {
					...action.payload.reduce((memo, patient) => ({ ...memo, [patient.id]: patient }), {}),
					...state.patients,
				},
			};
		case 'ADD_PATIENT':
			return {
				...state,
				patients: {
					...state.patients,
					[action.payload.id]: action.payload,
				},
			};
		default:
			return state;
	}
};

export const setPatientList = (patientList: Patient[]): Action => {
	return { type: 'SET_PATIENT_LIST', payload: patientList };
};

export const addNewPatient = (patient: Patient): Action => {
	return { type: 'ADD_PATIENT', payload: patient };
};
