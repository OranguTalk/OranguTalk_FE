import React from 'react';
import styled from 'styled-components';
import { MainBlack } from '../../Assets/Color/Color';
import { ReactComponent as ArrowLeft } from '../../Assets/Image/arrow-left.svg';
const Container = styled.div`
  width: 100%;
  height: 50px;

  display: flex;
  align-items: center;

  background-color: #ffffff;
  padding: 5% 10%;
  /* {props => props.color === 'light' ? #ffffff : } */
`;

const Text = styled.span`
  font-size: 2rem;
  color: ${MainBlack};
  margin-left: 15px;
`;

const Header = () => {
  return (
    <Container>
      <ArrowLeft width={25} height={25} />
      <Text>오랑이</Text>
    </Container>
  );
};

export default Header;
