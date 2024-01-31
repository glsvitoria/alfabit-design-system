export type InputProps = {
	label?: string
	multiline?: boolean
} & (
	| React.InputHTMLAttributes<HTMLInputElement>
	| React.TextareaHTMLAttributes<HTMLTextAreaElement>
)

function InputOrTextArea({ multiline = false, ...props }: InputProps) {
	if (multiline) {
		return (
			<textarea
				{...(props as React.TextareaHTMLAttributes<HTMLTextAreaElement>)}
			/>
		)
	}

	return <input {...(props as React.InputHTMLAttributes<HTMLInputElement>)} />
}

export function Input({
	multiline = false,
	className,
	label,
	...props
}: InputProps) {
	return (
		<div className="relative">
			{label && (
				<label className="absolute pt-1 pl-3 text-xs">{label}</label>
			)}
			<InputOrTextArea
				className={`
        bg-dark text-gray-primary rounded-md p-3
        disabled:bg-disabled disabled:border-2 disabled:border-disabled
        ${label && 'pt-6'}
        ${className}`}
				multiline={multiline}
				{...props}
			/>
		</div>
	)
}
