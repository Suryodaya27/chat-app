import React from 'react';

const Message = ({ msg, currentUser }) => (
  <div
    style={{
      marginBottom: '10px',
      display: 'flex',
      flexDirection: msg.user === currentUser ? 'row-reverse' : 'row',
      alignItems: 'center',
    }}
    className={`p-2 bg-${msg.user === currentUser ? 'primary' : 'primary'} text-inherit`}
  >
    <div
      style={{
        padding: '8px',
        borderRadius: '8px',
        color: msg.user === currentUser ? 'white' : 'black',
        backgroundColor: msg.user === currentUser ? '#007bff' : '#f8f9fa',
      }}
    >
      {msg.text}
    </div>
  </div>
);

export default Message;


