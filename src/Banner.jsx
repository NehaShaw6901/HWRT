import React from "react";
import FlexBox from "./common/FlexBox";
import styled from "styled-components";
import { BUTTERSCOTCH_400, BRICK_TERRACOTA_900 } from "./common/colors";
import { Body2, H2 } from "./common/Headings";
import { device } from "./common/Responsive";

const Wrapper = styled(FlexBox)`
  position: relative;
  width: 80%;
  height: 8rem;
  background-color: ${BUTTERSCOTCH_400};
  align-items: center;
  column-gap: 0.5rem;
  border-radius: 0.5rem;

  @media ${device.laptop} {
    width: 70%;
    height: 5rem;
    column-gap: 2rem;
  }
`;

const Img = styled.img`
  width: 100px;
  height: 100%;
  object-fit: cover;
`;

const Img2 = styled.img`
display:none;

  @media ${device.laptop} {
   display:block;
    width: 120px;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
  }
`;

const LastImg = styled(FlexBox)`
  position: absolute;
  right: 0;

  @media ${device.laptop} {
    right: 3rem;
  }
`;

const Banner = () => {
  return (
    <Wrapper>
      <Img src="/assets/doctor.svg" />
      <FlexBox column>
      <H2 bold color={BRICK_TERRACOTA_900}>Get Medicine Links</H2>
      <Body2>Upload your prescription and get buying links , along with there alternatives</Body2>
      </FlexBox>
      <LastImg>
        <Img2 src="/assets/doctor2.jpg"  alt="doctor2"/>
      </LastImg>
    </Wrapper>
  );
};

export default Banner;
