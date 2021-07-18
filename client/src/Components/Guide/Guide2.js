import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import phone1 from '../../Assets/Image/phone1.svg';
import Fade from 'react-reveal/Fade';

const Guide2Div = styled.div`
  font-size: 1.8rem;
  display: flex;
  flex-direction: column;
  height: 100%;
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

function Guide2() {
  const [animate, setAnimate] = useState(false);
  useEffect(() => {
    setAnimate(true);
  }, []);
  return (
    <Guide2Div>
      <p>
        여러분을 기다리고 있는 귀여운 <br />
        오랑이와 대화해보세요 !
      </p>
      <Fade bottom when={animate}>
        <img src={phone1} alt="chat1" />
      </Fade>
    </Guide2Div>
  );
}

export default Guide2;
