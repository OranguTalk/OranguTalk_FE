import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { ReactComponent as ArrowLeft } from '../../Assets/Image/arrow-left.svg';
import { useHistory } from 'react-router-dom';
import ToggleBtn from '../Button/ToggleBtn';
import { useRecoilValue } from 'recoil';
import { modeState } from '../../Recoil/ThemeMode';

import { makeStyles } from '@material-ui/core/styles';
import { Fade, Modal } from '@material-ui/core';
import Backdrop from '@material-ui/core/Backdrop';
import Test from '../../Assets/Image/Test.jpg';

import { MainBlack, MainYellow } from '../../Assets/Color/Color';
import { ChatList, GetUserListInRoom } from '../../Api/User';

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
  :active {
    transition: 3ms;
    color: ${MainYellow};
  }
`;

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 360,
  },
  paper: {
    width: 200,
    height: 200,
    backgroundColor: theme.palette.background.paper,
    borderRadius: 8,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

// 모달창 커스텀
const ModalDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${MainBlack};
`;

const ModalHeader = styled.div`
  width: 200px;
  height: 40px;
  text-align: center;
  font-size: 1.5rem;
`;

const ModalBody = styled.div`
  display: flex;
  flex-direction: column;

  width: 150px;
  height: 150px;
  overflow-y: auto;
`;

const ModalItem = styled.div`
  display: flex;
  font-size: 1.4rem;
  margin-bottom: 10px;
  height: 30px;
  line-height: 30px;
  span {
    margin-left: 10px;
  }
`;

const ModalItemimg = styled.img`
  width: 30px;
  height: 30px;
  object-fit: cover;
  border-radius: 10px;
`;

const Header = ({ room_id, room_info }) => {
  const [open, setOpen] = useState(false);
  const [roomUserList, setroomUserList] = useState([]);
  const [roominfo, setroominfo] = useState({});
  const current = useRecoilValue(modeState);
  const bgColor = current.bgColor;
  const textColor = current.textColor;

  const classes = useStyles();

  // 뒤로가기 함수
  const history = useHistory();
  const back = () => {
    history.push('/chatmain');
  };

  const handleOpenParticipantList = () => {
    setOpen(true);
  };

  const handleCloseParticipantList = () => {
    setOpen(false);
  };
  // 채팅방 인원 리스트 api 실행
  useEffect(() => {
    const fetchChat = async () => {
      try {
        const chat = (await GetUserListInRoom(room_id)).data;
        setroomUserList(chat);
        console.log(chat);
      } catch (error) {
        console.log(error);
      }
    };
    const fetchChatList = async () => {
      try {
        //const chatList = (await ChatList(room_id)).data;
        const chatList = (await ChatList(room_id)).data.roomInfo;
        // console.log(chatList);
        setroominfo(chatList);
      } catch (error) {
        console.log(error);
      }
    };
    fetchChatList();
    fetchChat();
  }, []);

  return (
    <Container bgColor={bgColor}>
      <ContentContainer>
        <ArrowLeft onClick={back} fill={textColor} width={25} height={25} />
        <Text onClick={handleOpenParticipantList} textColor={textColor}>
          {roominfo.room_name}
        </Text>
        <ToggleBtn />
      </ContentContainer>
      <Modal
        className={classes.modal}
        open={open}
        onClose={handleCloseParticipantList}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        {/* Modal 창 */}
        <Fade in={open}>
          <ModalDiv className={classes.paper}>
            <ModalHeader>채팅방 인원 리스트</ModalHeader>
            <ModalBody>
              {/* 유저 리스트 */}
              {roomUserList.map((userlist) => (
                <ModalItem>
                  <ModalItemimg src={userlist.profileImage} />
                  <span>{userlist.user_name}</span>
                </ModalItem>
              ))}
            </ModalBody>
          </ModalDiv>
        </Fade>
      </Modal>
    </Container>
  );
};

export default Header;
