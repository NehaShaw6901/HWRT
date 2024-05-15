import React from "react";
import styled from "styled-components";
import FlexBox from "./common/FlexBox";
import { Body1, H2, Body2 } from "./common/Headings";
import { boxShadowDs2 } from "./common/styles";
import { device } from "./common/Responsive";
import { BRICK_TERRACOTA_900, LINKEDIN_BG_COLOR } from "./common/colors";

const medicineNames = [
  "Paracetamol",
  "Mesacol OD",
  "Pan40",
  "Acloc rd",
  "budamed 200",
  "cetrazine",
  "Atorvastatin",
];

const Wrapper = styled(FlexBox)`
  flex-direction: column;
  width: 100%;
  height: 100%;
  row-gap: 1rem;
  padding: 0 2rem;
  justify-content: center;
  margin-bottom: 1rem;

  @media ${device.laptop} {
    flex-direction: row;
    column-gap: 1.5rem;
    padding: 0 2rem;
  }
`;

const Section = styled(FlexBox)`
  width: 100%;
  height: 100%;
  min-height: 10rem;
  padding: 1rem;
  row-gap: 1rem;
  ${boxShadowDs2};

  @media ${device.laptop} {
    padding: 1rem 2rem;
    min-height: 15rem;
  }
`;

const FlexGap = styled(FlexBox)`
  width: 100%;
  height: fit-content;
  flex-direction: column;
  row-gap: 0.5rem;
  align-items: flex-start;

  @media ${device.laptop} {
    flex-direction: row;
    column-gap: 1rem;
    align-items: center;
  }
`;

const LinkContainer = styled(FlexBox)`
  width: 100%;
  align-items: flex-start;
  flex-direction: column;
  row-gap: 0.5rem;
`;

export const MedicineDetails = () => {
  const handleLinkClick = (item) => {
    const encodedItem = encodeURIComponent(item);
    const googleSearchUrl = `https://www.google.com/search?q=${encodedItem} buying link netmeds`;
    window.open(googleSearchUrl, "_blank");
    const buyingLink = `your-buying-link-base-url/${item}`;
    window.open(buyingLink, "_blank");
  };

  return (
    <Wrapper>
      <Section column>
        <FlexGap>
          <H2 color={BRICK_TERRACOTA_900} bold>
            Medicine name:
          </H2>
          <Body1 textTransform="capitalize">paracetamol</Body1>
        </FlexGap>
        <FlexGap>
          <H2 color={BRICK_TERRACOTA_900} bold>
            Generic Name:{" "}
          </H2>
          <Body1 textTransform="capitalize">paracetamol loreem</Body1>
        </FlexGap>
      </Section>
      <Section column>
        <H2 color={BRICK_TERRACOTA_900} bold>
          Buying Links
        </H2>
        <LinkContainer>
          {medicineNames?.map((item) => (
            <Body2
              color={LINKEDIN_BG_COLOR}
              cursor="pointer"
              onClick={() => handleLinkClick(item)}
            >
              {item}{" "}
            </Body2>
          ))}
        </LinkContainer>
      </Section>
    </Wrapper>
  );
};
