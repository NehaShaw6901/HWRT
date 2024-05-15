import React from "react";
import styled from "styled-components";
import { TfiClose } from "react-icons/tfi";

import FlexBox from "./FlexBox";
import { SECONDARY_901 } from "./colors";

const IconContainer = styled(FlexBox)`
  width: 1.5rem;
  height: 1.5rem;
  background-color: ${SECONDARY_901};
  justify-self: end;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  cursor: pointer;
`;

const CrossIcon = ({ crossIconClick }) => (
  <IconContainer onClick={crossIconClick}>
    <TfiClose size="0.75rem" />
  </IconContainer>
);

export default CrossIcon;