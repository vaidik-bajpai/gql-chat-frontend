import { ChangeEvent } from "react"

interface FormInputProps {
    label: string
    inputType: string
    placeholder: string
    id: string
    onChange: (e: ChangeEvent<HTMLInputElement>) => void
    error?: string
    value: string
}

export function FormInput({label, inputType="text", placeholder, id, onChange, error, value}: FormInputProps) {
    return (
        <div className="flex flex-col w-[100%]">
            <label htmlFor={id} className="font-medium">{label}</label>
            <input type={inputType} value={value} id={id} placeholder={placeholder} className="rounded p-2 border-2 border-gray-200" onChange={onChange} required />
            <div className="text-red-500">{error}</div>
        </div>
    )
}