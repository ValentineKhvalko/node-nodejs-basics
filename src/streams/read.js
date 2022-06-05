import * as fc from 'fs';
import { getPath } from '../utils.js';

const filePath = getPath('streams\\files\\fileToRead.txt');

export const read = async () => {
	const readStream = fc.createReadStream(filePath);

	readStream.on('data', (chunk) => {
		process.stdout.write(chunk.toString())
	})
     
};

read()