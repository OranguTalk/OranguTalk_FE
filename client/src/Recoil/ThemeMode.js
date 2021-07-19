import { atom } from 'recoil';

// 라이트 모드 속성 저장
export const LightState = atom({
  key: 'light',
  default: {
    mode: 'light',
    bgColor: 'white',
    textColor: '#4B5364',
  },
});

// 다크 모드 속성 저장
export const DarkState = atom({
  key: 'dark',
  default: {
    mode: 'dark',
    bgColor: '#4B5364',
    textColor: 'white',
  },
});

// 현재 모드 속성 저장
export const modeState = atom({
  key: 'isMode',
  // 디폴트는 라이트 모드 속성.
  default: LightState,
});
