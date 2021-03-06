import React from 'react';
import styled from 'styled-components';
import { MainYellow } from '../../../Assets/Color/Color';
import { useRecoilValue } from 'recoil';
import { modeState } from '../../../Recoil/ThemeMode';

const Container = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  margin: 3% auto;
  width: 100%;
`;

const ProfileContent = styled.span`
  display: inline-block;
  max-width: 50%;
  padding: 10px 8px;
  font-size: 1.1rem;
  background-color: ${MainYellow};
  border-radius: 12px;
  margin-right: 5%;
  color: ${(props) => props.textColor2};
`;

const TimeText = styled.div`
  margin-right: 5px;
`;

const My = ({ chat, time }) => {
  const current = useRecoilValue(modeState);
  const textColor2 = current.textColor2;
  return (
    <Container>
      <TimeText>{time}</TimeText>
      <ProfileContent textColor2={textColor2}>{chat}</ProfileContent>
    </Container>
  );
};

export default My;
