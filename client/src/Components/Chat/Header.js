import React from 'react';
import styled from 'styled-components';
import { MainBlack } from '../../Assets/Color/Color';
import { ReactComponent as ArrowLeft } from '../../Assets/Image/arrow-left.svg';
const Container = styled.div`
  width: 100%;
  height: 10vh;
  background-color: #ffffff;
  /* padding: 5% 10%; */
  /* {props => props.color === 'light' ? #ffffff : } */
`;

const ContentContainer = styled.div`
  display: flex;
  width: 90%;
  height: 100%;
  align-items: center;
  margin: 0 auto;
`;

const Text = styled.span`
  font-size: 2rem;
  color: ${MainBlack};
  margin-left: 15px;
`;

const Header = ({ roomname }) => {
  return (
    <Container>
      <ContentContainer>
        <ArrowLeft width={25} height={25} />
        <Text>{roomname}</Text>
      </ContentContainer>
    </Container>
  );
};

export default Header;
