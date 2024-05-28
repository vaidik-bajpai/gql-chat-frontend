import { useNavigate } from "react-router-dom"

interface Room {
    id: number
    name: string
}

interface RenderRoomsProps {
    rooms: Room[]
}

export function RenderRooms({rooms}: RenderRoomsProps) {
    const navigate = useNavigate()

    return (
        <div className="flex flex-col gap-4">
            {rooms.map((room) => {
                return (
                    <div className="flex flex-col px-4 py-2 bg-purple-100 rounded hover:bg-yellow-200" key={room.id} onClick={() => navigate(`/chats/${room.id}`)}>
                        <div className="text-purple-500">ID: {room.id}</div>
                        <div className="font-medium text-purple-500 text-xl">{room.name}</div>
                    </div>
                )
            })}
        </div>
    )
}