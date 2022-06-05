import * as zlib from 'zlib';
import * as fs from 'fs';

import { getPath } from '../utils.js';

const filePath = getPath('zip\\files\\fileToCompress.txt');
const gzFilePath = getPath('zip\\files\\archiv.gz')


export const compress = async () => {
  const gzip = zlib.createGzip();
	const inp = fs.createReadStream(filePath);
	const out = fs.createWriteStream(gzFilePath);

	inp.pipe(gzip)
		.pipe(out)
};

compress();