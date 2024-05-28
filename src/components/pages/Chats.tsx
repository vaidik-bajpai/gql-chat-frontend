import { gql, useQuery } from "@apollo/client";
import { ChatRoomWrapper } from "../wrapper/ChatRoomWrapper";
import { Title } from "../sub-components/Header";
import { RenderChats } from "../sub-components/RenderChats";
import { useParams} from "react-router-dom";


function Chats() {
    const params = useParams();
    console.log(params.id, typeof params.id);
    
    if (!params.id) {
        return <Title title="Error..." />
    } // Check the value and type of params.id

    const GET_MESSAGES = gql`
    query {
        messages(chatRoomID: ${params.id}) {
            content
            sender {
            firstname
            }
        }
    }
    `   
    const { loading, error, data } = useQuery(GET_MESSAGES);

    if (loading) return <Title title="Loading....."/>
    if (error) return <Title title="Error..." />

    return (
        <ChatRoomWrapper>
            <RenderChats chats={data.messages}/>
        </ChatRoomWrapper>
    )
}

export default Chats;