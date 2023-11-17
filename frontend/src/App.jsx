import React, { useState, useEffect, useRef } from 'react';
import io from 'socket.io-client';
import ChatBox from '../components/ChatBox';
import InputForm from '../components/InputForm';



const App = () => {
  const [socket, setSocket] = useState(null);
  const [messages, setMessages] = useState([]);
  const [text, setText] = useState('');
  const [currentUser, setCurrentUser] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    const newSocket = io('http://localhost:5000');
    setSocket(newSocket);

    return () => newSocket.close();
  }, []);

  useEffect(() => {
    if (socket) {
      socket.on('connect', () => {
        setCurrentUser(socket.id);
        console.log('Socket connected with ID:', socket.id);
      });

      socket.on('message', (message) => {
        setMessages((prevMessages) => [...prevMessages, message]);
      });

      socket.on('userTyping', (data) => {
        if (data.userId !== currentUser) {
          setIsTyping(true);
          setTimeout(() => {
            setIsTyping(false);
          }, 3000);
        }
      });
    }
  }, [socket]);

  const sendMessage = (event) => {
    event.preventDefault();
    if (text.trim() !== '') {
      socket.emit('message', { text, user: currentUser });
      setText('');
    }
  };

  const handleChange = (e) => {
    setText(e.target.value);
    socket.emit('typing', { userId: currentUser });
  };

  return (
    <div>
      <h1>Chat Application</h1>
      <ChatBox messages={messages} currentUser={currentUser} isTyping={isTyping} />
      <InputForm text={text} handleChange={handleChange} sendMessage={sendMessage} />
    </div>
  );
};

export default App;
