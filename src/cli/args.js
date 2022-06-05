const keyRegex = /--/;

export const parseArgs = () => {
	const actualArgs = process.argv.slice(2);
	const formatedArgs = [];

	actualArgs.forEach((value, index) => {
		if(keyRegex.test(value)){
			formatedArgs.push(`${value.replace(keyRegex, '')} is ${actualArgs[index + 1]}`)
		}
	})

	console.log(formatedArgs.join(', '));
};

parseArgs();