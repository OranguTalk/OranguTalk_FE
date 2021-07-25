import React, { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';
import { AllUsersInfo } from '../../Api/User';
import { MainYellow } from '../../Assets/Color/Color';
import { CreateRoomState } from '../../Recoil/CreateRoom';
import { participantState } from '../../Recoil/user';

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
    /* border: 2px solid ${MainYellow}; */
    background-color: ${(props) => props.color};
    padding: 8px;
    border-radius: 12px;
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
  const [RecoilParticipant, setRecoilParticipant] =
    useRecoilState(participantState);
  const [RecoilCreateRoom, setRecoilCreateRoom] =
    useRecoilState(CreateRoomState);
  const [Color, setColor] = useState();
  const [Text, setText] = useState('추가');
  const [Participants, setParticipants] = useState([]);
  const parcitipantAdd = (participant) => {
    // 버튼 효과
    if (Text === '추가') {
      // 추가하는 경우
      // set 으로 중목제거

      // ****** api에 userid 값 들어오면 여기 바꿔주기 ******
      const set = new Set(Participants.concat(participant.user_name));
      // 중복제거 후 배열 형태로 다시 저장
      const newList = Array.from(set);
      setParticipants(newList);
      // recoil 에 저장
      setRecoilParticipant(Participants);
      console.log(Participants);
      setColor('#FF6C6C');
      setText('');
    } else {
      // 삭제하는 경우
      setColor();
      setText('추가');
    }
  };

  const onChange = (e) => {
    setRecoilCreateRoom(e.target.value);
  };
  return (
    <>
      <UserDiv>
        <input placeholder="여기에 채팅방 제목" onChange={onChange} />
        {users.allUserInfo.map((user) => (
          <UserBox color={Color}>
            <ProfileImg src={user.profileImage} alt="profileImage" />
            <p key={user}>{user.user_name}</p>
            <p onClick={() => parcitipantAdd(user)}>{Text}</p>
          </UserBox>
        ))}
        <p>
          추가된 참가자 목록:
          {Participants.map((participant) => (
            <span>{participant}</span>
          ))}
        </p>
      </UserDiv>
    </>
  );
}

export default UserList;
