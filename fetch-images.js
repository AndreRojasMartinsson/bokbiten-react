import { createReadStream, createWriteStream } from 'node:fs';
import { readdir } from 'node:fs/promises';
import sharp from 'sharp';

// async function main() {
// 	console.log('');
// 	const files = await readdir('./public/covers');
// 	files.forEach(async file => {});
// }

async function main() {
	const files = await readdir('./public/covers');
	files.forEach(async file => {
		sharp(`./public/covers/${file}`)
			.resize(160, 160)
			.webp()
			.toFile(`./public/covers/${file.substring(0, file.length - 3)}webp`);
	});
}

void main();
