import { ReactNode } from "react"

interface ChatRoomWrapperProps {
    children: ReactNode
}

export function ChatRoomWrapper({children}: ChatRoomWrapperProps) {
    return (
        <div className="w-[70%] px-8 py-4 border-yellow-200 bg-purple-100 border-2 rounded flex flex-col h-full">
            {children}
        </div>
    )
}