import React from 'react';
import styled from 'styled-components';
import { MainBrown } from '../../Assets/Color/Color';

const Container = styled.div`
  margin: 10px auto;
  width: 80%;
  height: 20px;
  background-color: ${MainBrown};
  color: white;
  border-radius: 10px;
  text-align: center;
  line-height: 20px;
`;

const Statusbar = ({ username }) => {
  return <Container>{username} 님이 입장했습니다.</Container>;
};

export default Statusbar;
