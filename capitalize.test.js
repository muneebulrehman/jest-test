const capitalize = require('./capitalize');

test('checking capitalization', () => {
	expect(capitalize('abcdef')).toBe('Abcdef');
});
