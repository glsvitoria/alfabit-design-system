import { Meta, StoryObj } from '@storybook/react'
import { Avatar, AvatarProps } from '.'

const meta = {
	title: 'Design System/Atoms/Avatar',
	component: Avatar,
	argTypes: {
		size: {
			options: ['xs', 'sm', 'md', 'lg'],
		},
		className: {
			type: 'string',
		},
		image: {
			type: 'string',
		},
		description: {
			type: 'string',
		},
	},
	args: {
		size: 'xs',
	},
} satisfies Meta<AvatarProps>

export default meta

export const Primary: StoryObj<AvatarProps> = {
	args: {},
}

export const AvatarImage: StoryObj<AvatarProps> = {
	args: {
		image: 'https://placehold.co/400x400.png',
		description: 'Avatar with image',
		size: 'lg',
	},
}

export const AvatarSmall: StoryObj<AvatarProps> = {
  args: {
    size: "sm",
  },
};

export const AvatarMedium: StoryObj<AvatarProps> = {
  args: {
    size: "md",
  },
};

export const AvatarLarge: StoryObj<AvatarProps> = {
  args: {
    size: "lg",
  },
};

