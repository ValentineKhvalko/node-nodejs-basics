import * as fs from 'fs/promises';
import { getPath, throwConsoleError } from '../utils.js';

const filePathToRead = getPath('fs\\files\\fileToRead.txt');

export const read = async () => {
	try {
		await fs.access(filePathToRead);
		const fileContent = await fs.readFile(filePathToRead);
		console.log(fileContent.toString());
	} catch {
		throwConsoleError();
	}
};

read();