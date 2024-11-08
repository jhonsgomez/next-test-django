"use client";

import MessageForm from "@/components/MessageForm";
import MessageList from "@/components/MessageList";
import { getMessages } from "@/utils/api-chat";
import { useEffect, useState } from "react";

export default function ChatPage() {

    const [messages, setMessages] = useState([])
    const [username, setUsername] = useState("")

    async function fetchMessages() {
        try {
            const response = await getMessages()
            setMessages(response)
        } catch (error) {
            console.log("Error obteniendo mensajes", error)
        }
    }

    useEffect(() => {
        setUsername(localStorage.getItem("chatUsername"));

        fetchMessages();
        const interval = setInterval(fetchMessages, 1000);
        return () => clearInterval(interval)
    }, [])

    return (
        <>
            <div>Chat de {username}</div>
            <MessageList messages={messages}></MessageList>
            <MessageForm onMessageSent={fetchMessages}></MessageForm>
        </>
    )
}
