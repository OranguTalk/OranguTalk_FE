import React from 'react';
import ChatList from '../../Components/Main/ChatList';
import Profile from '../../Components/Main/Profile';
import Fade from 'react-reveal/Fade';

function Main() {
  return (
    <>
      <Profile />
      <Fade bottom>
        <ChatList />
      </Fade>
    </>
  );
}

export default Main;
