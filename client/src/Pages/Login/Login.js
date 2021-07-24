import React from 'react';
import Button from '../../Components/Login/Button';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';

const LoginDiv = styled.div`
  font-size: 1.8rem;
  display: flex;
  flex-direction: column;
  height: 100vh;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 100%;

  & > div {
    display: flex;
    align-items: center;
    height: 100px;
  }
  & span {
    display: inline-block;
    font-size: 2.5rem;
    margin-bottom: 10px;
  }
`;

function Login() {
  return (
    <Fade>
      <LoginDiv>
        <p>
          <span>환영합니다! </span>
          <br />
          깃허브 계정으로 로그인해주세요.
        </p>
        <div>
          <Button />
        </div>
      </LoginDiv>
    </Fade>
  );
}

export default Login;
