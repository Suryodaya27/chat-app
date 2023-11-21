import React from 'react';

const Message = ({ msg, currentUser }) => (
  <div style={{ marginBottom: '10px' }}>
    <strong>{msg.user === currentUser ? 'Me' : 'Stranger'}:</strong> {msg.text}
  </div>
);

export default Message;
