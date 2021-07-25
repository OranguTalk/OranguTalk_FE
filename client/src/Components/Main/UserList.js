import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { AllUsersInfo } from '../../Api/User';
import { MainYellow } from '../../Assets/Color/Color';

const ProfileImg = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
`;

const UserBox = styled.p`
  display: flex;
  align-items: center;
  justify-content: space-around;

  & p:nth-last-child(1) {
    font-family: 'Kakao-Bold';
    color: black;
    background-color: ${MainYellow};
    padding: 8px;
    border-radius: 15px;
    font-size: 1.3rem;
  }
`;

const UserDiv = styled.div`
  width: 200px;
  height: 150px;
  /* background-color: blue; */
  overflow-y: scroll;
  margin: 15px 0;
`;

function UserList({ users }) {
  return (
    <>
      <UserDiv>
        {users.allUserInfo.map((user) => (
          <UserBox>
            <ProfileImg src={user.profileImage} alt="profileImage" />
            <p>{user.user_name}</p>
            <p>추가</p>
          </UserBox>
        ))}
      </UserDiv>
    </>
  );
}

export default UserList;
