import covers from "@config/covers";
import { lazy } from "react";

const CarouselItem = lazy(async () => import("./carousel-item"));

export default function Carousel() {
	const duplicatedCovers = [...covers, ...covers];

	return (
		<div className="arrivals__carousel">
			<ul className="carousel__row">
				{duplicatedCovers.map((cover, idx) => (
					<CarouselItem key={idx} cover={cover} />
				))}
			</ul>
			<ul className="carousel__row">
				{duplicatedCovers.map((cover, idx) => (
					<CarouselItem key={idx} cover={cover} />
				))}
			</ul>
		</div>
	);
}
