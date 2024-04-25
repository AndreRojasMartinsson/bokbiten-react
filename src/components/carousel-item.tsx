export default function CarouselItem({ cover }: { cover: string }) {
	return (
		<li className="carousel__item">
			<img loading="lazy" src={cover} alt="cover" width={160} height={160} />
		</li>
	);
}
