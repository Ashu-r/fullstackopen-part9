interface exerciseInfo {
	periodLength: number;
	trainingDays: number;
	success: boolean;
	rating: number;
	ratingDescription: string;
	target: number;
	average: number;
}

const calculateExercises = (dailyHours: number[], target: number): exerciseInfo => {
	const periodLength = dailyHours.length;
	const trainingDays = dailyHours.filter((day) => day > 0).length;
	const total = dailyHours.reduce((a, b) => a + b, 0);
	const average = total / periodLength;
	let rating, ratingDescription;
	console.log(average / target);
	if (average > target) {
		rating = 3;
		ratingDescription = 'Good one';
	} else if (average / target > 0.75) {
		rating = 2;
		ratingDescription = 'not too bad but could be better';
	} else {
		rating = 1;
		ratingDescription = "That's downright bad";
	}

	return {
		periodLength,
		trainingDays,
		success: average < target ? false : true,
		rating,
		ratingDescription,
		target,
		average,
	};
};

const target = parseFloat(process.argv[2]);
const exercises = process.argv.slice(3).map((e) => parseFloat(e));
if (!target || exercises.length == 0) throw new Error('one or more parameters missing');
if (isNaN(Number(target)) || exercises.some((e) => isNaN(e))) throw new Error('Parameters must be number');
console.log(calculateExercises(exercises, target));
