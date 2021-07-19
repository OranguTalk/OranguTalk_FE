import React from 'react';
import styled from 'styled-components';

const Btn = styled.a`
  width: 200px;
  height: 40px;
  font-size: 1.5rem;
  background-color: black;
  color: white;
  border: none;
`;

export default function Button() {
  return <Btn href="http://localhost:5000/auth/github">Github Login</Btn>;
}
