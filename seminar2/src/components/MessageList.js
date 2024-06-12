import React, { useState } from "react";

export function MessagesList() {
    const [messages, setMessages] = useState([
        { id: "1", text: "message 1" },
        { id: "2", text: "message 2" },
        { id: "3", text: "message 3" },
    ]);

    return messages.map((message) => <div key={message.id}>{message.text}</div>);
}

export default MessagesList;