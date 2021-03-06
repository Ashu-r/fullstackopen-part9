/* eslint-disable no-mixed-spaces-and-tabs */
import { State } from './state';
import { Patient, Diagnosis, Entry } from '../types';

export type Action =
	| {
			type: 'SET_PATIENT_LIST';
			payload: Patient[];
	  }
	| {
			type: 'ADD_PATIENT';
			payload: Patient;
	  }
	| {
			type: 'SET_DIAGNOSES_LIST';
			payload: Diagnosis[];
	  }
	| {
			type: 'ADD_ENTRY';
			patientId: string;
			payload: Entry;
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
		case 'SET_DIAGNOSES_LIST':
			return {
				...state,
				diagnoses: {
					...action.payload.reduce((memo, diagnosis) => ({ ...memo, [diagnosis.code]: diagnosis }), {}),
					...state.diagnoses,
				},
			};
		case 'ADD_ENTRY':
			return {
				...state,
				patients: {
					...state.patients,
					[action.patientId]: { ...state.patients[action.patientId], entries: state.patients[action.patientId].entries.concat(action.payload) },
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

export const setDiagnosesList = (diagnosesList: Diagnosis[]): Action => {
	return { type: 'SET_DIAGNOSES_LIST', payload: diagnosesList };
};

export const addNewEntry = (patientId: string, entry: Entry): Action => {
	return { type: 'ADD_ENTRY', patientId: patientId, payload: entry };
};
