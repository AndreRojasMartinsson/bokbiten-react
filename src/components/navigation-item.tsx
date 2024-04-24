import type { AnchorHTMLAttributes, ReactNode } from "react";
import cn from "classnames";

interface NavItemProps
	extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "children"> {
	currentPage?: boolean;
	text?: ReactNode;
}

export default function NavigationItem({
	text,
	currentPage = false,
	className,
	...props
}: NavItemProps) {
	return (
		<a
			{...props}
			className={cn(className, "nav__item", currentPage && "nav__item--active")}
		>
			{text}
		</a>
	);
}
