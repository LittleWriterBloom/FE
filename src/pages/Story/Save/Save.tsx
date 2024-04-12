import * as S from "./style";
import { useNavigate } from "react-router-dom";
// import { useAtom, useAtomValue } from "jotai";
import { btnHome } from "../../../assets";
import { bgSave, other, reread } from "../../../assets/Story/Save";
import { useAtom, useAtomValue } from "jotai";
import {
  canvasImageDataAtom,
  background1,
  bookColorAtom,
  bookTitleAtom,
} from "../../../store/jotaiAtoms";

export const Save = () => {
  const navigate = useNavigate();
  const canvasImageData = useAtomValue(canvasImageDataAtom);
  const [bookColAtom] = useAtom(bookColorAtom);
  const [bg1] = useAtom(background1);
  const [bookTitle] = useAtom(bookTitleAtom);

  const onClickHomeBtn = () => {
    navigate("/");
  };

  const onClickRead = () => {
    navigate("/story/read")
  };

  const onClickOther = () => {
    navigate("/mystories");
  };

  return (
    <S.Container>
      <S.Bg src={bgSave} alt="배경" />
      <S.Header>
        <S.Home src={btnHome} alt="홈" onClick={onClickHomeBtn} />
      </S.Header>
      <S.Body>
        <S.BookContainer>
          <S.BookImg src={bookColAtom} alt="동화책 종류" />
          <S.BookTitle>{bookTitle}</S.BookTitle>
          {bg1 && <S.BookBg src={bg1} />}
          {canvasImageData && (
            <S.Character src={canvasImageData} alt="Saved Image" />
          )}
        </S.BookContainer>
        <S.BtnContainer>
          <S.Btn src={reread} alt="처음부터 읽기" onClick={onClickRead} />
          <S.Btn src={other} alt="다른 동화 만들기" onClick={onClickOther} />
        </S.BtnContainer>
      </S.Body>
    </S.Container>
  );
};
