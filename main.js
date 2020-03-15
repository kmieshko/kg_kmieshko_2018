const isValidInput = (argc) => {
	return argc === 4;
};

const areIsomorphic = (str1, str2) => {
	const len1 = str1.length;
	const len2 = str2.length;
	if (len1 !== len2) return false;
	let checked = {};
	for (let i = 0; i < len1; i++) {
		if (!checked[str1[i]]) {
			checked[str1[i]] = str2[i];
		} else if (checked[str1[i]] !== str2[i]) {
			return false;
		}
	}
	return true;
};

const result = (process) => {
	const argc = process.argv.length;
	if (isValidInput(argc)) {
		const [, , str1, str2] = process.argv;
		return areIsomorphic(str1, str2);
	} else {
		return "Usage: node main.js str1 str2";
	}
};

console.log(result(process));