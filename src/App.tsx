import { lazy, Suspense } from 'react';

// Using React's lazy function in order to lazily load React components.
// This allows us to only load React components whenever they are needed
// and allows the build tool to easily optimize and tree-shake the React components.
const ThemeProvider = lazy(async () => import('@components/theme-provider'));
const Header = lazy(async () => import('@components/header'));
const Hero = lazy(async () => import('@components/hero'));
const SectionTitle = lazy(async () => import('@components/section-title'));
const CookieConsent = lazy(async () => import('@components/cookie-consent'));
const Carousel = lazy(async () => import('@components/carousel'));
const FeaturedBooks = lazy(async () => import('@components/featured-books'));

function Main() {
	return (
		<Suspense fallback={<p>Loading...</p>}>
			<Header />
			<Hero />
			<main className='site__main'>
				<div className='site__article'>
					<SectionTitle title='ENDAST HOS' />
					<p
						className='article__subtitle'
						style={{ fontSize: '36px', lineHeight: 1 }}
					>
						BOKBITEN
					</p>
					<Carousel />

					<SectionTitle
						style={{ marginTop: '80px' }}
						title='VÅRA SENASTE'
					/>
					<p className='article__subtitle'>Uppdaterad Dagligen</p>

					<div className='article__content'>
						<FeaturedBooks />
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
