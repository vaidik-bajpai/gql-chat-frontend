export function BottomText({text, buttonText, handleClick}) {
    return (
        <div className="font-semibold">
            {text} <span><button className="underline " onClick={handleClick}>{buttonText}</button></span>
        </div>
    )
}