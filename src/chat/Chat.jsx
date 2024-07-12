import React, { useEffect, useState, useRef } from 'react';
import { io } from 'socket.io-client';
import './Chat.css';

// 배포용
const ENDPOINT =
  'https://port-0-f1-community-pit-stop-server-ly5p232t0b63615b.sel5.cloudtype.app';
// 로컬용
// const ENDPOINT = 'http://localhost:8000';

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
      <div className="chat-header">
        <h2>환영합니다, {userId}님!</h2>
      </div>
      <div className="message-container">
        <span
          style={{ display: 'inline-block', color: 'white', marginTop: '5px' }}
        >
          채팅을 입력하세요 !
        </span>
        {messages.map((msg, index) => (
          <div key={index} className="message">
            <span className="chat-msg">{msg}</span>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>
      <form
        className="chat-form"
        onSubmit={sendMessage}
        style={{ display: 'flex' }}
      >
        <input
          className="chat-input"
          type="text"
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
          placeholder="메시지를 입력하세요..."
          style={{ flex: 1 }}
        />
        <button className="chat-btn" type="submit">
          전송
        </button>
      </form>
    </div>
  );
}
