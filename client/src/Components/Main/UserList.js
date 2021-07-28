import React, { useEffect, useState } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { MainBrown } from '../../Assets/Color/Color';
import { CreateRoomState } from '../../Recoil/CreateRoom';
import { participantState, userState } from '../../Recoil/user';

const ProfileImg = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
`;

const UserBox = styled.p`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-bottom: 10px;
  & p:nth-last-child(1) {
    font-family: 'Kakao-Bold';
    color: black;
    padding: 8px;
    border-radius: 12px;
    font-size: 1.3rem;
  }
`;

const UserDiv = styled.div`
  width: 250px;
  height: 230px;
  /* background-color: blue; */
  overflow-y: scroll;
  margin: 5px 0 15px 0;
`;

const Input = styled.input`
  width: 200px;
  height: 15px;
  border: none;
  margin: 8% 0;
  padding: 2px;
  font-size: 1.3rem;
  font-family: 'Kakao-Regular';
  &:focus {
    border-bottom: 1px solid ${MainBrown};
  }
`;
function UserList({ users }) {
  const [RecoilParticipant, setRecoilParticipant] =
    useRecoilState(participantState);
  const [RecoilCreateRoom, setRecoilCreateRoom] =
    useRecoilState(CreateRoomState);
  const user_id = useRecoilValue(userState).userId;
  const [Participants, setParticipants] = useState([Number(user_id)]);
  // filtering users 값 설정
  const [FilterUsers, setFilterUsers] = useState([]);

  // 참가자 추가하는 함수
  const parcitipantAdd = (participant) => {
    console.log(user_id);
    // 버튼 효과
    if (!RecoilParticipant.includes(participant.user_id)) {
      // 추가하는 경우
      // set 으로 중목제거
      const set = new Set(Participants.concat(participant.user_id));
      // 중복제거 후 배열 형태로 다시 저장
      const newList = Array.from(set);
      setParticipants(newList);
      // recoil 에 저장
      setRecoilParticipant(newList);
      document.getElementById(participant.user_id).innerText = '선택완료';
      document.getElementById(participant.user_id).style.color = '#FF6C6C';
    }
  };

  const onChange = (e) => {
    setRecoilCreateRoom(e.target.value);
  };

  const renderParticipants = () =>
    Participants.length > 0 &&
    Participants.map((participant) => <span>{participant}</span>);

  useEffect(() => {
    renderParticipants();
    // 로그인된 본인을 제외한 나머지 user를 반환
    const test = users.allUserInfo.filter(
      (user) => user.user_id !== Number(user_id),
    );
    setFilterUsers(test);
    // console.log(FilterUsers);
  }, [Participants]);

  return (
    <>
      <Input
        placeholder="만들 채팅방의 제목을 입력하세요."
        onChange={onChange}
      />
      <UserDiv>
        {FilterUsers.map((user) => (
          <UserBox>
            <ProfileImg src={user.profileImage} alt="profileImage" />
            <p key={user}>{user.user_name}</p>
            <p id={user.user_id} onClick={() => parcitipantAdd(user)}>
              추가
            </p>
          </UserBox>
        ))}
      </UserDiv>
    </>
  );
}

export default UserList;
