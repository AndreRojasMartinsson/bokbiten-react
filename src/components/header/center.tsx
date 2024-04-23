export default function HeaderCenter() {
	return (
		<div className='header__center'>
			<h1 className='header__logo'>
				Bok<span className='header__logo--alternate'>biten</span>
			</h1>
			<form
				className='search'
				method='get'
			>
				<div className='search__input'>
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
				</div>
			</form>
		</div>
	);
}
