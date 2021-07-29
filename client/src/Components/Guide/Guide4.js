import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { MainBlack, MainBrown, MainYellow } from '../../Assets/Color/Color';

const Guide4Div = styled.div`
  /* font-size: 2.3rem; */
  display: flex;
  flex-direction: column;
  height: 100vh;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 100%;

  & > p {
    font-size: 2.1rem;
    height: 60px;
    /* font-family: 'Kakao-Bold'; */
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
  & > p {
    font-family: 'Kakao-Bold';
    font-size: 1.8rem;
    width: 250px;
    padding: 15px;
    border-radius: 8px;
    color: ${MainBrown};
    background-color: ${MainYellow};
    /* border: 5px solid ${MainYellow}; */
  }
`;

function Guide4() {
  return (
    <Guide4Div>
      <p>오랑이와 함께 행복한 시간을 !</p>
      <StyledLink to="/chatmain">
        <p>시작하기</p>
      </StyledLink>
    </Guide4Div>
  );
}

export default Guide4;
