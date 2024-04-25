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
					<h2>NYHET</h2>
					<h3>
						BOKBITS
						<br className="hero__break" />
						CUPEN
					</h3>

					<div className="hero__buttons">
						<Button aria-label="Delta i Bokbitscupen" intent="border">
							Delta
						</Button>
						<Button aria-label="Läs mer om Bokbitscupen" intent="secondary">
							Läs Mer
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
}
