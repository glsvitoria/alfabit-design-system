import { Meta, StoryObj } from '@storybook/react'
import { Link, LinkProps } from '.'

const meta = {
	title: 'Molecules/Link',
	component: Link,
	argTypes: {
		children: {
			type: 'string',
		},
		href: {
			type: 'string',
		},
		disabled: {
			type: 'boolean',
		},
		className: {
			type: 'string',
		},
	},
	args: {
		children: 'Click me',
	},
} satisfies Meta<LinkProps>

export default meta

export const Primary: StoryObj<LinkProps> = {
	args: {
		children: 'Link',
		href: '/',
	},
}

export const Disabled: StoryObj<LinkProps> = {
	args: {
		children: 'Link',
		href: '/',
		disabled: true,
	},
}

export const Violet: StoryObj<LinkProps> = {
	args: {
		children: 'Link',
		href: '/',
		className: 'theme-violet',
	},
}
