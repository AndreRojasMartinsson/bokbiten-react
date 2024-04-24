import "@styles/components/hero.css";
import { lazy } from "react";

const Button = lazy(async () => import("@components/button"));
const HeroCanvas = lazy(async () => import("@components/hero-canvas"));

export default function Hero() {
	return (
		<div className="hero__container">
			<div className="hero">
				<div className="article__book">
					<HeroCanvas />
				</div>
				<div className="hero__content">
					<h3>NYHET</h3>
					<h2>
						BOKBITS
						<br className="hero__break" />
						CUPEN
					</h2>

					<div className="hero__buttons">
						<Button intent="border">Delta</Button>
						<Button intent="secondary">Läs Mer</Button>
					</div>
				</div>
			</div>
		</div>
	);
}
