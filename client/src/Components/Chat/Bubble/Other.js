import React from 'react';
import styled from 'styled-components';
import Orang from '../../../Assets/Logo/CircleOrang.svg';
const Container = styled.div`
  display: flex;
  margin: 3% 0 3% 5%;
`;

const ChatContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const UserName = styled.span`
  font-family: 'Kakao-Regular';
  font-size: 1rem;
  margin-bottom: 5px;
`;

const ContentContainer = styled.div`
  display: flex;
  align-items: flex-end;
  width: 100%;
`;

const ProfileImg = styled.img`
  width: 50px;
  height: 50px;
  margin-right: 10px;
  object-fit: cover;
  border-radius: 25px;
`;

const ProfileContent = styled.span`
  padding: 10px 13px;
  font-size: 1.1rem;
  background-color: #f4f4f4;
  border-radius: 12px;
`;

const TimeText = styled.div`
  margin-left: 5px;
`;

const Other = ({ avatar, username, chat, time }) => {
  return (
    <Container>
      <ProfileImg src={Orang} />
      <ChatContainer>
        <UserName>{username}</UserName>
        <ContentContainer>
          <ProfileContent>{chat}</ProfileContent>
          <TimeText>{time}</TimeText>
        </ContentContainer>
      </ChatContainer>
    </Container>
  );
};

export default Other;
