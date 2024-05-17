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
  z-index: 400;
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
  width: 55rem;
  height: 80dvh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

export const BtnX = styled.img`
  width: 5rem;
  height: 5rem;
  position: absolute;
  z-index: 2;
  top: 3dvh;
  right: -1rem;
  cursor: pointer;
  filter: drop-shadow(0 0.25rem 0.25rem rgba(0, 0, 0, 0.25));
`;

export const ModalBg = styled.img`
  width: 100%;
  height: auto;
  position: absolute;
  z-index: 1;
`;

export const ModalSearch = styled.div`
  position: absolute;
  z-index: 2;
  width: 65%;
  height: 6rem;
  bottom: 12dvh;
  display: flex;
  align-items: center;
`;

export const ModalSearchBg = styled.img`
  position: absolute;
  z-index: 3;
  width: 100%;
  height: 100%;
`;

export const ModalSearchBtn = styled.img`
  position: absolute;
  z-index: 4;
  width: auto;
  height: 100%;
  right: 0;
  cursor: pointer;
`;

export const ModalSearchInput = styled.input`
  position: absolute;
  z-index: 4;
  width: 74%;
  height: 80%;
  font-size: 2rem;
  font-family: "BMJUA";
  margin-left: 2rem;
  &:focus {
    outline: none;
  }
`;

export const ModalBubble = styled.div`
  position: absolute;
  z-index: 2;
  width: 65%;
  height: 45%;
  font-size: 2rem;
  font-family: "BMJUA";
  color: #816225;
  right: 4rem;
  margin-bottom: 2.5rem;
`;

export const ModalBubbleBg = styled.img`
  position: absolute;
  z-index: 3;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ModalBubbleContent = styled.div`
  position: absolute;
  z-index: 4;
  width: 85%;
  height: 90%;
  margin: 1rem 0 0 10%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const ModalBubbleQuest = styled.p`
  width: 100%;
  overflow-x: auto;
  font-size: 2.8rem;
  margin-bottom: 0.5rem;
  display: flex;
  align-items: center;
`;

export const SpeakerBtn = styled.img`
  width: 3.3rem;
  height: auto;
  margin-left: 1rem;
  margin-right: 5vw;
  cursor: pointer;
`;

export const ModalBubbleTextBox = styled.div`
  font-size: 3rem;
  width: 100%;
  height: 11rem;
  border-radius: 0.7rem;
  background: #F2F2E9;
  box-shadow: 0.2rem 0.2rem 0.4rem 0px rgba(224, 224, 204, 0.50) inset;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalBubbleText = styled.p`
  font-size: 2rem;
  width: 90%;
  height: 9rem;
  overflow-y: auto;
`;
