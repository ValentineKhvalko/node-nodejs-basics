import * as zlib from 'zlib';
import * as fs from 'fs';

import { getPath } from '../utils.js';

const filePath = getPath('zip\\files\\fileToCompress.txt');
const gzFilePath = getPath('zip\\files\\archiv.gz')


export const decompress = async () => {
	const unzip = zlib.createUnzip();
	const inp = fs.createReadStream(gzFilePath);
	const out = fs.createWriteStream(filePath);

	inp.pipe(unzip)
		.pipe(out)
};

decompress()