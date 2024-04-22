import '@styles/components/header.css';

export default function Header() {
	return (
		<header className='site-header'>
			<div className='site__banner'>
				<ol className='banner__social'>
					<li className='social__item'>
						<a
							className='button item__link'
							href='#'
						>
							<svg
								className='lucide lucide-instagram'
								fill='none'
								height='16'
								stroke='currentColor'
								strokeLinecap='round'
								strokeLinejoin='round'
								strokeWidth='2.5'
								viewBox='0 0 24 24'
								width='16'
								xmlns='http://www.w3.org/2000/svg'
							>
								<rect
									height='20'
									rx='5'
									ry='5'
									width='20'
									x='2'
									y='2'
								/>
								<path d='M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z' />
								<line
									x1='17.5'
									x2='17.51'
									y1='6.5'
									y2='6.5'
								/>
							</svg>
						</a>
					</li>
					<li className='social__item'>
						<a
							className='button item__link'
							href='#'
						>
							<svg
								className='lucide lucide-twitter'
								fill='none'
								height='16'
								stroke='currentColor'
								strokeLinecap='round'
								strokeLinejoin='round'
								strokeWidth='2.5'
								viewBox='0 0 24 24'
								width='16'
								xmlns='http://www.w3.org/2000/svg'
							>
								<path d='M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z' />
							</svg>
						</a>
					</li>
					<li className='social__item'>
						<a
							className='button item__link'
							href='#'
						>
							<svg
								className='lucide lucide-facebook'
								fill='none'
								height='16'
								stroke='currentColor'
								strokeLinecap='round'
								strokeLinejoin='round'
								strokeWidth='2.5'
								viewBox='0 0 24 24'
								width='16'
								xmlns='http://www.w3.org/2000/svg'
							>
								<path d='M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z' />
							</svg>
						</a>
					</li>
				</ol>
				<h2 className='banner__text'>DELTA I BOKBITSCUPEN FÖR ATT VINNA PENGAR NU!</h2>
				<button className='button banner__theme'>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						width='16'
						height='16'
						viewBox='0 0 24 24'
						fill='none'
						stroke='currentColor'
						strokeWidth='2.5'
						strokeLinecap='round'
						strokeLinejoin='round'
						className='lucide lucide-moon-star'
					>
						<path d='M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z' />
						<path d='M19 3v4' />
						<path d='M21 5h-4' />
					</svg>
				</button>
			</div>
			<div className='header__center'>
				<h1 className='header__logo'>
					Bok<span className='header__logo--alternate'>biten</span>
				</h1>
				<form
					className='search'
					method='get'
				>
					<label className='search__input'>
						<input
							type='text'
							name='search-query'
							placeholder='Sök efter någonting här'
							required
							minLength={3}
						/>

						<svg
							xmlns='http://www.w3.org/2000/svg'
							width='18'
							height='18'
							viewBox='0 0 24 24'
							fill='none'
							stroke='currentColor'
							strokeWidth='2'
							strokeLinecap='round'
							strokeLinejoin='round'
							className='lucide lucide-search'
						>
							<circle
								cx='11'
								cy='11'
								r='8'
							/>
							<path d='m21 21-4.3-4.3' />
						</svg>
					</label>
				</form>
			</div>
			<nav className='header__nav'>
				<div>
					<a
						href='#'
						className='nav__item'
					>
						Hem
					</a>
					<a
						href='#'
						className='nav__item'
					>
						Kategorier
					</a>
					<a
						href='#'
						className='nav__item'
					>
						Populära
					</a>
					<a
						href='#'
						className='nav__item'
					>
						Bokbitscupen
					</a>
					<a
						href='#'
						className='nav__item'
					>
						Kontakta Oss
					</a>
				</div>
				<button>=</button>
			</nav>
		</header>
	);
}
