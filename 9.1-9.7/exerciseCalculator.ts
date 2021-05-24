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

console.log(calculateExercises([3, 0, 2, 4.5, 0, 3, 1], 2));
