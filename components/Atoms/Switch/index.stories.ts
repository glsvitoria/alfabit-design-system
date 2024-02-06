import { Meta, StoryObj } from '@storybook/react'
import { Switch, SwitchProps } from '.'

const meta = {
	title: 'Design System/Atoms/Switch',
	component: Switch,
	argTypes: {
		defaultEnable: {
			type: 'boolean',
			control: {
				type: 'boolean',
			},
		},
		disabled: {
			type: 'boolean',
			control: {
				type: 'boolean',
			},
		},
		variant: {
			control: {
				type: 'radio',
			},
		},
	},
} satisfies Meta<SwitchProps>

export default meta

export const Primary: StoryObj<SwitchProps> = {
	args: {},
}

export const CommonEnabled: StoryObj<SwitchProps> = {
	args: {
		defaultEnable: true,
		variant: 'common',
	},
}

export const CommonNotEnabled: StoryObj<SwitchProps> = {
	args: {
		defaultEnable: false,
		variant: 'common',
	},
}

export const ContractEnabled: StoryObj<SwitchProps> = {
	args: {
		defaultEnable: true,
		variant: 'contract',
	},
}

export const ContractNotEnabled: StoryObj<SwitchProps> = {
	args: {
		defaultEnable: false,
		variant: 'contract',
	},
}

export const CommonEnabledDisabled: StoryObj<SwitchProps> = {
	args: {
		disabled: true,
		defaultEnable: true,
	},
}

export const ContractEnabledDisabled: StoryObj<SwitchProps> = {
	args: {
		disabled: true,
		defaultEnable: true,
		variant: 'contract',
	},
}

export const ContractNotEnabledDisabled: StoryObj<SwitchProps> = {
	args: {
		defaultEnable: false,
		variant: 'contract',
		disabled: true,
	},
}
