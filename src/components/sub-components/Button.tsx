interface ButtonInterface {
    buttonText: string
    onClick: () => void
    customStyles: string
}

export function Button({buttonText, onClick, customStyles}: ButtonInterface) {
    
    return (
        <button className={"rounded p-2 mt-3 "+ customStyles} onClick={onClick}>{buttonText}</button>
    )
}