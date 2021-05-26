import express from 'express';
import { checkAndCalculateBMI } from './bmiCalculator';

const app = express();

app.get('/hello', (_req, res) => {
	res.send('Hello Full Stack!');
});

app.get('/bmi', (req, res) => {
	const { height } = req.query;
	const { weight } = req.query;

	try {
		res.json({ weight, height, bmi: checkAndCalculateBMI(String(height), String(weight)) });
	} catch (error) {
		res.json(error);
	}
});

const PORT = 3000;

app.listen(PORT, () => {
	console.log(`server running on port ${PORT}`);
});
