import * as S from "./style";
import { bookChaek } from "../../assets/MyStories";

export const ModalCopy = ({ isOpen }: { isOpen: boolean }) => {

  return (
    <>
      {isOpen && (
        <S.ModalCopyContainer>
          <S.ModalCopyWrapper>
            <S.ModalImg src={bookChaek} alt="말풍선" style={{width: "10rem"}} />
            <S.ModalText>
              내가 만든 동화책의
              <br />
              URL이 복사되었어요!
            </S.ModalText>
          </S.ModalCopyWrapper>
        </S.ModalCopyContainer>
      )}
    </>
  );
};
