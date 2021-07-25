import React, { useEffect, useState } from 'react';
import Header from '../../Components/Chat/Header';
import styled from 'styled-components';
import Chatroom from '../../Components/Chat/Chatroom';
import Chatinput from '../../Components/Chat/Chatinput';
import socketIOClient from 'socket.io-client';

const Container = styled.div`
  width: 100%;
`;

const Chat = ({ match }) => {
  const [Socket, setSocket] = useState(match.params.socket);
  console.log(Socket);

  return (
    <Container>
      <Header roomname={'오랑이'} />
      <Chatroom />
      <Chatinput />
    </Container>
  );
};

export default Chat;
