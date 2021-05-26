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

export const checkAndCalculateExercises = (dailyHours: number[], target: number): exerciseInfo => {
	if (!target || dailyHours.length == 0) throw 'one or more parameters missing';
	if (isNaN(Number(target)) || dailyHours.some((e) => isNaN(e))) throw 'Parameters must be number';
	return calculateExercises(dailyHours, target);
};

if (process.argv.length > 2) {
	const target = parseFloat(process.argv[2]);
	const exercises = process.argv.slice(3).map((e) => parseFloat(e));
	console.log(checkAndCalculateExercises(exercises, target));
}
