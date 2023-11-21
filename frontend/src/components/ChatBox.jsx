import React, { useRef, useEffect } from "react";
import Message from "./Message";
import TypeIndicator from "./TypeIndicator";

const ChatBox = ({ messages, currentUser, isTyping }) => {
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(scrollToBottom, [messages]);

  return (
    <div >
      <div
        style={{
          height: "300px",
          overflowY: "scroll",
          border: "1px solid #ccc",
          borderRadius: "10px",
          margin: "30px",
          padding: "30px",
        }}
        className=" bg-slate-50"
      >
        {messages.map((msg, index) => (
          <Message key={index} msg={msg} currentUser={currentUser} />
        ))}
        {isTyping && <TypeIndicator />}
        <div ref={messagesEndRef} />
      </div>
    </div>
  );
};

export default ChatBox;