import { Meta, StoryObj } from '@storybook/react'
import { Typography, TypographyProps } from '.'

const meta = {
	title: 'Design System/Atoms/Typography',
	component: Typography,
	argTypes: {
		children: {
			type: 'string',
		},
		variant: {
			options: ['primary', 'secondary', 'tertiary'],
			control: { type: 'radio' },
		},
		element: {
			options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'span'],
			control: { type: 'select' },
		},
		size: {
			options: ['xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl', '4xl'],
			control: { type: 'radio' },
		},
		className: {
			type: 'string',
		},
	},
	args: {
		size: 'md',
	},
} satisfies Meta<TypographyProps>

export default meta

export const Primary: StoryObj<TypographyProps> = {
	args: {
		children: 'Primary',
	},
}

export const TextHeading1: StoryObj<TypographyProps> = {
	args: {
		children: 'Heading 1',
		element: 'h1',
		size: '3xl',
		className: 'font-extrabold',
	},
}

export const TextHeading2: StoryObj<TypographyProps> = {
	args: {
		children: 'Heading 2',
		element: 'h2',
		size: '2xl',
		className: 'font-extrabold',
	},
}

export const TextHeading3: StoryObj<TypographyProps> = {
	args: {
		children: 'Heading 3',
		element: 'h3',
		size: 'xl',
		className: 'font-extrabold',
	},
}

export const TextParagraph: StoryObj<TypographyProps> = {
	args: {
		children: 'Text',
		element: 'p',
		className: 'text-primary',
	},
}
