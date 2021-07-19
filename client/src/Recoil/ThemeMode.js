import { atom } from 'recoil';

// 라이트 모드 속성 저장
export const LightState = atom({
  key: 'light',
  default: {
    mode: 'light',
    bgColor: 'white',
    textColor: '#4B5364',
    // 채팅 리스트 배경색
    bgColor2: '#F4F4F4',
  },
});

// 다크 모드 속성 저장
export const DarkState = atom({
  key: 'dark',
  default: {
    mode: 'dark',
    bgColor: '#383737',
    bgColor2: 'white',
    // 채팅 리스트 배경색
    textColor: 'white',
  },
});

// 현재 모드 속성 저장
export const modeState = atom({
  key: 'isMode',
  // 디폴트는 라이트 모드 속성.
  default: LightState,
});
