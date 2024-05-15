import * as S from "./style";
import styled from "styled-components";
import { dongEnd, modalBtnNo, modalBtnYes } from "../../assets";
import { useNavigate } from "react-router-dom";

export const ModalYN = ({ isOpen, closeModal }: { isOpen: boolean, closeModal: () => void }) => {
  const navigate = useNavigate();

  const naviToHome = () => {
    closeModal();
    navigate("/home");
  };

  return (
    <>
      {isOpen && (
        <S.ModalContainer>
          <S.ModalWrapper>
            <S.ModalImg src={dongEnd} alt="말풍선" />
            <S.ModalText>
              동화 만들기를 끝낼까요?
              <br />
              만든 내용은 저장되지 않아요!
            </S.ModalText>
            <S.ModalBtnWrapper>
              <ModalBtnNo onClick={closeModal}>아니오</ModalBtnNo>
              <ModalBtnYes onClick={naviToHome}>네</ModalBtnYes>
            </S.ModalBtnWrapper>
          </S.ModalWrapper>
        </S.ModalContainer>
      )}
    </>
  );
};

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
