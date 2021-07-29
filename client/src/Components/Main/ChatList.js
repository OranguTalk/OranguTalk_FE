import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import List from './List';

import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

import { useRecoilState, useRecoilValue } from 'recoil';
import { modeState } from '../../Recoil/ThemeMode';
import { MainBlack, MainYellow } from '../../Assets/Color/Color';

import socketIOClient from 'socket.io-client';
import { AllUsersInfo } from '../../Api/User';
import { participantState, userState } from '../../Recoil/user';
import UserList from './UserList';
import { CreateRoomState, RoomNumState } from '../../Recoil/CreateRoom';

const ChatListDIv = styled.div`
  margin: 0 auto;
  width: 360px;
  height: 80vh;
  background-color: ${(props) => props.bgColor2};
  border-radius: 40px 40px 0 0;
  bottom: 0;
  /* overflow: scroll; */
  // 채팅 글씨, + 버튼
  & > p {
    z-index: 100;
    /* position: fixed; */
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 80%;
    height: 70px;
    font-size: 2.2rem;
    color: #3c1d1e;
  }
  & > p p:nth-child(2) {
    font-family: 'Kakao-Bold';
    font-size: 3rem;
  }
`;

// 모달창 커스텀
const ModalDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  & p:nth-child(1) {
    font-size: 2rem;
    color: ${MainBlack};
    /* font-family: 'Kakao-Bold'; */
  }
  & p:nth-child(2) {
    font-size: 1.2rem;
    color: ${MainBlack};
  }
  & > p + p {
    margin-top: 2vh;
  }
  & :focus {
    outline: none;
  }
`;

const CreateBtn = styled.button`
  font-size: 1.8rem;
  font-family: 'Kakao-Bold';
  border: none;
  height: 40px;
  background-color: ${MainYellow};
  width: 250px;
  border-radius: 8px;
`;

const ListDiv = styled.div`
  height: 69vh;
  overflow: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
  /* &::-webkit-scrollbar-thumb {
    height: 10%;
    background-color: ${MainYellow};
    border-radius: 50px;
    background-clip: padding-box;
    border: 5px solid transparent;
  } */
`;

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 360,
  },
  paper: {
    width: 250,
    height: 350,
    backgroundColor: theme.palette.background.paper,
    borderRadius: 8,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

function ChatList() {
  // 현재 로그인된 유저
  const user = useRecoilValue(userState);
  // 참가자 리스트 recoil 에서 불러오기
  const [Participants, setParticipants] = useRecoilState(participantState);
  // 만드는 방 이름 recoil 에서 불러오기
  const roomName = useRecoilValue(CreateRoomState);
  // 채팅방 개수
  const roomNum = useRecoilValue(RoomNumState);
  const token = user.userToken;
  const user_id = user.userId;
  const [Users, setUsers] = useState([]);
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const users = (await AllUsersInfo()).data;
        setUsers(users);
      } catch (error) {
        console.log(error);
      }
    };
    fetchUsers();
  }, []);
  // 서버세팅
  const [currentSocket, setCurrentSocket] = useState();
  useEffect(() => {
    // 서버와 연결
    setCurrentSocket(socketIOClient('localhost:5000'));
  }, []);
  // 방 만드는 함수
  const CreateRoom = () => {
    // 방 제목 없을 시 생성 안 되도록
    if (!roomName) {
      window.alert('방 제목을 정해주세요.');
    } else {
      currentSocket.emit('roomCreate', {
        accessToken: token,
        roomname: roomName,
        participant: Participants,
      });
      setParticipants([]);
      window.location.replace('/chatmain');
    }
    // 생성 후 recoil 초기화 하고 main 으로.
  };

  // 다크모드 설정
  const current = useRecoilValue(modeState);
  const bgColor2 = current.bgColor2;
  const textColor2 = current.textColor2;

  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <ChatListDIv bgColor2={bgColor2}>
      <p>
        <p>
          채팅
          <span> ({roomNum})</span>
        </p>

        <p onClick={handleOpen}>+</p>
      </p>
      <Modal
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <ModalDiv className={classes.paper}>
            {/* <p>채팅방 생성</p> */}
            {/* <p>채팅방을 생성해보세요.</p> */}
            <UserList users={Users} />
            <CreateBtn onClick={CreateRoom}>생성</CreateBtn>
          </ModalDiv>
        </Fade>
      </Modal>
      <ListDiv>
        <List socket={currentSocket} token={token} textColor2={textColor2} />
      </ListDiv>
    </ChatListDIv>
  );
}

export default ChatList;
