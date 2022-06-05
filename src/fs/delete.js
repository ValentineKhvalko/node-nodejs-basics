import * as fs from 'fs/promises';
import { getPath, throwConsoleError } from '../utils.js';

const file = getPath('fs\\files\\fileToRemove.txt');

export const remove = async () => {
	fs.unlink(file)
		.catch(throwConsoleError);	
};

remove();