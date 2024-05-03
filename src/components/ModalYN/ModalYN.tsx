import styled, { keyframes } from "styled-components";
import { dongEnd, modalBtnNo, modalBtnYes } from "../../assets";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const ModalYN = () => {
  const [isOpen, setIsOpen] = useState(true);
  const navigate = useNavigate();

  const closeModal = () => {
    setIsOpen(false);
  };

  const naviToHome = () => {
    navigate("/home");
  };

  return (
    <>
      {isOpen && (
        <ModalContainer>
          <ModalWrapper>
            <ModalImg src={dongEnd} alt="말풍선" />
            <ModalText>
              동화 만들기를 끝낼까요?
              <br />
              만든 내용은 저장되지 않아요!
            </ModalText>
            <ModalBtnWrapper>
              <ModalBtnNo onClick={closeModal}>아니오</ModalBtnNo>
              <ModalBtnYes onClick={naviToHome}>네</ModalBtnYes>
            </ModalBtnWrapper>
          </ModalWrapper>
        </ModalContainer>
      )}
    </>
  );
};

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const ModalContainer = styled.div`
  width: 100vw;
  height: 100dvh;
  position: absolute;
  z-index: 100;
  left: 0;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(36, 36, 36, 0.85);
  backdrop-filter: blur(0.25rem);
  animation: ${fadeIn} 0.7s linear forwards;
`;

const ModalWrapper = styled.div`
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

const ModalImg = styled.img`
  width: 13rem;
  height: auto;
  margin-top: 1.5rem;
  filter: drop-shadow(0 0.25rem 0.25rem rgba(0, 0, 0, 0.25));
`;

const ModalText = styled.p`
  font-size: 1.5rem;
  font-family: "BMJUA";
  padding-left: 1rem;
  text-align: center;
`;

const ModalBtnWrapper = styled.div`
  width: 23rem;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ModalBtnNo = styled.button`
  width: 10rem;
  height: 5.676rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url(${modalBtnNo});
  background-size: cover;
  font-family: "BMJUA";
  color: #fff;
  font-size: 1.5rem;
  padding-bottom: 0.6rem;
`;

const ModalBtnYes = styled.button`
  width: 10rem;
  height: 5.676rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url(${modalBtnYes});
  background-size: cover;
  font-family: "BMJUA";
  color: #fff;
  font-size: 1.5rem;
  padding-bottom: 0.6rem;
`;
