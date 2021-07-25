import axios from 'axios';

export const AllUsersInfo = () => {
  const allUserInfo = axios.get('/users/getAllUsersInfo');
  return allUserInfo;
};

export const GetUserRooms = (newkey) => {
  const getUserRooms = axios.get('/rooms/getRooms', {
    Authorization: `Bearer ${newkey}`,
  });
  console.log(getUserRooms);
  console.log(`Bearer ${newkey}`);
};
