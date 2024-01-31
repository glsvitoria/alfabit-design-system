export interface TextBlockProps extends React.HTMLAttributes<HTMLDivElement> {
	title: string
	textBlock: string
}

export function TextBlock({
	children,
	title,
	textBlock,
	className,
	...rest
}: TextBlockProps) {
	return (
		<div
			className={`flex flex-col justify-center items-start gap-3 py-6 pr-5 pl-8 bg-dark rounded-md ${className}`}
			{...rest}
		>
			<h3 className="text-gray-primary font-extrabold text-xl">{title}</h3>
			<p className="text-gray-primary font-normal text-md">{textBlock}</p>
		</div>
	)
}
