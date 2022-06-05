import * as crypto from 'crypto';
import * as fs from 'fs/promises';

import { __dirname } from '../utils.js';

const readableFilePath = `${__dirname}/hash/files/fileToCalculateHashFor.txt`;

export const calculateHash = async () => {  
	try {
		const fileBuffer = await fs.readFile(readableFilePath);
		const hashSum = crypto.createHash('sha256');
		hashSum.update(fileBuffer);
		const hex = hashSum.digest('hex');

		console.log(hex);
	} catch(e) {
		console.error(e);
	}
};

calculateHash();