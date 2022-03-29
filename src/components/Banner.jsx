import styled from '@emotion/styled';
import React from 'react';
import BannerImage from '../assets/images/banner.png';

const Container = styled.div`
  padding: 0 0 1.5em 0;
  width: 100%;
  background-color: white;
  border-bottom: 4px solid rgba(0, 0, 0, 0.05);
  border-radius: 0px 0px 40px 40px;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;
`;

const ImageContainer = styled.div`
  margin: auto;
  width: 90%;
  img {
    border-radius: 24px;
    margin: auto;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  }
`;
const Banner = () => {
  return (
    <Container>
      <ImageContainer>
        <img src={BannerImage} alt="banner" />
      </ImageContainer>
    </Container>
  );
};

export default Banner;
