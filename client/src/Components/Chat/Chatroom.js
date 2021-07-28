import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import My from './Bubble/My';
import Other from './Bubble/Other';
import { ChatList } from '../../Api/User';
import { useRecoilValue } from 'recoil';
import { userState } from '../../Recoil/user';

const Container = styled.div`
  height: 80vh;
  overflow-y: scroll;
`;

// 채팅 리스트 불러오는 api
const Chatroom = ({ room_id }) => {
  // recoil 값 저장
  const user = useRecoilValue(userState);
  const [Chats, setChats] = useState([]);
  useEffect(() => {
    const fetchChats = async () => {
      try {
        const chats = (await ChatList(room_id)).data.chatInfo;
        console.log(chats);
        setChats(chats);
      } catch (error) {
        console.log(error);
      }
    };
    fetchChats();
  }, []);

  const renderChatList = () =>
    Chats.length > 0 &&
    Chats.map(
      (info) =>
        (info.chatInfo.user_id === user.userId && (
          <My
            chat={info.chatInfo.message}
            time={
              new Date(info.chatInfo.send_time).getHours() +
              ':' +
              new Date(info.chatInfo.send_time).getMinutes()
            }
          />
        )) || (
          <Other
            username={info.userInfo.user_name}
            chat={info.chatInfo.message}
            time={
              new Date(info.chatInfo.send_time).getHours() +
              ':' +
              new Date(info.chatInfo.send_time).getMinutes()
            }
          />
        ),
    );

  return <Container>{renderChatList()}</Container>;
};

export default Chatroom;
