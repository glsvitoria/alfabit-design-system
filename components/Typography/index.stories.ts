import { Meta, StoryObj } from '@storybook/react'
import { Typography, TypographyProps } from '.'

const meta = {
	title: 'Atoms/Typography',
	component: Typography,
	argTypes: {
		children: {
			type: 'string',
		},
	},
	args: {
		children: 'Hello World',
	},
} satisfies Meta<TypographyProps>

export default meta

export const Primary: StoryObj<TypographyProps> = {
	args: {},
}
