const calculateBMI = (height: number, weight: number) => {
	const bmi = weight / Math.pow(height / 100, 2);
	if (bmi < 18.5) return 'Underweight';

	if (bmi < 25) return 'Normal weight';
	if (bmi < 30) return 'Overweight';
	return 'Obese';
};

console.log(calculateBMI(180, 74));
