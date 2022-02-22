const capitalize = (str) => {
	// return str.slice(0, 1).toUpperCase().concat(str.splice(1));
	return str.split('').splice(0, 1)[0].toUpperCase().concat(str.slice(1));
};

module.exports = capitalize;
