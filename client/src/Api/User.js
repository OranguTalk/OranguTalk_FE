import axios from 'axios';

export const AllUsersInfo = () => {
  const allUserInfo = axios.get('/users/getAllUsersInfo');
  console.log(allUserInfo);
  return allUserInfo;
};
