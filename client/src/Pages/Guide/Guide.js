import React from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';
import Guide1 from '../../Components/Guide/Guide1';
import Guide2 from '../../Components/Guide/Guide2';
import Guide3 from '../../Components/Guide/Guide3';
import Guide4 from '../../Components/Guide/Guide4';

const GuideDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 92vh;
  width: 360px;
`;

function Guide() {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToshow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
      <Slider {...settings}>
        <GuideDiv>
          <Guide1 />
        </GuideDiv>
        <GuideDiv>
          <Guide2 />
        </GuideDiv>
        <GuideDiv>
          <Guide3 />
        </GuideDiv>
        <GuideDiv>
          <Guide4 />
        </GuideDiv>
      </Slider>
    </>
  );
}

export default Guide;
