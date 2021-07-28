import axios from 'axios';

// 모든 유저 정보 API
export const AllUsersInfo = () => {
  const allUserInfo = axios.get('/users/getAllUsersInfo');
  return allUserInfo;
};

// 현재 로그인된 유저의 채팅 리스트 API
export const GetUserRooms = (newkey) => {
  const getUserRooms = axios.get('/rooms/getRooms', {
    headers: {
      Authorization: `Bearer ${newkey}`,
    },
  });
  return getUserRooms;
};

// Room 참여자 리스트 API
export const GetUserListInRoom = (room_id) => {
  const userListInRoom = axios.get(
    `/room/getUserListInRoom?room_id=${room_id}`,
  );
  return userListInRoom;
};

// 채팅방 정보, 내역 조회 API
export const ChatList = (room_id) => {
  const chatList = axios.get(`/room/chatList?room_id=${room_id}`);
  return chatList;
};
