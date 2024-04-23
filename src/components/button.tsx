import { ButtonProps, buttonVariants } from '@components/variants/button';
import cn from 'classnames';

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
