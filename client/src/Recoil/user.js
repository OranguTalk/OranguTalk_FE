import { atom } from 'recoil';

export const userState = atom({
  key: 'userState',
  default: {
    username: '',
    profile: '',
    userToken: '',
    userId: '',
  },
});

export const participantState = atom({
  key: 'participantState',
  default: [],
});
