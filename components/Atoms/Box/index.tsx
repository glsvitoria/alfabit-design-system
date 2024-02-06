import classNames from 'classnames'

export interface BoxProps extends React.HTMLAttributes<HTMLDivElement> {
	rounded?: boolean
	border?: boolean
	filledBackground?: boolean
	type?: 'primary' | 'secondary' | 'dark' | 'alert' | 'success' | 'error'
	children: React.ReactNode
}

const boxClassMap = {
	primary: 'bg-primary',
	secondary: 'bg-tertiary',
	dark: 'bg-dark',
	alert: 'bg-yellow-100 text-yellow-800',
	success: 'bg-green-100 text-green-800',
	error: 'bg-error-100 text-error-100',
}

export function Box({
	rounded = false,
	border = false,
	filledBackground = false,
	type = 'primary',
	children,
	className,
	...rest
}: BoxProps) {
	const classes = classNames({
		'rounded-md': rounded,
		'border border-gray-100': border,
		'bg-dark': filledBackground,
		[boxClassMap[type]]: type,
	})
	return (
		<div className={`p-1 ${classes} ${className}`} {...rest}>
			{children}
		</div>
	)
}
