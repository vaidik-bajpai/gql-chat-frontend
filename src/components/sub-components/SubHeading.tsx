interface SubHeadingProps {
    text: string
}

export function SubHeading({text}: SubHeadingProps) {
    return (
        <div className="whitespace-break-spaces font-semibold text-gray-400">
            {text}
        </div>
    )
}