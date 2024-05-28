import { ReactNode } from "react"

interface ChatRoomWrapperProps {
    children: ReactNode
}

export function ChatRoomWrapper({children}: ChatRoomWrapperProps) {
    return (
        <div className="w-[100%] px-8 py-4 border-yellow-200">
            {children}
        </div>
    )
}