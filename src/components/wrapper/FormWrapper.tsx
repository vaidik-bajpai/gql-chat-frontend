import { ReactNode } from "react"

interface FormWrapperProps {
    children: ReactNode
}

export function FormWrapper({children}: FormWrapperProps) {
    return (
        <div className="mb-2">
            <div className="flex flex-col text-left gap-1.5">
                {children}
            </div>
        </div>
    )
}