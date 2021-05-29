import express from 'express';
import patientService from '../services/patientService';

const router = express.Router();

router.get('/', (_req, res) => {
	res.send(patientService.getNonSensitivePatientData());
});

router.post('/', (_req, res) => {
	res.send('Adds diagnose');
});

export default router;
