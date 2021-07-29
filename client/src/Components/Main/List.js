import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { MainBlack, MainBrown } from '../../Assets/Color/Color';
import { GetUserRooms } from '../../Api/User';
import cookie from 'react-cookies';
import { useRecoilState } from 'recoil';
import { RoomNumState } from '../../Recoil/CreateRoom';

const ChatDiv = styled.div`
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 300px;
  height: 70px;
  /* overflow-y: scroll; */

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
  font-size: 0.9rem;
  color: ${MainBrown};
  margin-left: 8px;
`;

const NoneInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50vh;
  font-family: 'Kakao-Regular';
  font-size: 1.4rem;
  color: ${(props) => props.textColor2};
`;

function List({ socket, textColor2 }) {
  const [Rooms, setRooms] = useState([]);
  const [Num, setNum] = useRecoilState(RoomNumState);
  const newkey = cookie.load('accessToken');
  useEffect(() => {
    const fetchRooms = async () => {
      try {
        const rooms = (await GetUserRooms(newkey)).data.data;
        setRooms(rooms);
        setNum(rooms.length);
        console.log(rooms);
      } catch (error) {
        console.log(error);
      }
    };
    fetchRooms();
  }, []);
  if (Rooms.length === 0) {
    // if (!Rooms) {
    return (
      <>
        <NoneInfo textColor2={textColor2}>
          아직 채팅이 없네요. 채팅을 시작해보세요.
        </NoneInfo>
      </>
    );
  } else {
    return (
      <>
        {Rooms.map((chatlist) => (
          <StyledLink
            to={{
              pathname: `/chat/${chatlist.id}`,
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
