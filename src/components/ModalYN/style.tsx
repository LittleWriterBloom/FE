import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

export const ModalContainer = styled.div`
  width: 100vw;
  height: 100dvh;
  position: absolute;
  z-index: 500;
  left: 0;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(36, 36, 36, 0.85);
  backdrop-filter: blur(0.25rem);
  animation: ${fadeIn} 0.7s linear forwards;
`;

export const ModalWrapper = styled.div`
  width: 30rem;
  height: 30rem;
  border-radius: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  background-color: #fff;
`;

export const ModalImg = styled.img`
  width: 13rem;
  height: auto;
  margin-top: 1.5rem;
  filter: drop-shadow(0 0.25rem 0.25rem rgba(0, 0, 0, 0.25));
`;

export const ModalText = styled.p`
  font-size: 1.5rem;
  font-family: "BMJUA";
  padding-left: 1rem;
  text-align: center;
`;

export const ModalBtnWrapper = styled.div`
  width: 23rem;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
