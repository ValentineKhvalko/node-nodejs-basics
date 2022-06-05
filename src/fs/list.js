import * as fs from 'fs/promises';
import { getPath, throwConsoleError } from '../utils.js';

const filesFolder = getPath('fs\\files');

export const list = async () => {
	try {
		await fs.access(filesFolder);
		const files = await fs.readdir(filesFolder);
		files.forEach(file => console.log(file));
	} catch {
		throwConsoleError();
	}
};

list();