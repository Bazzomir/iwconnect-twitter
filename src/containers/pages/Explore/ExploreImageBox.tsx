import React from 'react';
import styled from 'styled-components';

export const ExploreImageBox = () => {
  return (
    <>
      <Styled.CoverImage
        src="https://pbs.twimg.com/profile_banners/1088408632650276864/1548339225/1500x500"
        className="col-12"
      ></Styled.CoverImage>
      <Styled.ImageText className="bottom-left">
        <h5>cyber sunset</h5>
        <p>Bottom left</p>
      </Styled.ImageText>
    </>
  );
};

const Styled = {
  ImageText: styled.div`
    position: relative;
    bottom: 75px;
    left: 40px;
    color: white;
  `,
  CoverImage: styled.img`
    margin-top: 15px;
    height: 300px;
  `,
};
