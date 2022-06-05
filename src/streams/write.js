import * as fc from 'fs';
import { getPath } from '../utils.js';

const filePath = getPath('streams\\files\\fileToWrite.txt');

export const write = async () => {
	const writeStream = fc.createWriteStream(filePath);

	process.stdin.on('data', (data) => {
		writeStream.write(data);
	})
};

write();