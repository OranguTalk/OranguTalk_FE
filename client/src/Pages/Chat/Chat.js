import React, { useEffect, useState } from 'react';
import Header from '../../Components/Chat/Header';
import styled from 'styled-components';
import Chatroom from '../../Components/Chat/Chatroom';
import Chatinput from '../../Components/Chat/Chatinput';
import { useLocation } from 'react-router-dom';
import { ChatList, GetUserListInRoom } from '../../Api/User';

const Container = styled.div`
  width: 100%;
`;

const Chat = ({ match }) => {
  const location = useLocation();
  console.log(location.socket);
  const [ChatListInfo, setChatListInfo] = useState({});
  const room_id = match.params.id;
  // 채팅방 정보, 내역 조회 api 실행
  useEffect(() => {
    const fetchChatList = async () => {
      try {
        const chatList = (await ChatList(room_id)).data;
        console.log(chatList);
        setTimeout(() => {
          setChatListInfo(chatList);
        }, 1000);
        console.log(ChatListInfo);
      } catch (error) {
        console.log(error);
      }
    };
    fetchChatList();
  }, []);
  return (
    <Container>
      <Header room_id={room_id} room_info={ChatListInfo} />
      <Chatroom />
      <Chatinput />
    </Container>
  );
};

export default Chat;
