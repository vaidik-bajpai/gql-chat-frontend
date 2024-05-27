import {ReactNode} from "react"

interface WrapperProps {
    children: ReactNode;
}

export function Wrapper({children}: WrapperProps) {
    return (
        <div className="w-80 text-center p-4 rounded shadow-sm shadow-black">
            {children}
        </div>
    )
}