import React from 'react';
import styled from 'styled-components';
import List from './List';

const ChatListDIv = styled.div`
  margin: 0 auto;
  width: 360px;
  height: 530px;
  background-color: #f4f4f4;
  border-radius: 40px 40px 0 0;
  & > p {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 30%;
    height: 70px;
    font-size: 2.2rem;
    color: #3c1d1e;
  }
`;

function ChatList() {
  return (
    <ChatListDIv>
      <p>채팅</p>
      <List />
    </ChatListDIv>
  );
}

export default ChatList;
