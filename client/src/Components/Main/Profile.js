import React from 'react';
import styled from 'styled-components';
import GreenCircle from '../../Assets/Image/GreenCircle.svg';
import { useRecoilValue } from 'recoil';
import { modeState } from '../../Recoil/ThemeMode';
import ToggleBtn from '../Button/ToggleBtn';
import { userState } from '../../Recoil/user';

const ProfileDiv = styled.div`
  margin: 0 auto;
  display: flex;
  align-items: center;
  width: 90%;
  height: 20vh;
  & > div:nth-child(1) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 65px;
    margin-right: 15px;
    height: 80px;
    /* text-align: center; */
  }
`;

const TestImg = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 50%;
`;
// 텍스트 div
const TextDiv = styled.div`
  display: flex;
  flex-direction: column;
  /* 사용자이름 */
  & p:nth-child(1) {
    font-family: 'Kakao-Bold';
    font-size: 1.4rem;
    color: ${(props) => props.textColor};
    margin-bottom: 8px;
  }
  /* 깃허브 로그인 표시  */
  & > p:nth-child(2) {
    display: flex;
  }
  /* 깃허브 글씨 */
  & > p:nth-child(2) p {
    margin-left: 6px;
  }
  & > a:visited {
    color: ${(props) => props.textColor};
    text-decoration: none;
  }
  & > a:link {
    color: ${(props) => props.textColor};
    text-decoration: none;
  }
  & > a:active {
    color: ${(props) => props.textColor};
    text-decoration: none;
  }
`;

// test Profile data
// const testData = {
//   name: 'qhqhd78',
//   url: 'https://github.com/qhahd78',
//   profileImg: Test,
// };

function Profile() {
  // 다크모드 setting
  const current = useRecoilValue(modeState);
  const bgColor = current.bgColor;
  const textColor = current.textColor;
  // recoil 값 저장
  const user = useRecoilValue(userState);
  const user_url = `https://github.com/${user.username}`;
  return (
    <ProfileDiv>
      <div>
        <TestImg src={user.profile} alt="test_img" />
      </div>
      <TextDiv bgColor={bgColor} textColor={textColor}>
        <a href={user_url}>
          <p>{user.username}</p>
        </a>
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
