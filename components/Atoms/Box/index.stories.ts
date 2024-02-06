import { Meta, StoryObj } from '@storybook/react'
import { Box, BoxProps } from '.'

const meta = {
	title: 'Design System/Atoms/Box',
	component: Box,
	argTypes: {
		type: {
			type: 'string',
			options: ['primary', 'secondary', 'dark', 'alert', 'success', 'error'],
			control: { type: 'select' },
		},
		children: {
			type: 'string',
		},
		rounded: {
			type: 'boolean',
		},
		border: {
			type: 'boolean',
		},
		filledBackground: {
			type: 'boolean',
		},
		className: {
			type: 'string',
		},
	},
} satisfies Meta<BoxProps>

export default meta

export const Default: StoryObj<BoxProps> = {
	args: {
		children: 'This is a default box component',
		filledBackground: true,
		type: 'primary',
	},
}

export const BoxAlert: StoryObj<BoxProps> = {
	args: {
		children: 'This is a alert',
		filledBackground: true,
		rounded: true,
		type: 'alert',
	},
}

export const BoxSuccess: StoryObj<BoxProps> = {
	args: {
		children: 'Operation was successful',
		filledBackground: true,
		rounded: true,
		type: 'success',
	},
}

export const BoxError: StoryObj<BoxProps> = {
	args: {
		children: 'Error occurred while processing your request',
		filledBackground: true,
		rounded: true,
		type: 'error',
	},
}
