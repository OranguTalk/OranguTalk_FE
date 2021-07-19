import React from 'react';
import styled from 'styled-components';
import Test from '../../Assets/Image/Test.jpg';
import GreenCircle from '../../Assets/Image/GreenCircle.svg';
import { useRecoilValue } from 'recoil';
import { modeState } from '../../Recoil/ThemeMode';
import ToggleBtn from '../Button/ToggleBtn';

const ProfileDiv = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 20px;
`;

const TestImg = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 50%;
`;
// 텍스트 div
const TextDiv = styled.div`
  width: 60%;
  padding: 15px;

  /* 사용자이름 */
  & > p:nth-child(1) {
    font-family: 'Kakao-Bold';
    font-size: 1.4rem;
    color: ${(props) => props.textColor};
    margin-bottom: 8px;
  }
  /* 깃허브 로그인 표시  */
  & > p:nth-child(2) {
    display: flex;
    align-items: center;
  }
  /* 깃허브 글씨 */
  & > p:nth-child(2) p {
    margin-left: 5px;
  }
`;

function Profile() {
  const current = useRecoilValue(modeState);
  const bgColor = current.bgColor;
  const textColor = current.textColor;
  return (
    <ProfileDiv>
      <TestImg src={Test} alt="test_img" />
      <TextDiv bgColor={bgColor} textColor={textColor}>
        <p>qhahd78</p>
        <p>
          <img src={GreenCircle} alt="circle" />
          <p>github</p>
        </p>
      </TextDiv>
      <ToggleBtn />
    </ProfileDiv>
  );
}

export default Profile;
