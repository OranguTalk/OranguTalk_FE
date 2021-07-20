import React from 'react';
import styled from 'styled-components';

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
    </Guide4Div>
  );
}

export default Guide4;
