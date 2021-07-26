import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import CircleOrang from '../../Assets/Logo/CircleOrang.svg';
// 테스트 데이터에 쓰일 프로필
import Test from '../../Assets/Image/Test.jpg';
import Mimmi from '../../Assets/Image/Testmimmi.jpg';
import { Link } from 'react-router-dom';
import { MainBlack, MainBrown } from '../../Assets/Color/Color';
import { GetUserRooms } from '../../Api/User';
import cookie from 'react-cookies';

const ChatDiv = styled.div`
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 300px;
  height: 70px;
  overflow-x: scroll;

  & > div {
    width: 220px;
    /* margin-left: 15px; */
  }

  & > div > p:nth-child(1) {
    font-family: 'Kakao-Bold';
    font-size: 1.5rem;
    color: black;
  }
  & > div > p:nth-child(2) {
    font-family: 'Kakao-Regular';
    font-size: 1.2rem;
    color: black;
  }
  & > div > p + p {
    margin-top: 8px;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  &:visited {
    text-decoration: none;
    color: ${MainBlack};
  }
  &:link {
    text-decoration: none;
    color: ${MainBlack};
  }
`;

const ChatProfileImg = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

const Count = styled.span`
  font-family: 'Kakao-Regular';
  font-size: 0.8rem;
  color: ${MainBrown};
`;

function List({ socket, token }) {
  const [Rooms, setRooms] = useState([]);
  const newkey = cookie.load('accessToken');
  useEffect(() => {
    const fetchRooms = async () => {
      try {
        const rooms = (await GetUserRooms(newkey)).data.data;
        setRooms(rooms);
        // console.log(rooms);
        console.log(Rooms);
      } catch (error) {
        console.log(error);
      }
    };
    fetchRooms();
  }, []);
  if (!Rooms) {
    return (
      <>
        <p> 아직 채팅이 없네요.채팅을 시작해보세요. </p>
      </>
    );
  } else {
    return (
      <>
        {Rooms.map((chatlist) => (
          <StyledLink
            to={{
              pathname: '/chat',
              socket: socket,
            }}
          >
            <ChatDiv>
              <ChatProfileImg src={chatlist.profileImage} alt="Orang" />
              <div>
                <p>
                  {chatlist.room_name}
                  <Count>{chatlist.participant}명</Count>
                </p>
              </div>
            </ChatDiv>
          </StyledLink>
        ))}
      </>
    );
  }
}

export default List;
