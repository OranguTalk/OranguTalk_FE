import React from 'react';
import Button from '../../Components/Login/Button';
import { Link } from 'react-router-dom';
import LoadingLogo from '../../Assets/Logo/LoadingLogo.svg';
import styled from 'styled-components';

const LoginDiv = styled.div`
  font-size: 2.3rem;
  display: flex;
  flex-direction: column;
  height: 100%;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 100%;

  & > div {
    display: flex;
    align-items: center;
    height: 150px;
  }
`;

function Login() {
  return (
    <LoginDiv>
      <img src={LoadingLogo} alt="LoadingLogo" width="200" />
      <div>
        <Link to="/">
          <Button>Github</Button>
        </Link>
      </div>
    </LoginDiv>
  );
}

export default Login;
