const calculateBMI = (height: number, weight: number) => {
	const bmi = weight / Math.pow(height / 100, 2);
	if (bmi < 18.5) return 'Underweight';

	if (bmi < 25) return 'Normal weight';
	if (bmi < 30) return 'Overweight';
	return 'Obese';
};

const [, , height, weight] = process.argv;
if (!height || !weight) throw new Error('one or more parameters missing');
if (isNaN(Number(height)) || isNaN(Number(weight))) throw new Error('Parameters must be number');

console.log(calculateBMI(Number(height), Number(weight)));
