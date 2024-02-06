import { Meta, StoryObj } from '@storybook/react'
import { Button, ButtonProps } from '.'

const meta = {
	title: 'Design System/Molecules/Button',
	component: Button,
	argTypes: {
		children: {
			type: 'string',
		},
		disabled: {
			type: 'boolean',
		},
		className: {
			type: 'string',
		},
		variant: {
			options: ['primary', 'secondary', 'tertiary'],
		},
    onClick: { action: 'clicked' },
	},
	args: {
		children: 'Click me',
		variant: 'primary',
	},
} satisfies Meta<ButtonProps>

export default meta

export const Primary: StoryObj<ButtonProps> = {
	args: {},
}

export const Disabled: StoryObj<ButtonProps> = {
	args: {
		disabled: true,
	},
}

export const Secondary: StoryObj<ButtonProps> = {
	args: {
		variant: 'secondary',
	},
}

export const SecondaryDisabled: StoryObj<ButtonProps> = {
	args: {
		variant: 'secondary',
		disabled: true,
	},
}

export const Tertiary: StoryObj<ButtonProps> = {
	args: {
		variant: 'tertiary',
	},
}

export const TertiaryDisabled: StoryObj<ButtonProps> = {
	args: {
		variant: 'tertiary',
		disabled: true,
	},
}

export const Violet: StoryObj<ButtonProps> = {
	args: {
		className: 'theme-violet',
	},
}

export const VioletSecondary: StoryObj<ButtonProps> = {
	args: {
    className: 'theme-violet',
    variant: 'secondary',
  },
}

export const VioletTertiary: StoryObj<ButtonProps> = {
	args: {
    className: 'theme-violet',
    variant: 'tertiary',
  },
}
