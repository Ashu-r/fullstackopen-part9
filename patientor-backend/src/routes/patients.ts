import express from 'express';
import patientService from '../services/patientService';
import toNewPatient from '../utils';

const router = express.Router();

router.get('/:id', (req, res) => {
	res.send(patientService.getNonSensitivePatient(req.params.id));
});

router.get('/', (_req, res) => {
	res.send(patientService.getNonSensitivePatientData());
});

router.post('/', (req, res) => {
	const newPatient = toNewPatient(req.body);
	const addedPatient = patientService.addPatient(newPatient);
	res.json(addedPatient);
});

export default router;
