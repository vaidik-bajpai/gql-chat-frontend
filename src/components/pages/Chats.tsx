import { useMutation, useQuery, useSubscription } from "@apollo/client";
import { GET_MESSAGES, MESSAGE_POSTED_SUBSCRIPTION, POST_MESSAGE } from "../../Queries";
import { ChatRoomWrapper } from "../wrapper/ChatRoomWrapper";
import { FormInput } from "../sub-components/FormInput";
import { EventButton } from "../sub-components/Button";
import { Title } from "../sub-components/Header";
import { RenderChats } from "../sub-components/RenderChats";
import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect, ChangeEvent, MouseEvent } from "react";

interface Chat {
    id: number;
    content: string;
    sender: {
        firstname: string;
    };
}

function Chats() {
    const params = useParams();
    const [messages, setMessages] = useState<Chat[]>([]);
    const [userMessage, setUserMessage] = useState<string>("");
    const navigate = useNavigate()

    const [postMessage] = useMutation(POST_MESSAGE, {
        context: {
            headers: {
                Authorization: localStorage.getItem("token") || "",
            },
        }
    })

    if (!params.id) {
        return <Title title="Error..." />;
    }

    const { loading, error, data } = useQuery(GET_MESSAGES, {
        variables: { chatRoomID: params.id },
    });

    const { data: subscriptionData } = useSubscription(MESSAGE_POSTED_SUBSCRIPTION, {
        variables: { chatRoomID: params.id },
    });

    useEffect(() => {
        if (data && data.messages != null) {
            setMessages(data.messages);
        }
    }, [data]);

    useEffect(() => {
        if (subscriptionData && subscriptionData.messagePosted != null) {
            setMessages((prevMessages) => [
                ...prevMessages,
                subscriptionData.messagePosted,
            ]);
        }
    }, [subscriptionData]);

    function handleChange(e: ChangeEvent<HTMLInputElement>) {
        setUserMessage(e.target.value);
    }

    async function handlePost(e: MouseEvent<HTMLButtonElement>) {
        e.preventDefault();
    
        const content = userMessage;
    
        console.log(params.id, typeof params.id)
        console.log(content, typeof content)
    
        let mutationData;
        try {
            const { data } = await postMessage({
                variables: {
                    chatRoomID: params.id,
                    content: userMessage,
                },
                context: {
                    headers: {
                        Authorization: sessionStorage.getItem("token") || "",
                    },
                },
            });
            mutationData = data;
            console.log("hello")
            console.log(mutationData, "alsnlansdlaknd")
            if (mutationData) {
                setUserMessage("");
            }
        } catch (error) {
            console.error("Failed to post message:", error);
            navigate("/login")
        }
    }
    

    if (loading) return <Title title="Loading....." />;
    if (error) return <Title title="Error..." />;

    return (
        <ChatRoomWrapper>
            {messages.length === 0 ? (
                <Title title="No chats to render" />
            ) : (
                <RenderChats chats={messages} />
            )}
            <div className="flex-1"></div>
            <div className="flex justify-center items-center mt-2">
                <div className="w-full">
                    <FormInput label="" placeholder="message...." id="content" onChange={(e) => { handleChange(e) }} value={userMessage} inputType="text"/>
                </div>
                <div className="flex-shrink-0">
                    <EventButton customStyles="text-purple-500 border-2 border-yellow-200 bg-purple-200 m-0" buttonText="POST" onClick={(e) => handlePost(e)}/>
                </div>
            </div>
        </ChatRoomWrapper>

    );
}

export default Chats;
