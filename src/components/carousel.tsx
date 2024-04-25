import covers from "@config/covers";

export default function Carousel() {
	const duplicatedCovers = [...covers, ...covers];

	return (
		<div className="arrivals__carousel">
			<ul className="carousel__row">
				{duplicatedCovers.map((cover, idx) => (
					<li className="carousel__item" key={idx}>
						<img src={cover} alt="cover" width={160} />
					</li>
				))}
			</ul>
			<ul className="carousel__row">
				{duplicatedCovers.map((cover, idx) => (
					<li className="carousel__item" key={idx}>
						<img src={cover} alt="cover" width={160} />
					</li>
				))}
			</ul>
		</div>
	);
}
