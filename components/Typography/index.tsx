export type TypographyProps = {
	variant?: 'primary' | 'secondary' | 'tertiary'
	size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl'
	children: React.ReactNode
	element?: keyof JSX.IntrinsicElements
} & JSX.IntrinsicElements['p']

const variantClassMap = {
	variant: {
		primary: 'text-gray-primary',
		secondary: 'text-gray-secondary',
		tertiary: 'text-gray-tertiary',
	},
	size: {
		xs: 'text-xs',
		sm: 'text-sm',
		md: 'text-md',
    lg: 'text-lg',
		xl: 'text-xl',
		'2xl': 'text-txl',
		'3xl': 'text-tlg',
		'4xl': 'text-tmd',
	},
}

export function Typography({
	variant = 'primary',
	size = 'md',
	element = 'p',
	children,
	...rest
}: TypographyProps) {
	const Element = element as any
	return (
		<Element
			className={`text-gray-primary text-sm font-normal ${variantClassMap.variant[variant]} ${variantClassMap.size[size]}`}
			{...rest}
		>
			{children}
		</Element>
	)
}
