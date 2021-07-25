import axios from 'axios';

export const AllUsersInfo = () => {
  const allUserInfo = axios.get('/users/getAllUsersInfo');
  return allUserInfo;
};
