import { lazy, Suspense } from "react";

const ThemeProvider = lazy(async () => import("@components/theme-provider"));
const Header = lazy(async () => import("@components/header"));
const Hero = lazy(async () => import("@components/hero"));
const SectionTitle = lazy(async () => import("@components/section-title"));
const CookieConsent = lazy(async () => import("@components/cookie-consent"));
const Carousel = lazy(async () => import("@components/carousel"));
const Button = lazy(async () => import("@components/button"));

const books = [
	{
		title: "Tio Dagar",
		author: "Leffe Grimwalker",
		image: "/BookCover2.jpg",
	},
	{
		title: "Kingpin",
		author: "Leffe Grimwalker",
		image: "/BookCover1.jpg",
	},
];

function Main() {
	const newBooks = [...books, ...books, ...books, ...books];

	return (
		<Suspense fallback={<p>Loading...</p>}>
			<Header />
			<Hero />
			<main className="site__main">
				<div className="site__article">
					<SectionTitle title="ENDAST HOS" />
					<p
						className="article__subtitle"
						style={{ fontSize: "36px", lineHeight: 1 }}
					>
						BOKBITEN
					</p>
					<Carousel />

					<SectionTitle style={{ marginTop: "80px" }} title="VÅRA SENASTE" />
					<p className="article__subtitle">Uppdaterad Dagligen</p>

					<div className="article__content">
						{newBooks.map(({ author, image, title }, idx) => (
							<div
								key={idx}
								className="section__article"
								style={{ backgroundImage: `url(${image})` }}
							>
								<div className="image__blur"></div>

								<div className="section__block">
									<div className="section__text">
										<figure className="article__figure">{title}</figure>
										<p className="article__author">{author}</p>
									</div>
									<Button
										aria-label={`Read more about ${title} by ${author}`}
										intent="secondary"
										size="regular"
										className="article__button"
									>
										Läs Nu
									</Button>
								</div>
							</div>
						))}
						{/* 
						<div className="section__article">
							<div className="image__blur"></div>

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
								width={430}
								loading="lazy"
								className="article__image"
								src="BookCover1.jpg"
								alt="Tio Dagar av Leffe Grimwalker"
							/>
						</div>
						<div className="section__article">
							<div className="image__blur"></div>

							<img
								loading="lazy"
								className="article__image"
								width={430}
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
							<div className="image__blur"></div>

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
								width={430}
								src="BookCover1.jpg"
								alt="Tio Dagar av Leffe Grimwalker"
							/>
						</div>
						<div className="section__article">
							<div className="image__blur"></div>
							<img
								loading="lazy"
								className="article__image"
								width={430}
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
							<div className="image__blur"></div>

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
								width={430}
								src="BookCover1.jpg"
								alt="Tio Dagar av Leffe Grimwalker"
							/>
						</div>
						<div
							className="section__article"
							style={{ backgroundImage: "url(/BookCover2.jpg)" }}
						>
							<div className="image__blur"></div>

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
							<div className="image__blur"></div>

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
								width={430}
								className="article__image"
								src="BookCover1.jpg"
								alt="Tio Dagar av Leffe Grimwalker"
							/>
						</div>
						<div className="section__article">
							<div className="image__blur"></div>
							<img
								loading="lazy"
								className="article__image"
								width={430}
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
						</div> */}
					</div>
				</div>
			</main>
			<CookieConsent />
		</Suspense>
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
