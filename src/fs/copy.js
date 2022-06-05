import * as fs from 'fs/promises';
import { throwConsoleError, getPath } from '../utils.js';

const filesFolder = getPath('fs\\files');
const filesCopyFolder = getPath('fs\\files_copy');

const createCopyFile = async (file, {from, to}) => {
	try {
		const fileContent = await fs.readFile(`${from}\\${file}`);
		fs.writeFile(`${to}\\${file}`, fileContent, 'utf8')
	} catch {
		throwConsoleError();
	}
}

export const copy = async () => {
	try {
		await fs.access(filesCopyFolder)
		throwConsoleError();
	} catch (error) {
		try {
			await fs.mkdir(filesCopyFolder);
			const files = await fs.readdir(filesFolder);
			files.forEach((file) => {
				createCopyFile(file, { from: filesFolder, to: filesCopyFolder })
			});
		} catch {
			throwConsoleError();
		}
	}
};

copy();