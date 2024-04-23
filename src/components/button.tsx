import { cva, VariantProps } from "cva";
import { ButtonHTMLAttributes } from "react";
import cn from "classnames";

export const buttonVariants = cva("button", {
	variants: {
		intent: {
			primary: "button--primary",
			secondary: "button--secondary",
		},
		size: {
			small: "button--small",
			regular: "",
			large: "button--large",
		},
		shape: {
			square: "button--square",
			regular: "",
		},
	},
	defaultVariants: {
		intent: "primary",
		shape: "regular",
		size: "regular",
	},
});

export interface ButtonProps
	extends ButtonHTMLAttributes<HTMLButtonElement>,
		VariantProps<typeof buttonVariants> {}

export default function Button({
	intent,
	shape,
	size,
	children,
	className,
	...props
}: ButtonProps) {
	return (
		<button
			className={cn(buttonVariants({ intent, shape, size }), className)}
			{...props}
		>
			{children}
		</button>
	);
}
