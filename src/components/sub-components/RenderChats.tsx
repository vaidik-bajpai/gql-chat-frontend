import { useSearchParams } from "react-router-dom";

interface Chat {
    id: number;
    content: string;
    sender: {
        id: number;
        firstname: string;
    };
}

interface RenderChatsProps {
    chats: Chat[];
}

export function RenderChats({ chats }: RenderChatsProps) {
    const [searchParams, setSearchParams] = useSearchParams();
    const userID = searchParams.get("user_id");

    return (
        <div className="flex flex-col gap-2 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100" style={{ maxHeight: "400px" }}>
            {chats.map((message) => {
                const isCurrentUser = message.sender.id === parseInt(userID);

                return (
                    <div
                        key={message.id}
                        className={`flex flex-col px-4 py-2 rounded max-w-xs ${
                            isCurrentUser ? "self-end text-right bg-violet-100" : "self-start bg-indigo-100"
                        }`}
                    >
                        <div className="font-medium text-xs text-purple-500">
                            {isCurrentUser ? "You" : message.sender.firstname}
                        </div>
                        <div className="text-purple-500">{message.content}</div>
                    </div>
                );
            })}
        </div>
    );
}
