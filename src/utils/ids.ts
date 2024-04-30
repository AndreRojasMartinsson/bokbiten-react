/**
 * Converts a unsigned 8-bit array into a hexadecimal string representation.
 * @param byteArray - 8-bit unsigned Byte array with random numbers
 * @returns the converted byte array in the form of a hex string
 */
function toHexString(byteArray: Uint8Array) {
	return Array.prototype.map
		.call(byteArray, byte => {
			return `0${(byte & 0xff).toString(16)}`.slice(-2);
		})
		.join('');
}

/**
 * Generate cryptographically secure 4-byte array filed with random values.
 * @return A short 4-byte unsigned cryptographically secure string identifier.
 */
export const shortId = () => toHexString(crypto.getRandomValues(new Uint8Array(4)));
