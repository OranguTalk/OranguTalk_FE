import React, { useState } from 'react';
import styled from 'styled-components';
import CircleOrang from '../../Assets/Logo/CircleOrang.svg';
// 테스트 데이터에 쓰일 프로필
import Test from '../../Assets/Image/Test.jpg';
import Mimmi from '../../Assets/Image/Testmimmi.jpg';
import { Link } from 'react-router-dom';
import { MainBlack } from '../../Assets/Color/Color';
const ChatDiv = styled.div`
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 300px;
  height: 70px;

  & > div {
    width: 220px;
    /* margin-left: 15px; */
  }

  & > div > p:nth-child(1) {
    font-family: 'Kakao-Bold';
    font-size: 1.5rem;
    color: black;
  }
  & > div > p:nth-child(2) {
    font-family: 'Kakao-Regular';
    font-size: 1.2rem;
    color: black;
  }
  & > div > p + p {
    margin-top: 8px;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  &:visited {
    text-decoration: none;
    color: ${MainBlack};
  }
  &:link {
    text-decoration: none;
    color: ${MainBlack};
  }
`;

const ChatProfileImg = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

const testData = [
  {
    id: 1,
    profileImg: CircleOrang,
    userName: '오랑이',
    chat: '누나.. 저 누나만 기다렸어요 ..',
  },
  {
    id: 2,
    profileImg: Test,
    userName: '하유민',
    chat: '리액트 뿌셔뿌셔 ~',
  },
  {
    id: 3,
    profileImg: Mimmi,
    userName: '밈미',
    chat: '공주 밥 줘.',
  },
];

function List({ socket }) {
  // console.log(socket);
  const [chatList, setchatList] = useState(testData);
  if (!chatList) {
    return (
      <>
        <p> 아직 채팅이 없네요.채팅을 시작해보세요. </p>
      </>
    );
  } else {
    return (
      <>
        {chatList.map((chatlist) => (
          <StyledLink
            to={{
              pathname: '/chat',
              socket: socket,
            }}
          >
            <ChatDiv>
              <ChatProfileImg src={chatlist.profileImg} alt="Orang" />
              <div>
                <p>{chatlist.userName}</p>
                <p>{chatlist.chat}</p>
              </div>
            </ChatDiv>
          </StyledLink>
        ))}
      </>
    );
  }
}

export default List;
