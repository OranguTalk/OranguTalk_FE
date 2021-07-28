import React, { useEffect, useState } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { AllUsersInfo } from '../../Api/User';
import { MainBlack, MainYellow } from '../../Assets/Color/Color';
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
  margin-bottom: 8px;
  & p:nth-last-child(1) {
    font-family: 'Kakao-Bold';
    color: black;
    /* border: 2px solid ${MainYellow}; */
    /* background-color: ${MainBlack}; */
    padding: 8px;
    border-radius: 12px;
    font-size: 1.3rem;
  }
`;

const UserDiv = styled.div`
  width: 200px;
  height: 200px;
  /* background-color: blue; */
  overflow-y: scroll;
  margin: 15px 0;
`;

function UserList({ users }) {
  const [RecoilParticipant, setRecoilParticipant] =
    useRecoilState(participantState);
  const [RecoilCreateRoom, setRecoilCreateRoom] =
    useRecoilState(CreateRoomState);
  const user_id = useRecoilValue(userState).userId;
  const [Participants, setParticipants] = useState([Number(user_id)]);

  // 참가자 추가하는 함수
  const parcitipantAdd = (participant) => {
    console.log(user_id);
    console.log(Participants);
    // 버튼 효과
    if (!RecoilParticipant.includes(participant.user_id)) {
      // 추가하는 경우
      // set 으로 중목제거
      const set = new Set(Participants.concat(participant.user_id));
      // 중복제거 후 배열 형태로 다시 저장
      const newList = Array.from(set);
      setParticipants(newList);
      // recoil 에 저장
      setRecoilParticipant(Participants);
      console.log(Participants);
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
  }, [Participants]);

  return (
    <>
      <UserDiv>
        <input placeholder="여기에 채팅방 제목" onChange={onChange} />
        {users.allUserInfo.map((user) => (
          <UserBox>
            <ProfileImg src={user.profileImage} alt="profileImage" />
            <p key={user}>{user.user_name}</p>
            <p id={user.user_id} onClick={() => parcitipantAdd(user)}>
              추가
            </p>
          </UserBox>
        ))}
        <p>
          추가된 참가자 목록:
          {renderParticipants()}
        </p>
      </UserDiv>
    </>
  );
}

export default UserList;
