import { useNavigate, useSearchParams } from "react-router-dom"

interface Room {
    id: number
    name: string
}

interface RenderRoomsProps {
    rooms: Room[]
}

export function RenderRooms({rooms}: RenderRoomsProps) {
    const navigate = useNavigate()
    let [searchParams, setSearchParams] = useSearchParams();
    const userID = searchParams.get("user_id")

    return (
        <div className="flex flex-col gap-4">
            {rooms.map((room) => {
                return (
                    <div className="flex flex-col px-4 py-2 bg-purple-100 rounded hover:bg-yellow-200" key={room.id} onClick={() => navigate(`/chats/${room.id}?user_id=${userID}`)}>
                        <div className="text-purple-500">ID: {room.id}</div>
                        <div className="font-medium text-purple-500 text-xl">{room.name}</div>
                    </div>
                )
            })}
        </div>
    )
}