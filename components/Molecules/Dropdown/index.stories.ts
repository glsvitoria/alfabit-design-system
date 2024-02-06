/* eslint-disable storybook/story-exports */
/* eslint-disable storybook/default-exports */

import type { Meta, StoryObj } from '@storybook/react'
import { Dropdown, DropdownProps } from '.'

const meta: Meta<typeof Dropdown> = {
	title: 'Design System/Molecules/Dropdown',
	component: Dropdown,
	// decorators: [
	// 	(Story) => (
	// 		<div style={{ paddingBottom: '15em', paddingTop: '3em' }}>
	// 			<Story />
	// 		</div>
	// 	),
	// ],
}

export default meta

export const Primary: StoryObj<DropdownProps> = {
	args: {
		list: [],
	},
}

export const Common: StoryObj<DropdownProps> = {
	args: {
		list: ['Option 1', 'Option 2', 'Option 3', 'Option 4', 'Option 5'],
	},
}
