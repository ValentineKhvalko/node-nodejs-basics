import { Worker } from 'worker_threads'
import { cpus } from 'os';

import { getPath } from '../utils.js';

const filePath = getPath('wt\\worker.js');

const START_NUMBER = 10;

const createWorker = (data) => {
	return new Promise((resolve) => {
		const worker = new Worker(filePath, {
			workerData: data
		});

		worker.on('message', (formatedData) => {
			resolve({status: 'resolved', data: formatedData})
		});
		worker.on('error', () => {
			resolve({status: 'error', data: null});
		});
	});
};

export const performCalculations = async () => {
  try {
		const cpusCount = cpus().length;
		
		const data = await Promise.all(
			Array.from({ length: cpusCount })
				.map((_, index) => createWorker(START_NUMBER + index))
		);

		console.log(data);
	} catch(e) {
		console.error(e);
	}
};

performCalculations();