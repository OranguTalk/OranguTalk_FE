import React, { useState } from 'react';
import styled from 'styled-components';
import { useRecoilState, useRecoilValue } from 'recoil';
import { LightState, DarkState, modeState } from '../../Recoil/ThemeMode';

const Btn = styled.button`
  width: 95px;
  height: 40px;
  font-size: 1.5rem;
  font-family: 'Kakao-Regular';
  border-radius: 20px;
  border-style: none;
  text-align: center;
  // props 로 받은 컬러 값을 반영한다.
  background-color: ${(props) => props.btnbgColor};
  color: ${(props) => props.bgColor};
  position: absolute;
  top: 50px;
  right: 30px;
`;

function ToggleBtn() {
  // 현재 mode 판별 state
  const [BtnName, setBtnName] = useState('🌝 DARK');
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
      setBtnName('🌞 LIGHT');
      // dark 면 light로
    } else {
      setTheme(lightmode);
      setBtnName('🌝 DARK');
    }
  };
  const current = useRecoilValue(modeState);
  const bgColor = current.bgColor;
  const btnbgColor = current.btnbgColor;
  const textColor = current.textColor;
  // 현재 어떤 mode 인지 버튼 이름에 출력
  return (
    <Btn
      onClick={toggle}
      bgColor={bgColor}
      textColor={textColor}
      btnbgColor={btnbgColor}
    >
      {BtnName}
    </Btn>
  );
}

export default ToggleBtn;
