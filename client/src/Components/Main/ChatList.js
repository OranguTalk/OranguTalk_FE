import React from 'react';
import styled from 'styled-components';
import List from './List';

import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

import { useRecoilValue } from 'recoil';
import { modeState } from '../../Recoil/ThemeMode';

const ChatListDIv = styled.div`
  margin: 0 auto;
  width: 360px;
  height: 530px;
  background-color: ${(props) => props.bgColor2};
  border-radius: 40px 40px 0 0;
  bottom: 0;
  & > p {
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
    /* font-family: 'Kakao-Bold'; */
  }
  & p:nth-child(2) {
    font-size: 1.2rem;
  }
  & > p + p {
    margin-top: 2vh;
  }
  & :focus {
    outline: none;
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

function ChatList() {
  const current = useRecoilValue(modeState);
  const bgColor2 = current.bgColor2;

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
        <p>채팅</p>
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
            <p>채팅방 생성</p>
            <p>채팅방을 생성해보세요.</p>
          </ModalDiv>
        </Fade>
      </Modal>
      <List />
    </ChatListDIv>
  );
}

export default ChatList;
