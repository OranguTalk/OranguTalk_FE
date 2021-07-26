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
  const response = axios.get(`/room/getUserListInRoom?room=${room_id}`);
  return response;
};
