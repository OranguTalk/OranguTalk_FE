import React from 'react';
import styled from 'styled-components';
import { GithubLoginAPI } from '../../Api/Social/Social';

const Btn = styled.button`
  width: 200px;
  height: 40px;
  font-size: 1.5rem;
  background-color: black;
  color: white;
  border: none;
`;

export default function Button() {
  const handleGithubLogin = () => {
    window.location.href = 'http://localhost:5000/auth/github';
  };

  return <Btn>Github Login</Btn>;
}
