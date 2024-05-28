import { useQuery } from "@apollo/client";
import { ChatRoomWrapper } from "../wrapper/ChatRoomWrapper";
import { CHATROOMS_QUERY } from "../../Queries";
import { Title } from "../sub-components/Header";
import { RenderRooms } from "../sub-components/RenderRooms";
import { jwtDecode } from "jwt-decode";

function ChatRooms() {
    const token = localStorage.getItem("token")
    if (token) {
        const decoded = jwtDecode(token)
        console.log(decoded)
    }
    const {data, loading, error} = useQuery(CHATROOMS_QUERY)
    if (loading) return <Title title="Loading....."/>
    if (error) return <Title title="Error..." />

    return (
        <ChatRoomWrapper>
            <RenderRooms rooms={data.chatRooms}/>
        </ChatRoomWrapper>
    )
}

export default ChatRooms;