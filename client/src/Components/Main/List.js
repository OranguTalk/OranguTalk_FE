import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { MainBlack, MainBrown } from '../../Assets/Color/Color';
import { GetUserRooms } from '../../Api/User';
import cookie from 'react-cookies';
import { useRecoilState } from 'recoil';
import { RoomNumState } from '../../Recoil/CreateRoom';

// 채팅방 박스
const ChatDiv = styled.div`
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 300px;
  height: 80px;
  overflow: hidden;
  position: relative;
  // 사진 div
  & > div:nth-child(1) {
    display: flex;
    flex-wrap: wrap-reverse;
    align-items: center;
    justify-content: center;
    width: 80px;
    height: 50px;
    /* overflow: hidden; */
    text-overflow: ellipsis;
  }
  & > div:nth-child(2) {
    width: 225px;
    padding: 10px;
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
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: 2px solid ${(props) => props.bgColor2};
  /* position: relative; */
  margin: -4px;
  &:nth-of-type(2n-1) {
    z-index: 100;
  }
`;

const Count = styled.span`
  font-family: 'Kakao-Regular';
  font-size: 1.4rem;
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

const Message = styled.p`
  font-size: 1.1.rem;
`;

function List({ socket, textColor2, bgColor2 }) {
  const [Rooms, setRooms] = useState([]);
  const [Num, setNum] = useRecoilState(RoomNumState);
  // const [Profiles, setProfiles] = useState([]);
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
  // const profiles = Rooms.map((room) => room.avatars).slice(0, 4);
  // console.log(profiles);
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
              <div>
                {chatlist.avatars.slice(0, 4).map((src) => (
                  <ChatProfileImg bgColor2={bgColor2} src={src} alt="Orang" />
                ))}
              </div>
              <div>
                <p>
                  {chatlist.room_name}
                  <Count>{chatlist.participant}</Count>
                </p>
                <Message>여기에는 최근 메세지가</Message>
              </div>
            </ChatDiv>
          </StyledLink>
        ))}
      </>
    );
  }
}

export default List;
