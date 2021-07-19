import React from 'react';
import styled from 'styled-components';
import CircleOrang from '../../Assets/Logo/CircleOrang.svg';
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
  }
`;

const ChatProfileImg = styled.img`
  width: 50px;
  height: 50px;
`;

function List() {
  return (
    <>
      <StyledLink to="/chat">
        <ChatDiv>
          <ChatProfileImg src={CircleOrang} alt="Orang" />
          <div>
            <p>오랑이</p>
            <p>누나.. 저 누나만 기다렸어요..</p>
          </div>
        </ChatDiv>
      </StyledLink>
      <StyledLink to="/chat">
        <ChatDiv>
          <ChatProfileImg src={CircleOrang} alt="Orang" />
          <div>
            <p>오랑이</p>
            <p>누나.. 저 누나만 기다렸어요..</p>
          </div>
        </ChatDiv>
      </StyledLink>
    </>
  );
}

export default List;
