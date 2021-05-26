import express from 'express';
import { checkAndCalculateBMI } from './bmiCalculator';
import { checkAndCalculateExercises } from './exerciseCalculator';
const app = express();

app.use(express.json());

app.get('/hello', (_req, res) => {
	res.send('Hello Full Stack!');
});

app.get('/bmi', (req, res) => {
	const { height } = req.query;
	const { weight } = req.query;

	try {
		res.json({ weight, height, bmi: checkAndCalculateBMI(height, weight) });
	} catch (error) {
		res.json(error);
	}
});

app.post('/exercises', (req, res) => {
	const { daily_exercises, target } = req.body;
	try {
		res.send(checkAndCalculateExercises(daily_exercises, target));
	} catch (error) {
		res.send({ error });
	}
});

const PORT = 3000;

app.listen(PORT, () => {
	console.log(`server running on port ${PORT}`);
});
