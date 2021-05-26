const calculateBMI = (height: number, weight: number) => {
	const bmi = weight / Math.pow(height / 100, 2);
	if (bmi < 18.5) return 'Underweight';

	if (bmi < 25) return 'Normal weight';
	if (bmi < 30) return 'Overweight';
	return 'Obese';
};

export const checkAndCalculateBMI = (height: string, weight: string): string => {
	if (!height || !weight) throw 'one or more parameters missing';
	if (isNaN(Number(height)) || isNaN(Number(weight))) throw 'Parameters must be number';
	return calculateBMI(Number(height), Number(weight));
};

if (process.argv.length > 2) {
	const [, , height, weight] = process.argv;

	console.log(checkAndCalculateBMI(height, weight));
}
