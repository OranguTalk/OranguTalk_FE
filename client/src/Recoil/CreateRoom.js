import { atom } from 'recoil';

// 룸생성시 룸 제목
export const CreateRoomState = atom({
  key: 'CreateRoomState',
  default: '',
});

// 룸 총 num 값
export const RoomNumState = atom({
  key: 'RoomNumState',
  default: '',
});
