import styled from 'styled-components';
import React from 'react';
import { useRecoilValue } from 'recoil';

import { modeState } from '../../Recoil/ThemeMode';
import ToggleBtn from '../../Components/Button/ToggleBtn';
const Div = styled.div`
  height: 500px;
`;

function Test() {
  // 현재 모드 값 가져오기
  const current = useRecoilValue(modeState);
  return (
    <Div>
      안녕하세요? 다크모드 실험 중이에요.
      <ToggleBtn />
      <p>현재 상태는 {current.mode}입니다. </p>
    </Div>
  );
}

export default Test;
