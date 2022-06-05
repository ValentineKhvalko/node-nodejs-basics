const regex = /RSS_/;

export const parseEnv = () => {
	const rssEnvVariables = [];

	Object.entries(process.env).forEach(([key, value]) => {
		if(regex.test(key)) {
			rssEnvVariables.push(`${key}=${value}`)
		}
	})

	console.log(rssEnvVariables.join('; '));
};

parseEnv();