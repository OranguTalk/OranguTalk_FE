import React, { useEffect, useState } from 'react';
import ChatList from '../../Components/Main/ChatList';
import Profile from '../../Components/Main/Profile';
import Fade from 'react-reveal/Fade';
import styled from 'styled-components';
import cookie from 'react-cookies';
import { useRecoilState } from 'recoil';
import { userState } from '../../Recoil/user';
import socketIOClient from 'socket.io-client';

const MainDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  /* height: 640px; */
`;

function Main() {
  // setrecoil 불러오기
  const [User, setUser] = useRecoilState(userState);
  // 쿠키값 localStorage 저장 후 recoil 에 저장
  const save = () => {
    const user_name = (localStorage.username = cookie.load('username'));
    const user_profile = (localStorage.profile = cookie.load('profile'));
    const user_accessToken = (localStorage.profile =
      cookie.load('accessToken'));
    setUser({
      username: user_name,
      profile: user_profile,
      accessToken: user_accessToken,
    });
  };
  useEffect(() => {
    save();
  }, []);
  return (
    <MainDiv>
      <Profile />
      <Fade bottom>
        <ChatList />
      </Fade>
    </MainDiv>
  );
}

export default Main;
