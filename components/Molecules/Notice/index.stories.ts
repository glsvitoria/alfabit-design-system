import { Meta, StoryObj } from '@storybook/react'
import { Notice, NoticeProps } from '.'

const meta = {
	title: 'Design System/Molecules/Notice',
	component: Notice,
	argTypes: {
		children: {
			type: 'string',
		},
		type: {
			options: ['success', 'alert', 'error'],
		},
		message: {
			type: 'string',
		},
		className: {
			type: 'string',
		},
		buttonMessage: {
			type: 'string',
		},
	},
	args: {
		children: 'Click me',
		buttonMessage: 'Action',
	},
} satisfies Meta<NoticeProps>

export default meta

export const Primary: StoryObj<NoticeProps> = {
	args: {},
}

export const NoticeSuccess: StoryObj<NoticeProps> = {
	args: {
		type: 'success',
		message: 'This is a success message!',
	},
}

export const NoticeAlert: StoryObj<NoticeProps> = {
	args: {
		type: 'alert',
		message: 'This is an alert message!',
	},
}

export const NoticeError: StoryObj<NoticeProps> = {
	args: {
		type: 'error',
		message: 'This is an error message!',
	},
}
