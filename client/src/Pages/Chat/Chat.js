import React from 'react';
import Header from '../../Components/Chat/Header';
import styled from 'styled-components';
import Chatroom from '../../Components/Chat/Chatroom';
import Chatinput from '../../Components/Chat/Chatinput';

const Container = styled.div`
  width: 100%;
`;

const Chat = () => {
  return (
    <Container>
      <Header roomname={'오랑이'} />
      <Chatroom />
      <Chatinput />
    </Container>
  );
};

export default Chat;
