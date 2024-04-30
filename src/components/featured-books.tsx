import Button from '@components/button';
import { pregenerateBooks } from '@utils/books';

export default function FeaturedBooks() {
	const newBooks = pregenerateBooks();

	return (
		<>
			{newBooks.map(({ author, image, title }, idx) => (
				<div
					key={idx}
					className='section__article'
					style={{ backgroundImage: `url(${image})` }}
				>
					<div className='image__blur'></div>

					<div className='section__block'>
						<div className='section__text'>
							<figure className='article__figure'>{title}</figure>
							<p className='article__author'>{author}</p>
						</div>
						<Button
							aria-label={`Read more about ${title} by ${author}`}
							intent='secondary'
							size='regular'
							className='article__button'
						>
							Läs Nu
						</Button>
					</div>
				</div>
			))}
		</>
	);
}
