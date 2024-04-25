function toHexString(byteArray: Uint32Array) {
	return Array.prototype.map
		.call(byteArray, (byte) => {
			return `0${(byte & 0xff).toString(16)}`.slice(-2);
		})
		.join("");
}

export const sid = () =>
	toHexString(crypto.getRandomValues(new Uint32Array(4)));
