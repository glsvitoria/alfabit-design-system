import { Meta, StoryObj } from '@storybook/react'
import { Divider, DividerProps } from '.'

const meta = {
	title: 'Design System/Atoms/Divider',
	component: Divider,
	argTypes: {
		children: {
			type: 'string',
		},
	},
	args: {
		children: 'Hello World',
	},
} satisfies Meta<DividerProps>

export default meta

export const Primary: StoryObj<DividerProps> = {
	args: {},
}

export const Default: StoryObj<DividerProps> = {
	args: {},
}

export const DivisorWithProps: StoryObj<DividerProps> = {
	args: {
		children: 'Hello World',
	},
}

export const ThicknessDivisor: StoryObj<DividerProps> = {
	args: {
		height: 'h-[5px]',
	},
}

export const DivisorDark: StoryObj<DividerProps> = {
	args: {
		bgColor: 'dark',
		height: 'h-1',
	},
}
