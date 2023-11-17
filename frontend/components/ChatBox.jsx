import React from 'react';
import Message from './Message';
import TypeIndicator from './TypeIndicator';

const ChatBox = ({ messages, currentUser, isTyping }) => (
  <div style={{ height: '300px', overflowY: 'scroll', border: '1px solid #ccc', padding: '10px' }}>
    {messages.map((msg, index) => (
      <Message key={index} msg={msg} currentUser={currentUser} />
    ))}
    {isTyping && <TypeIndicator />}
  </div>
);

export default ChatBox;
