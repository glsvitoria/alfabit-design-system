import classNames from 'classnames'
import { AvatarImage } from './AvatarImage'
import { AvatarIcon } from './AvatarIcon'

export interface AvatarProps extends React.HTMLAttributes<HTMLDivElement> {
	size?: 'xs' | 'sm' | 'md' | 'lg'
	image?: string
	description?: string
}

const avatarSizeMap = {
	xs: 'w-5 h-5',
	sm: 'w-6 h-6',
	md: 'w-8 h-8',
	lg: 'w-9 h-9',
}

export function Avatar({
	size = 'xs',
	className,
	image,
	description = '',
	...rest
}: AvatarProps) {
	const avatarSizeClass = avatarSizeMap[size]

	const avatarComponent = image ? (
		<AvatarImage src={image} altDescription={description} />
	) : (
		<AvatarIcon />
	)

	return (
		<div
			className={classNames(
				'relative rounded-full bg-slate-100 flex items-center justify-center',
				avatarSizeClass,
				className
			)}
			{...rest}
		>
			{avatarComponent}
		</div>
	)
}
