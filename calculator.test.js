const calc = require('./calculator');

describe('Calculator', () => {
	test('add function', () => {
		expect(calc.add(2, 3)).toBe(5);
	});
	test('subtract function', () => {
		expect(calc.subtract(10, 5)).toBe(5);
	});
	test('multiply function', () => {
		expect(calc.multiply(5, 5)).toBe(25);
	});
	test('divide', () => {
		expect(calc.divide(100, 10)).toBe(10);
	});
});
