import { Transform } from 'stream';

export const transform = async () => {
	const myTransform = new Transform({
		transform(chunk, encoding, callback) {
			callback(null, chunk.toString().split('').reverse().join('') + '\n')
		},
	});

	myTransform.on('data', (chunk) => {
		process.stdout.write(chunk);
	})

	process.stdin.on('data', (data) => {
		myTransform.write(data);
	})
};

transform();