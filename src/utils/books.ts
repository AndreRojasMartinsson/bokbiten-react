import books from '@config/books';

/**
 * Takes books array of any books and clones them 4 times into a new array.
 * @returns A array filled of books
 */
export function pregenerateBooks() {
	// Multiply by 4 to get the new array size.

	return new Array<typeof books>(2 * books.length).fill([]).reduce(acc => [...acc, ...books], []);
}
