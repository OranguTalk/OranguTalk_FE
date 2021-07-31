import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import My from './Bubble/My';
import Other from './Bubble/Other';
import { ChatList } from '../../Api/User';
import _ from 'lodash';

const Container = styled.div`
  height: 80vh;
  overflow-y: auto;
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
  const scroll = useRef();

  // 스크롤 고정 함수
  const scrollFix = () => {
    // console.log(scroll.current);
    scroll.current.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };
  useEffect(() => {
    const fetchChats = async () => {
      try {
        const chats = (await ChatList(room_id)).data.chatInfo;
        // console.log(chats);
        setChats(chats);
      } catch (error) {
        console.log(error);
      }
    };
    fetchChats();
  }, []);
  // 메세지 보내면 recentChat 에 저장.
  useEffect(() => {
    // setRecentChat({});
    socket.on('receiveMessage', (data) => {
      try {
        setRecentChat({
          user_id: data.userData.user_id,
          user_name: data.userData.user_name,
          send_time: data.userData.createdAt,
          message: data.message,
        });
        console.log('On 실행됨');
        console.log(data);
        console.log(recentChat);
      } catch {
        console.log('Message Receive Error');
      }
    });
  }, []);

  useEffect(() => {
    if (Chats.length > 0 && Chats.concat(recentChat).length > Chats.length) {
      //새로운 채팅의 길이 저장
      const reChats = NewChats.concat(recentChat);
      // console.log(reChats);
      // const delRe = _.uniqBy(reChats, 'id');
      setNewChats(reChats);
      console.log(NewChats);
    } else {
      console.log('........ no Change ........');
    }
  }, [recentChat]);

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
    <div>
      <Container ref={scroll}>
        {/* <button onClick={scrollFix}>클릭하면 아래로</button> */}
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
        {NewChats.length > 0 &&
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
          )}
      </Container>
    </div>
  );
};

export default Chatroom;
