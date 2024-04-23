import Button from "./button";

import "@styles/components/hero.css";

export default function Hero() {
	return (
		<div className="hero__container">
			<div className="hero">
				<img className="hero__image" src="/Book.svg" alt="Orange Book" />
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
