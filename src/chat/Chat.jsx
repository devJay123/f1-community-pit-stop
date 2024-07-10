import React, { useEffect, useState, useRef } from 'react';
import { io } from 'socket.io-client';
import { useLocation } from 'react-router-dom';

import './Chat.css';

const ENDPOINT = 'http://localhost:8000';
const socket = io(ENDPOINT);

export default function Chat() {
  const [userId, setUserId] = useState('익명');
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');

  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    setUserId(sessionStorage.getItem('loginUserid'));
    socket.on('chat message', (msg) => {
      setMessages((prevMessages) => [...prevMessages, msg]);
    });

    return () => {
      socket.off('chat message');
    };
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);
  const sendMessage = (e) => {
    e.preventDefault();
    if (inputMessage) {
      const messageWithUser = `${userId}: ${inputMessage}`;
      // 로컬 상태 업데이트
      // setMessages((prevMessages) => [...prevMessages, messageWithUser]);
      // 서버로 메시지 전송
      socket.emit('chat message', messageWithUser);
      setInputMessage('');
    }
  };

  return (
    <div className="chat-app">
      <h2>환영합니다, {userId}님!</h2>
      <div
        className="message-container"
        style={{
          height: '400px',
          overflowY: 'auto',
          border: '1px solid #ccc',
          padding: '10px',
          marginBottom: '10px',
        }}
      >
        {messages.map((msg, index) => (
          <div key={index} className="message">
            {msg}
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>
      <form onSubmit={sendMessage} style={{ display: 'flex' }}>
        <input
          type="text"
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
          placeholder="메시지를 입력하세요..."
          style={{ flex: 1, marginRight: '10px' }}
        />
        <button type="submit">전송</button>
      </form>
    </div>
  );
}
