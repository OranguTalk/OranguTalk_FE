import { atom } from 'recoil';
import cookie from 'react-cookies';

export const userState = atom({
  key: 'userState',
  // 쿠키값 저장
  default: {
    username: cookie.load('username'),
    profile: cookie.load('profile'),
  },
});
