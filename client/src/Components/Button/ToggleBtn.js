import React, { useState } from 'react';
import styled from 'styled-components';
import { useRecoilState, useRecoilValue } from 'recoil';
import { LightState, DarkState, modeState } from '../../Recoil/ThemeMode';

const Btn = styled.button`
  width: 100px;
  background-color: white;
  position: fixed;
  bottom: 100px;
  right: 100px;
`;

function ToggleBtn() {
  // 현재 mode 판별 state
  const [BtnName, setBtnName] = useState('Light');
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
      setBtnName('Light');
      // dark 면 light로
    } else {
      setTheme(lightmode);
      setBtnName('Dark');
    }
  };
  // 현재 어떤 mode 인지 버튼 이름에 출력
  return <Btn onClick={toggle}>{BtnName} Mode</Btn>;
}

export default ToggleBtn;
