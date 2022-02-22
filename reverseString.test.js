const reverseString = require('./reverseString');

test('Testing the reverse of string', () => {
	const str = 'abcd',
		strReverse = 'dcba';
	expect(reverseString(str)).toBe(strReverse);
});
