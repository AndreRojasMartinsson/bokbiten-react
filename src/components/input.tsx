import "@styles/components/input.css";

export default function Input() {
	return (
		<div className="input__container focus">
			<input
				type="text"
				name="search-query"
				placeholder="Sök efter någonting här"
				required
				minLength={3}
			/>

			<svg
				xmlns="http://www.w3.org/2000/svg"
				className="lucide lucide-search"
				width="18"
				height="18"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
			>
				<circle cx="11" cy="11" r="8" />
				<path d="m21 21-4.3-4.3" />
				{/* <circle cx="11" cy="11" r="8" />
				<path d="m21 21-4.3-4.3" /> */}
			</svg>
		</div>
	);
}
