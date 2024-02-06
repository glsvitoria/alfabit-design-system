import { cva, type VariantProps } from 'class-variance-authority'

const textVariants = cva('text-gray-primary', {
	variants: {
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
			'2xl': 'text-2xl',
			'3xl': 'text-3xl',
			'4xl': 'text-4xl',
		},
		defaultVariants: {
			variant: 'primary',
			size: 'md',
		},
	},
})

export type TypographyProps = VariantProps<typeof textVariants> & {
	children: React.ReactNode
	element?: keyof JSX.IntrinsicElements
} & JSX.IntrinsicElements['p']

export function Typography({
	element = 'p',
	children,
	className,
	...rest
}: TypographyProps) {
	const Element = element as any
	return (
		<Element className={`${textVariants(rest)} ${className}`} {...rest}>
			{children}
		</Element>
	)
}
