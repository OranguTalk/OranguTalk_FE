import React from 'react';
import Header from '../../Components/Chat/Header';
import styled from 'styled-components';
import Chatroom from '../../Components/Chat/Chatroom';

const Container = styled.div`
  width: 100%;
  height: 640px;
  overflow-x: hidden;
  border: 1px solid black;
`;

const Chat = () => {
  return (
    <Container>
      <Header />
      <Chatroom />
    </Container>
  );
};

export default Chat;
