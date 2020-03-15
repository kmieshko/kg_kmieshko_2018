const isValidInput = (argc) => {
	return argc === 4;
};

const result = (process) => {
	const argc = process.argv.length;
	if (isValidInput(argc)) {
		const [, , str1, str2] = process.argv;
		console.log(str1,str2);
		return(true);
	} else {
		return "Usage: node main.js str1 str2";
	}
};

console.log(result(process));