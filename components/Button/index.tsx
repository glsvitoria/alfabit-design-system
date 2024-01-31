export interface ButtonProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	variant?: 'primary' | 'secondary' | 'tertiary'
	children: React.ReactNode
}

export function Button({
	variant = 'primary',
	children,
	className,
	disabled = false,
	...rest
}: ButtonProps) {
	const generalStyle = 'rounded-md px-6 py-2'

	function getVariant(
		variant: ButtonProps['variant'],
		disabled: ButtonProps['disabled']
	) {
		switch (variant) {
			case 'primary':
				return disabled
					? 'bg-disabled text-disabled'
					: 'bg-primary text-white'
			case 'secondary':
				return disabled
					? 'bg-disabled text-disabled'
					: 'bg-quaternary text-primary'
			case 'tertiary':
				return disabled
					? 'bg-transparent text-disabled'
					: 'bg-transparent text-primary'
			default:
				return disabled ? '' : ''
		}
	}

	return (
		<button
			className={`${getVariant(
				variant,
				disabled
			)} ${generalStyle} ${className}`}
			disabled={disabled}
			{...rest}
		>
			{children}
		</button>
	)
}
