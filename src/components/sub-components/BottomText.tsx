interface BottomTextButton {
    text: string
    buttonText: string
    handleClick: () => void
}

export function BottomText({text, buttonText, handleClick}: BottomTextButton) {
    return (
        <div className="font-semibold">
            {text} <span><button className="underline " onClick={handleClick}>{buttonText}</button></span>
        </div>
    )
}