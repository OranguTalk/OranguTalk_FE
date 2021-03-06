import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import LoadingLogo from '../../Assets/Logo/LoadingLogo.svg';
import { useHistory } from 'react-router';
import Flip from 'react-reveal/Flip';

const LogoPageDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

function LogoPage() {
  // user 값 받아오기
  const [user, setUser] = useState(localStorage.username);
  // push 사용 위해 usehistory 불러오기
  const history = useHistory();
  // 1초 뒤 채팅 메인으로 넘어가는 함수 작성
  const timeout = () => {
    // 유저 값 들어와있으면 chatmain 으로 이동
    // 없으면 chatmain 으로 이동
    setTimeout(() => {
      if (user) {
        history.push('/login');
      } else {
        history.push('/chatmain');
      }
    }, 2000);
  };
  // 컴포넌트가 화면에 다 나타나면 timeout 함수 실행
  useEffect(() => {
    timeout();
    return () => {
      // clear 해줌
      clearTimeout(timeout);
    };
  });
  return (
    <LogoPageDiv>
      <Flip bottom>
        <img src={LoadingLogo} alt="Logo" width={200} height={200} />
      </Flip>
    </LogoPageDiv>
  );
}

export default LogoPage;
