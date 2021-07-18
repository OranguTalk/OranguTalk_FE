import React from 'react';
import styled from 'styled-components';
import Test from '../../Assets/Image/Test.jpg';
import GreenCircle from '../../Assets/Image/GreenCircle.svg';

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
    color: black;
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
  return (
    <ProfileDiv>
      <TestImg src={Test} alt="test_img" />
      <TextDiv>
        <p>qhahd78</p>
        <p>
          <img src={GreenCircle} alt="circle" />
          <p>github</p>
        </p>
      </TextDiv>
    </ProfileDiv>
  );
}

export default Profile;
