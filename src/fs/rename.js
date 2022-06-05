import * as fs from 'fs';
import { getPath, throwConsoleError } from '../utils.js';

const oldFile = getPath('fs\\files\\wrongFilename.txt');
const newFile = getPath('fs\\files\\properFilename.md');

export const rename = async () => {
	if(!fs.existsSync(oldFile) || fs.existsSync(newFile)) {
		throwConsoleError();
	} else {
		fs.rename(oldFile, newFile, (err) => {
			if(err) {
				throwConsoleError();
			}
		});
	}	
};

rename();