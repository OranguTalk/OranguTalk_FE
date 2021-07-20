import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';

const Guide1Div = styled.div`
  font-size: 2.3rem;
  display: flex;
  flex-direction: column;
  height: 100vh;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 100%;

  & > p + p {
    padding-top: 10px;
  }
`;

function Guide1() {
  return (
    <Guide1Div>
      {/* <Fade bottom when={animate}> */}
      <p>오랑우톡에 오신 것을</p>
      <p>환영합니다 !</p>
      {/* </Fade> */}
    </Guide1Div>
  );
}

export default Guide1;
