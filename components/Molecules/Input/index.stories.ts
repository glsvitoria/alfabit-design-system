import { Meta, StoryObj } from '@storybook/react'
import { Input, InputProps } from '.'

const meta = {
	title: 'Design System/Molecules/Input',
	component: Input,
	argTypes: {
		disabled: {
			type: 'boolean',
		},
		className: {
			type: 'string',
		},
	},
} satisfies Meta<InputProps>

export default meta

export const Primary: StoryObj<InputProps> = {
	args: {
		value: 'Placeholder',
	},
}

export const Multiline: StoryObj<InputProps> = {
	args: {
		value: 'Placeholder',
		multiline: true,
	},
}

export const PrimaryDisabled: StoryObj<InputProps> = {
	args: {
		value: 'Placeholder',
		disabled: true,
	},
}

export const MultilineDisabled: StoryObj<InputProps> = {
	args: {
		value: 'Placeholder',
		disabled: true,
		multiline: true,
	},
}

export const PrimaryLabel: StoryObj<InputProps> = {
	args: {
		value: 'Placeholder',
		label: 'Label',
	},
}

export const MultilineLabel: StoryObj<InputProps> = {
	args: {
		value: 'Placeholder',
		multiline: true,
		label: 'Label',
	},
}

export const PrimaryLabelDisabled: StoryObj<InputProps> = {
	args: {
		value: 'Placeholder',
		disabled: true,
		label: 'Label',
	},
}

export const MultilineLabelDisabled: StoryObj<InputProps> = {
	args: {
		value: 'Placeholder',
		disabled: true,
		multiline: true,
		label: 'Label',
	},
}
