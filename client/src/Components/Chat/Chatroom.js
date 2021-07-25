import React from 'react';
import styled from 'styled-components';
import My from './Bubble/My';
import Other from './Bubble/Other';
import Statusbar from './Statusbar';
import Test from '../../Assets/Image/Test.jpg';
import orangu from '../../Assets/Image/orangu1.png';

const Container = styled.div`
  height: 80vh;
  overflow-y: scroll;
`;

const Chatroom = () => {
  return (
    <Container>
      <Statusbar username={'민석이'} />
      <Other
        username={'오랑이'}
        chat={
          '그치만 누나 정말 보고 싶은걸? 그치만 누나 정말 보고 싶은걸? 그치만 누나 정말 보고 싶은걸? 그치만 누나 정말 보고 싶은걸? 그치만 누나 정말 보고 싶은걸? 그치만 누나 정말 보고 싶은걸? 그치만 누나 정말 보고 싶은걸? '
        }
        time={'07:23'}
      />
      <My
        chat={
          '난 아니니까 저리가 난 아니니까 저리가 난 아니니까 저리가 난 아니니까 저리가 난 아니니까 저리가 난 아니니까 저리가 난 아니니까 저리가 '
        }
        time={'07:23'}
      />
      <Other username={'오랑이'} chat={Test} time={'07:23'} />
      <My chat={'ㄲㅈ'} time={'07:23'} />
      <My
        chat={
          '난 아니니까 저리가 난 아니니까 저리가 난 아니니까 저리가 난 아니니까 저리가 난 아니니까 저리가 난 아니니까 저리가 난 아니니까 저리가 '
        }
        time={'07:23'}
      />
      <Other username={'오랑이'} chat={orangu} time={'07:23'} />
      <My chat={'ㄲㅈ'} time={'07:23'} />
      <My
        chat={
          '난 아니니까 저리가 난 아니니까 저리가 난 아니니까 저리가 난 아니니까 저리가 난 아니니까 저리가 난 아니니까 저리가 난 아니니까 저리가 '
        }
        time={'07:23'}
      />
      <Other username={'오랑이'} chat={'새침때기ㅋ'} time={'07:23'} />
      <My chat={'ㄲㅈ'} time={'07:23'} />
    </Container>
  );
};

export default Chatroom;
