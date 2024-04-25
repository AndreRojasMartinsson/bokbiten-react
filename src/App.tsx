import { lazy } from "react";

const ThemeProvider = lazy(async () => import("@components/theme-provider"));
const Header = lazy(async () => import("@components/header"));
const Hero = lazy(async () => import("@components/hero"));
const SectionTitle = lazy(async () => import("@components/section-title"));
const CookieConsent = lazy(async () => import("@components/cookie-consent"));
const Carousel = lazy(async () => import("@components/carousel"));
const Button = lazy(async () => import("@components/button"));

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
									aria-label="Read more about Tio Dagar"
									intent="secondary"
									size="regular"
									className="article__button"
								>
									Läs Nu
								</Button>
							</div>
							<img
								loading="lazy"
								className="article__image"
								src="BookCover1.jpg"
								alt="Tio Dagar av Leffe Grimwalker"
							/>
						</div>
						<div className="section__article">
							<img
								loading="lazy"
								className="article__image"
								src="BookCover2.jpg"
								alt="Kingpin av Leffe Grimwalker"
							/>
							<div className="section__block">
								<div className="section__text">
									<figure className="article__figure">Kingpin</figure>
									<p className="article__author">Leffe Grimwalker</p>
								</div>
								<Button
									aria-label="Read more about Kingpin"
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
									aria-label="Read more about Tio Dagar"
									intent="secondary"
									size="regular"
									className="article__button"
								>
									Läs Nu
								</Button>
							</div>
							<img
								loading="lazy"
								className="article__image"
								src="BookCover1.jpg"
								alt="Tio Dagar av Leffe Grimwalker"
							/>
						</div>
						<div className="section__article">
							<img
								loading="lazy"
								className="article__image"
								src="BookCover2.jpg"
								style={{ width: "50px" }}
								alt="Kingpin av Leffe Grimwalker"
							/>
							<div className="section__block">
								<div className="section__text">
									<figure className="article__figure">Kingpin</figure>
									<p className="article__author">Leffe Grimwalker</p>
								</div>
								<Button
									aria-label="Read more about Kingpin"
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
									aria-label="Read more about Tio Dagar"
									intent="secondary"
									size="regular"
									className="article__button"
								>
									Läs Nu
								</Button>
							</div>
							<img
								loading="lazy"
								className="article__image"
								src="BookCover1.jpg"
								alt="Tio Dagar av Leffe Grimwalker"
							/>
						</div>
						<div className="section__article">
							<img
								loading="lazy"
								className="article__image"
								src="BookCover2.jpg"
								alt="Kingpin av Leffe Grimwalker"
							/>
							<div className="section__block">
								<div className="section__text">
									<figure className="article__figure">Kingpin</figure>
									<p className="article__author">Leffe Grimwalker</p>
								</div>
								<Button
									aria-label="Read more about Kingpin"
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
									aria-label="Read more about Tio Dagar"
									intent="secondary"
									size="regular"
									className="article__button"
								>
									Läs Nu
								</Button>
							</div>
							<img
								loading="lazy"
								className="article__image"
								src="BookCover1.jpg"
								alt="Tio Dagar av Leffe Grimwalker"
							/>
						</div>
						<div className="section__article">
							<img
								loading="lazy"
								className="article__image"
								src="BookCover2.jpg"
								alt="Kingpin av Leffe Grimwalker"
							/>
							<div className="section__block">
								<div className="section__text">
									<figure className="article__figure">Kingpin</figure>
									<p className="article__author">Leffe Grimwalker</p>
								</div>
								<Button
									aria-label="Read more about Kingpin"
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
