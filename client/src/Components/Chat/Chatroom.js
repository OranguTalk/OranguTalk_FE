import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import My from './Bubble/My';
import Other from './Bubble/Other';
import { ChatList } from '../../Api/User';

const Container = styled.div`
  height: 80vh;
  overflow-y: scroll;
`;

// 채팅 리스트 불러오는 api
const Chatroom = ({ socket, room_id }) => {
  // recoil 값 저장
  // const user = useRecoilValue(userState);
  // 유민 :: recoil 값이 잘 안 받아와지는 것 같아서 일단 localStorage 값으로 해놨습니다.
  const userid = localStorage.userid;
  const [Chats, setChats] = useState([]);
  const [recentChat, setRecentChat] = useState({});
  const [NewChats, setNewChats] = useState([]);

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

  useEffect(() => {
    socket.on('receiveMessage', (data) => {
      setRecentChat({
        user_id: data.userData.user_id,
        user_name: data.userData.user_name,
        send_time: data.userData.createdAt,
        message: data.message,
      });
    });
    console.log(recentChat);
  }, [recentChat, socket]);

  useEffect(() => {
    const result = () => {
      // 원래 채팅 갯수랑 새로운 챗 추가한 길이랑 비교해야함
      // 이게 원래 채팅 길이
      setNewChats(Chats.concat(recentChat));
      const a = NewChats.length;
      console.log(NewChats);
      if (Chats.length > 0 && Chats.concat(recentChat).length > Chats.lenth) {
        console.log(NewChats.length);
      }
      // > 0 && NewChats.concat(recentChat).length;
      console.log(Chats);
      console.log(recentChat);
      // setNewChats(NewChats.concat(recentChat));
      // console.log(NewChats);
      // console.log(news);
      // setNewChats(news);
    };
    result();
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

  return (
    <Container>
      {Chats.length > 0 &&
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
        )}
      {/* {NewChats.length > 0 &&
        NewChats.map(
          (item) =>
            (Number(item.user_id) === Number(userid) && (
              <My
                chat={item.message}
                time={
                  new Date(item.send_time).getHours() +
                  ':' +
                  new Date(item.send_time).getMinutes()
                }
              />
            )) || (
              <Other
                username={item.user_name}
                chat={item.message}
                time={
                  new Date(item.send_time).getHours() +
                  ':' +
                  new Date(item.send_time).getMinutes()
                }
              />
            ),
        )} */}
    </Container>
  );
};

export default Chatroom;
