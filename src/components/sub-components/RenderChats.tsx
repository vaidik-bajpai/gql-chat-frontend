interface Chat {
    id: number
    content: string
    sender: {
        firstname: string
    }
}

interface RenderChatsProps {
    chats: Chat[]
}
export function RenderChats({chats}: RenderChatsProps) {
    return (
        <div className="flex flex-col gap-1">
            {chats.map((message) => {
                return (
                    <div className="flex flex-col px-4 py-2 bg-purple-100 rounded" key={message.id}>
                        <div className="font-medium text-purple-500 text-xl">{message.sender.firstname}</div>
                        <div className="text-purple-500">{message.content}</div>
                    </div>
                )
            })}
        </div>
    )
}