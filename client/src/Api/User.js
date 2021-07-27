import axios from 'axios';

export const AllUsersInfo = () => {
  const allUserInfo = axios.get('/users/getAllUsersInfo');
  return allUserInfo;
};

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
  // console.log(chatList);
  return chatList;
};
