import { atom } from 'recoil';

export const userState = atom({
  key: 'userState',
  default: {
    username: '',
    profile: '',
    userToken: '',
  },
});

export const participantState = atom({
  key: 'participantState',
  default: [],
});
