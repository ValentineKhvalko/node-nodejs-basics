import { fork } from 'child_process';

import { getPath } from '../utils.js';

const fromMain = "\x1b[35m(Main)\x1b[0m: ";

const filePath = getPath('cp\\files\\script.js');

export const spawnChildProcess = async (args) => {
	const childProcess = fork(filePath, args, {silent: true});
	childProcess.stdout.pipe(process.stdout)
	
	process.stdin.on('data', (data) => {
		childProcess.stdin.write(data.toString());
		if (data.includes('CLOSE')) process.exit(0);
	});

	childProcess.stdout.on('data', (msg) => {
		console.log(fromMain + msg.toString());
	})
};

spawnChildProcess(process.argv);