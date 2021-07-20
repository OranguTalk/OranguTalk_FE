import React from 'react';
import ChatList from '../../Components/Main/ChatList';
import Profile from '../../Components/Main/Profile';
import Fade from 'react-reveal/Fade';
import styled from 'styled-components';

const MainDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  /* height: 640px; */
`;

function Main() {
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
