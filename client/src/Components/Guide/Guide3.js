import React from 'react';
import styled from 'styled-components';
import phone2 from '../../Assets/Image/phone2.svg';

const Guide3Div = styled.div`
  font-size: 1.8rem;
  display: flex;
  flex-direction: column;
  height: 100vh;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 100%;

  & > p {
    display: flex;
    align-items: center;
    height: 150px;
  }
`;

function Guide3() {
  return (
    <Guide3Div>
      <p>
        대화를 통해 오랑이에게 '오랑이'
        <br />
        사진을 얻을 수 있어요.
      </p>
      <img src={phone2} alt="phone2" />
    </Guide3Div>
  );
}

export default Guide3;
