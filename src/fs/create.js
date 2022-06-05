import * as fs from 'fs/promises';
import { throwConsoleError } from '../utils.js';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const getPath = (path) => `${__dirname}\\${path}`;

const CONTENT = 'I am fresh and young';
const path = getPath('files\\fresh.txt');

export const create = async () => {
  fs.access(path)
    .then(throwConsoleError)
    .catch(() => {
      fs.writeFile(path, CONTENT, 'utf8')
        .catch(throwConsoleError)
    })
};

create();