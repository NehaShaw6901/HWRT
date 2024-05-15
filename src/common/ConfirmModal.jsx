import React from "react";
import { FiX } from "react-icons/fi";
import styled from "styled-components";

import FlexBox from "./FlexBox";
import { Body2 } from "./Headings";
import { Button } from "./Buttons";
import Modal from "./Modal";
import { SECONDARY_200, ACCENT_200, ACCENT_400 } from "./colors";

const Wrapper = styled(FlexBox)`
  flex-direction: column;
`;

const Container = styled(FlexBox)`
  padding: 1rem;
  border-top: 1px solid ${SECONDARY_200};
  row-gap: 3rem;
`;

const Header = styled(FlexBox)`
  width: 100%;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid ${ACCENT_400};
  padding: 0.75rem 1rem;
`;

const CloseButton = styled(FlexBox)`
  padding: 0.5rem;
  border-radius: 50%;
  cursor: pointer;
  background-color: ${ACCENT_200};
`;

const ButtonWrapper = styled(FlexBox)`
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;

const ConfirmModal = ({
  toggleModal,
  title,
  confirmationText,
  cancelButtonText = "No",
  confirmButtonText = "Yes",
  onConfirm = () => {},
  onCancel = () => {},
}) => (
  <Modal
    XS
    togglePopup={toggleModal}
    height="fit-content"
    mobileHeight="fit-content"
    mobileWidth="90%"
    mobileBorderRadius="0.5rem"
    borderRadius="1rem"
  >
    <Wrapper>
      <Header>
        <div />
        <Body2 bold>{title}</Body2>
        <CloseButton onClick={toggleModal}>
          <FiX strokeWidth={1} size={20} />
        </CloseButton>
      </Header>
      <Container column>
        <Body2 textAlign="center">{confirmationText}</Body2>
        <ButtonWrapper>
          <Button outline secondary onClick={onCancel}>
            {cancelButtonText}
          </Button>
          <Button onClick={onConfirm}>{confirmButtonText}</Button>
        </ButtonWrapper>
      </Container>
    </Wrapper>
  </Modal>
);

export default ConfirmModal;
