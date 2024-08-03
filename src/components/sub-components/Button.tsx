import { MouseEvent } from "react"

interface EventButtonInterface {
    buttonText: string
    onClick: (e: MouseEvent<HTMLButtonElement>) => void
    customStyles: string
}

export function EventButton({buttonText, onClick, customStyles}: EventButtonInterface) {
    
    return (
        <button className={"rounded p-2 "+ customStyles} onClick={onClick}>{buttonText}</button>
    )
}

interface NavButtonInterface {
    buttonText: string
    onClick: () => void
    customStyles: string
}

export function NavButton({buttonText, onClick, customStyles}: NavButtonInterface) {
    
    return (
        <button className={"rounded p-2 mt-3 "+ customStyles} onClick={onClick}>{buttonText}</button>
    )
}