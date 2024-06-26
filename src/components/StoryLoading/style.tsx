import styled, { keyframes } from "styled-components";

// LoadingComp
export const LoadingContainer = styled.div`
  position: absolute;
  z-index: 500;
  width: 100vw;
  height: 100dvh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: rgba(247, 255, 217);
`;

export const LottieWrapper = styled.div`
  width: 40vw;
  height: auto;
`;

export const LoadingTextWrapper = styled.div`
  width: auto;
  height: 5rem;
`;

export const LoadingText = styled.p`
  font-family: "BMJUA";
  font-size: 2rem;
  margin-top: -2rem;
  margin-bottom: 2rem;
  text-align: center;
  color: #9eab6d;
  position: relative;
  margin-top: 0.5rem;
`;

const cursorBlink = keyframes`
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

export const Cursor = styled.span`
  font-family: "SUIT";
  font-weight: 900;
  position: absolute;
  top: 0;
  right: -1.2rem; // 텍스트 끝에 위치하도록 설정
  animation: ${cursorBlink} 0.5s infinite;
`;