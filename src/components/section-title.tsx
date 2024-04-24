import type { CSSProperties } from "react";
export default function SectionTitle({
	title,
	style = {},
}: {
	title: string;
	style?: CSSProperties;
}) {
	const titleParts = title.split("");

	return (
		<figure style={style} className="article__figure">
			{titleParts.map((part, idx) => (
				<p key={idx}>{part}</p>
			))}
		</figure>
	);
}
