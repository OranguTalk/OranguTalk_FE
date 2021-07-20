import React from 'react';
import styled from 'styled-components';
import { ReactComponent as ArrowLeft } from '../../Assets/Image/arrow-left.svg';
import { useHistory } from 'react-router-dom';
import ToggleBtn from '../Button/ToggleBtn';
import { useRecoilValue } from 'recoil';
import { modeState } from '../../Recoil/ThemeMode';

const Container = styled.div`
  width: 100%;
  height: 10vh;
  background-color: ${(props) => props.bgColor};
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
  color: ${(props) => props.textColor};
  margin-left: 15px;
`;

const Header = ({ roomname }) => {
  const current = useRecoilValue(modeState);
  const bgColor = current.bgColor;
  const textColor = current.textColor;
  // 뒤로가기 함수
  const history = useHistory();
  const back = () => {
    history.push('/chatmain');
  };
  return (
    <Container bgColor={bgColor}>
      <ContentContainer>
        <ArrowLeft onClick={back} fill={textColor} width={25} height={25} />
        <Text textColor={textColor}>{roomname}</Text>
        <ToggleBtn />
      </ContentContainer>
    </Container>
  );
};

export default Header;
