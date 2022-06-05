import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
export const __dirname = dirname(__filename);
export const getPath = (path) => `${__dirname}\\${path}`;

const ERROR_TEXT = 'FS operation failed';

export const throwConsoleError = () => console.log(new Error(ERROR_TEXT));


