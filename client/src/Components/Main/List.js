import React from 'react';
import styled from 'styled-components';
import CircleOrang from '../../Assets/Logo/CircleOrang.svg';

const ChatDiv = styled.div`
  margin: 0 auto;
  display: flex;
  align-items: center;
  width: 300px;
  height: 70px;

  & > div {
    width: 200px;
    margin-left: 15px;
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

const ChatProfileImg = styled.img`
  width: 50px;
  height: 50px;
`;

function List() {
  return (
    <>
      <ChatDiv>
        <ChatProfileImg src={CircleOrang} alt="Orang" />
        <div>
          <p>오랑이</p>
          <p>누나.. 저 누나만 기다렸어요..</p>
        </div>
      </ChatDiv>
      <ChatDiv>
        <ChatProfileImg src={CircleOrang} alt="Orang" />
        <div>
          <p>오랑이</p>
          <p>누나.. 저 누나만 기다렸어요..</p>
        </div>
      </ChatDiv>
    </>
  );
}

export default List;
