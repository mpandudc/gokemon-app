import styled from '@emotion/styled';
import React from 'react';

import { ModalBackground, ModalContent, ModalWrapper, CloseButton } from './DetailCard/StyledCard';

const NewModalContent = styled(ModalContent)`
  h1 {
    color: red;
    font-family: 'Pokemon Solid Normal';
  }
`;

const FailedCatchModal = (props) => {
  return (
    <ModalBackground onClick={props.closeModal} ref={props.modalRef}>
      <ModalWrapper>
        <NewModalContent>
          <h1>FAILED !</h1>
          <p>Your Pokemon have been run away...</p>
        </NewModalContent>
        <CloseButton
          aria-label="Close modal"
          hovercolor="#ee1b24"
          onClick={() => {
            props.setShowFailed((prev) => !prev);
            props.setShowCatch((prev) => !prev);
          }}
        />
      </ModalWrapper>
    </ModalBackground>
  );
};

export default FailedCatchModal;
