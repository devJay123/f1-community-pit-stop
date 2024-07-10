import React, { useEffect, useState } from 'react';
import { io } from 'socket.io-client';
import { useLocation } from 'react-router-dom';

import './Chat.css';
import InfoBar from './InfoBar/InfoBar';
import Messages from './Messages/Messages';
import Input from './Input/Input';
import TextContainer from './TextContainer/TextContainer';

const ENDPOINT = 'http://localhost:8000';

export default function Chat() {
  const [room, setRoom] = useState('Chatting');
  const [users, setUsers] = useState('');
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  const location = useLocation();
  const userid = location.state.userid;
  // setUser(userid);

  const socket = io(ENDPOINT);

  useEffect(() => {
    socket.emit('join', { userid, room }, (err) => {
      if (err) {
        alert(err);
      }
    });

    return () => {
      socket.emit('quit');
      socket.off();
    };
  }, [userid]);

  useEffect(() => {
    socket.on('message', (message) => {
      setMessages([...messages, message]);
    });
    socket.on('roomData', ({ users }) => {
      setUsers(users);
    });
  }, []);

  const sendMessage = (event) => {
    event.preventDefault();
    if (message) {
      socket.emit('sendMessage', message, () => setMessage(''));
    }
  };

  return (
    <div className="outerContainer">
      <div className="chat_container">
        <InfoBar room={room} />
        <Messages messages={messages} name={userid} />
        <Input
          message={message}
          setMessage={setMessage}
          sendMessage={sendMessage}
        />
      </div>
      <TextContainer users={users} />
    </div>
  );
}
