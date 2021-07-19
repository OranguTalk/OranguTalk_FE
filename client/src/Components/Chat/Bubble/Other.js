import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Orang from '../../../Assets/Logo/CircleOrang.svg';
import { useRecoilValue } from 'recoil';
import { modeState } from '../../../Recoil/ThemeMode';

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

// 이미지 최대 출력
const ContentImg = styled.img`
  padding: 10px 13px;
  background-color: #e4e4e4;
  border-radius: 12px;
  max-width: 150px;
  max-height: 150px;
`;

const ProfileContent = styled.span`
  padding: 10px 13px;
  font-size: 1.1rem;
  background-color: #e4e4e4;
  border-radius: 12px;
  max-width: 50%;
  color: ${(props) => props.textColor2};
`;

const TimeText = styled.div`
  margin-left: 5px;
`;

const Other = ({ avatar, username, chat, time }) => {
  const [isImage, SetisImage] = useState(false);

  // 이미지 확장자 확인하기
  const IsImageType = () => {
    const result =
      chat.includes('jpg') || chat.includes('jpeg') || chat.includes('png');
    SetisImage(result);
  };
  const current = useRecoilValue(modeState);
  const textColor2 = current.textColor2;

  useEffect(() => {
    IsImageType();
  }, []);

  return (
    <Container>
      <ProfileImg src={Orang} />
      <ChatContainer>
        <UserName>{username}</UserName>
        <ContentContainer>
          {isImage ? (
            <ContentImg src={chat} />
          ) : (
            <ProfileContent textColor2={textColor2}>{chat}</ProfileContent>
          )}
          <TimeText>{time}</TimeText>
        </ContentContainer>
      </ChatContainer>
    </Container>
  );
};

export default Other;
