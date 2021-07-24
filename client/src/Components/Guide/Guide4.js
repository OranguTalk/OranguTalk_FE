import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Guide4Div = styled.div`
  font-size: 2.3rem;
  display: flex;
  flex-direction: column;
  height: 100vh;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 100%;
`;

function Guide4() {
  return (
    <Guide4Div>
      <p>오랑이와 함께</p>
      <p>행복한 시간을 !</p>
      <Link to="/chatmain">
        <p>오랑우톡 시작하기</p>
      </Link>
    </Guide4Div>
  );
}

export default Guide4;
