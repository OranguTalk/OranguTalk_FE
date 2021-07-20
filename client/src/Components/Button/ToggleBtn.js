import React, { useState } from 'react';
import styled from 'styled-components';
import { useRecoilState, useRecoilValue } from 'recoil';
import { LightState, DarkState, modeState } from '../../Recoil/ThemeMode';

const Btn = styled.button`
  width: 38px;
  height: 38px;
  font-size: 1.5rem;
  font-family: 'Kakao-Regular';
  border-radius: 50%;
  border-style: none;
  text-align: center;
  // props 로 받은 컬러 값을 반영한다.
  background-color: ${(props) => props.btnbgColor};
  backface-visibility: 0.8;
  color: ${(props) => props.bgColor};
`;

const BtnDiv = styled.div`
  text-align: right;
  width: 220px;
  font-size: 2rem;
  /* opacity: 0.2; */
`;

function ToggleBtn() {
  // 현재 mode 판별 state
  const [BtnName, setBtnName] = useState('🌙');
  const [Theme, setTheme] = useRecoilState(modeState);
  // lightmode 배열 값 불러오기
  const lightmode = useRecoilValue(LightState);
  // darkmode 배열 값 불러오기
  const darkmode = useRecoilValue(DarkState);
  // 버튼 누를 시 이벤트 처리 현재 테마의 상태를 변경해준다.
  const toggle = () => {
    // light 면 dark 로
    if (Theme === lightmode) {
      setTheme(darkmode);
      setBtnName('🌞');
      // dark 면 light로
    } else {
      setTheme(lightmode);
      setBtnName('🌙');
    }
  };
  const current = useRecoilValue(modeState);
  const bgColor = current.bgColor;
  const btnbgColor = current.btnbgColor;
  const textColor = current.textColor;
  // 현재 어떤 mode 인지 버튼 이름에 출력
  return (
    // <Slide top>
    <BtnDiv>
      <Btn
        onClick={toggle}
        bgColor={bgColor}
        textColor={textColor}
        btnbgColor={btnbgColor}
      >
        {BtnName}
      </Btn>
    </BtnDiv>
    // </Slide>
  );
}

export default ToggleBtn;
