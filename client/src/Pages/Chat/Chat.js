import React, { useEffect, useState } from 'react';
import Header from '../../Components/Chat/Header';
import styled from 'styled-components';
import Chatroom from '../../Components/Chat/Chatroom';
import Chatinput from '../../Components/Chat/Chatinput';
import socketIOClient from 'socket.io-client';

const Container = styled.div`
  width: 100%;
`;

const Chat = () => {
  // 소켓 설정
  const [currentSocket, setCurrentSocket] = useState();
  useEffect(() => {
    // 서버와 연결
    setCurrentSocket(socketIOClient('localhost:5000'));
    console.log({ currentSocket });
  }, []);

  if (currentSocket) {
    currentSocket.emit('roomCreate', {
      roomname: '떠드는 방',
      participant: ['하유민', '최세환', '밈미'],
    });
  }

  return (
    <Container>
      <Header roomname={'오랑이'} />
      <Chatroom />
      <Chatinput />
    </Container>
  );
};

export default Chat;
