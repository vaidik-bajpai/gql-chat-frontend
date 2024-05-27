import { ChangeEvent } from "react"

interface FormInputProps {
    label: string
    inputType: string
    placeholder: string
    id: string
    onChange: (e: ChangeEvent<HTMLInputElement>) => void
}

export function FormInput({label, inputType="text", placeholder, id, onChange}: FormInputProps) {
    return (
        <div className="flex flex-col">
            <label htmlFor={id} className="mb-1 font-medium">{label}</label>
            <input type={inputType} id={id} placeholder={placeholder} className="rounded p-2 border-2 border-gray-200" onChange={onChange} required />
        </div>
    )
}