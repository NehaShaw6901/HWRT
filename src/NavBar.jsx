import React from 'react';
import { FaPrescriptionBottleMedical } from "react-icons/fa6";

import styled from "styled-components";
import FlexBox from "./common/FlexBox";
import { PLATINUM, ShamrockGreen, WHITE } from "./common/colors";
import { Body1 } from './common/Headings';

const Wrapper = styled(FlexBox)`
  position: absolute;
  top: 0;
  width: 100%;
  height: 3rem;
  background-color: ${ShamrockGreen};
  align-items:center;
  padding:0 2rem;
  column-gap:0.25rem;
`;

const NavBar = () => {
  return (
    <Wrapper>
      <FaPrescriptionBottleMedical color={PLATINUM} />
      <Body1 bold color={WHITE}>
        HWRT
      </Body1>
    </Wrapper>
  );
}

export default NavBar