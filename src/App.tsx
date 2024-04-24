import Button from "@components/button";
import Carousel from "@components/carousel";
import CookieConsent from "@components/cookie-consent";
import Header from "@components/header";
import Hero from "@components/hero";
import SectionTitle from "@components/section-title";
import { ThemeProvider } from "@components/theme";

function Main() {
	return (
		<>
			<Header />
			<Hero />
			<main className="site__main">
				<div className="site__article">
					<SectionTitle title="ONLY AT" />
					<p
						className="article__subtitle"
						style={{ fontSize: "36px", lineHeight: 1 }}
					>
						BOKBITEN
					</p>
					<Carousel />

					<SectionTitle style={{ marginTop: "80px" }} title="NEW ARRIVALS" />
					<p className="article__subtitle">Uppdaterad Dagligen</p>

					<div className="article__content">
						<div className="section__article">
							<div className="section__block">
								<div className="section__text">
									<figure className="article__figure">Tio Dagar</figure>
									<p className="article__author">Leffe Grimwalker</p>
								</div>
								<Button
									intent="secondary"
									size="regular"
									className="article__button"
								>
									Läs Nu
								</Button>
							</div>
							<img
								className="article__image"
								src="BookCover1.svg"
								alt="Tio Dagar av Leffe Grimwalker"
							/>
						</div>
						<div className="section__article">
							<img
								className="article__image"
								src="BookCover2.svg"
								alt="Kingpin av Leffe Grimwalker"
							/>
							<div className="section__block">
								<div className="section__text">
									<figure className="article__figure">Kingpin</figure>
									<p className="article__author">Leffe Grimwalker</p>
								</div>
								<Button
									intent="secondary"
									size="regular"
									className="article__button"
								>
									Läs Nu
								</Button>
							</div>
						</div>
						<div className="section__article">
							<div className="section__block">
								<div className="section__text">
									<figure className="article__figure">Tio Dagar</figure>
									<p className="article__author">Leffe Grimwalker</p>
								</div>
								<Button
									intent="secondary"
									size="regular"
									className="article__button"
								>
									Läs Nu
								</Button>
							</div>
							<img
								className="article__image"
								src="BookCover1.svg"
								alt="Tio Dagar av Leffe Grimwalker"
							/>
						</div>
						<div className="section__article">
							<img
								className="article__image"
								src="BookCover2.svg"
								alt="Kingpin av Leffe Grimwalker"
							/>
							<div className="section__block">
								<div className="section__text">
									<figure className="article__figure">Kingpin</figure>
									<p className="article__author">Leffe Grimwalker</p>
								</div>
								<Button
									intent="secondary"
									size="regular"
									className="article__button"
								>
									Läs Nu
								</Button>
							</div>
						</div>
						<div className="section__article">
							<div className="section__block">
								<div className="section__text">
									<figure className="article__figure">Tio Dagar</figure>
									<p className="article__author">Leffe Grimwalker</p>
								</div>
								<Button
									intent="secondary"
									size="regular"
									className="article__button"
								>
									Läs Nu
								</Button>
							</div>
							<img
								className="article__image"
								src="BookCover1.svg"
								alt="Tio Dagar av Leffe Grimwalker"
							/>
						</div>
						<div className="section__article">
							<img
								className="article__image"
								src="BookCover2.svg"
								alt="Kingpin av Leffe Grimwalker"
							/>
							<div className="section__block">
								<div className="section__text">
									<figure className="article__figure">Kingpin</figure>
									<p className="article__author">Leffe Grimwalker</p>
								</div>
								<Button
									intent="secondary"
									size="regular"
									className="article__button"
								>
									Läs Nu
								</Button>
							</div>
						</div>
						<div className="section__article">
							<div className="section__block">
								<div className="section__text">
									<figure className="article__figure">Tio Dagar</figure>
									<p className="article__author">Leffe Grimwalker</p>
								</div>
								<Button
									intent="secondary"
									size="regular"
									className="article__button"
								>
									Läs Nu
								</Button>
							</div>
							<img
								className="article__image"
								src="BookCover1.svg"
								alt="Tio Dagar av Leffe Grimwalker"
							/>
						</div>
						<div className="section__article">
							<img
								className="article__image"
								src="BookCover2.svg"
								alt="Kingpin av Leffe Grimwalker"
							/>
							<div className="section__block">
								<div className="section__text">
									<figure className="article__figure">Kingpin</figure>
									<p className="article__author">Leffe Grimwalker</p>
								</div>
								<Button
									intent="secondary"
									size="regular"
									className="article__button"
								>
									Läs Nu
								</Button>
							</div>
						</div>
					</div>
				</div>
			</main>
			<CookieConsent />
		</>
	);
}

function App() {
	return (
		<ThemeProvider>
			<Main />
		</ThemeProvider>
	);
}

export default App;
