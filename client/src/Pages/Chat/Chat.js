import React, { useEffect } from 'react';
import Header from '../../Components/Chat/Header';
import styled from 'styled-components';
import Chatroom from '../../Components/Chat/Chatroom';
import Chatinput from '../../Components/Chat/Chatinput';
import { useLocation } from 'react-router-dom';

const Container = styled.div`
  width: 100%;
`;

const Chat = ({ match }) => {
  const location = useLocation();
  const socket = location.socket;
  const room_id = Number(match.params.id);
  // socket join
  useEffect(() => {
    try {
      socket.emit('joinRoom', {
        room_id: room_id,
      });
      console.log('Complete');
    } catch {
      console.log('에러');
    }
  });
  // 채팅방 정보, 내역 조회 api 실행
  return (
    <Container>
      <Header room_id={room_id} socket={socket} />
      <Chatroom room_id={room_id} socket={socket} />
      <Chatinput room_id={room_id} socket={socket} />
    </Container>
  );
};

export default Chat;
