import { Box } from '../../../components/Atoms/Box'
import { Typography } from '../../../components/Atoms/Typography'
import {
	XMarkIcon,
	InformationCircleIcon,
	CheckIcon,
	ExclamationTriangleIcon,
} from '@heroicons/react/24/solid'
import { cva, type VariantProps } from 'class-variance-authority'
import { Button } from '../Button'

export interface NoticeProps
	extends VariantProps<typeof noticeVariants>,
		React.HTMLAttributes<HTMLDivElement> {
	type: 'alert' | 'success' | 'error'
	children?: React.ReactNode
	message: string
	onClose?: () => void
	buttonMessage: string
}

const getIcon = (type: NoticeProps['type']) => {
	switch (type) {
		case 'success':
			return <CheckIcon className="w-4 h-4" />
		case 'alert':
			return <InformationCircleIcon className="w-4 h-4" />
		case 'error':
			return <ExclamationTriangleIcon className="w-4 h-4" />
	}
}

const noticeVariants = cva('', {
	variants: {
		type: {
			success: 'text-green-900',
			error: 'text-red-900',
			alert: 'text-yellow-900',
		},
		defaultVariants: {
			variant: 'typeDefault',
		},
	},
})

const buttonVariants = cva('', {
	variants: {
		type: {
			success: 'bg-primary',
			error: 'bg-red-600',
			alert: 'bg-yellow-900',
		},
	},
})

export function Notice({
	children,
	type,
	message,
	className,
	onClose,
	buttonMessage,
	...rest
}: NoticeProps) {
	return (
		<Box
			className={`flex p-4 justify-between items-center ${className}`}
			filledBackground
			rounded
			type={type}
			{...rest}
		>
			<div className="flex gap-2">
				{getIcon(type)}
				<Typography className={`${noticeVariants({ type })} ${className}`}>
					{message}
				</Typography>
			</div>
			<Button className={`${buttonVariants({ type })}`}>
				{buttonMessage}
			</Button>
			{onClose && (
				<XMarkIcon className="w-4 h-4 cursor-pointer" onClick={onClose} />
			)}
		</Box>
	)
}
