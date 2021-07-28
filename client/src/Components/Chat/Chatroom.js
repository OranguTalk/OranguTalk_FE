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
  // 유민 :: recoil 값이 잘 안 받아와지는 것 같아서 일단 localStorage 값으로 해놨습니다.
  const userid = localStorage.userid;
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
        // 유민 :: userid 값이 string 이라서 int 값으로 교체 했어요
        (info.chatInfo.user_id === Number(userid) && (
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
