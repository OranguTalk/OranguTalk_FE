import React, { useState } from 'react';
import styled from 'styled-components';
import { MainYellow } from '../../Assets/Color/Color';
import Sendicon from '../../Assets/Image/Sendicon.svg';

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 10vh;
  background-color: #e4e4e4;
`;

const InputBox = styled.input`
  width: 70%;
  font-size: 1.5rem;
  background-color: transparent;
  padding: 0 10%;
  border: 0;
  text-shadow: 0 0 0 black;
  :focus {
    outline: none;
  }
`;
const SendIcon = styled.button`
  width: 30%;
  height: 100%;
  background: url(${Sendicon}) no-repeat center;
  background-color: ${MainYellow};
  border: 0;
  :active {
    transition: 0.3s;
    box-shadow: 1px 2px 3px black;
  }
`;

const Chatinput = () => {
  const [Chat, setChat] = useState('');

  const onChangeChatText = (e) => {
    setChat(e.target.value);
  };

  const handleSendmessage = (e) => {
    setChat('');
  };

  return (
    <Container>
      <InputBox
        value={Chat}
        onChange={onChangeChatText}
        placeholder="대화를 입력해주세요.."
      />
      <SendIcon onClick={handleSendmessage}></SendIcon>
    </Container>
  );
};

export default Chatinput;
