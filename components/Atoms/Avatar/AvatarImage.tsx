import Image from 'next/image'

interface AvatarImageProps {
	src: string
	altDescription: string | ''
}

export function AvatarImage({ src, altDescription }: AvatarImageProps) {
	return (
		<div>
			<Image
				src={src}
				alt={altDescription}
				className="rounded-full"
				width={100}
				height={100}
			/>
		</div>
	)
}
