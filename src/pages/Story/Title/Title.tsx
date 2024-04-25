import * as S from "./style";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
// import { useAtom, useAtomValue } from "jotai";
import { useAtom } from "jotai";
import {
  bookColorAtom,
  bookTitleAtom,
} from "../../../store/jotaiAtoms";
import { btnMic, btnRecord } from "../../../assets";
import { BubbleP } from "../../../components/Bubble/BubbleP";
import { btnHome, btnCheck, btnCheckG, ggummi } from "../../../assets";
import {
  pinkBook,
  orangeBook,
  yellowBook,
  greenBook,
  blueBook,
  bookShadow,
} from "../../../assets/Story/Title";
import { createBG } from "../../../assets/Story/Create";

export const Title = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [, setBookTitle] = useAtom(bookTitleAtom);

  const [rec, setRec] = useState(false);
  const [bookColor, setBookColor] = useState(0);
  const [, setBookColAtom] = useAtom(bookColorAtom);

  const [showFirst, setShowFirst] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowFirst(true);
    }, 2000);
  }, []);

  const colors = ["#FF88DB", "#FFA52E", "#FFFA2E", "#25EF3C", "#43C0FF"];
  const books = [pinkBook, orangeBook, yellowBook, greenBook, blueBook];

  const onClickColor = (index: number) => {
    setBookColor(index);
  };

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const onClickHomeBtn = () => {
    navigate("/");
  };

  const onClickCheck = () => {
    if (title === "") {
      alert("동화책의 제목을 입력해 주세요.");
    } else {
      setBookTitle(title);
      setBookColAtom(books[bookColor]);
      navigate("/story/author");
    }
  };

  const onClickMic = () => {
    setRec(true);
  };
  const onClickRec = () => {
    setRec(false);
  };

  return (
    <S.Container>
      <S.Bg src={createBG} alt="배경" />
      {showFirst && (
        <BubbleP text="동화책의 제목을 지어볼까~?" length={41} />
      )}
      <S.Header>
        <S.Home src={btnHome} alt="홈" onClick={onClickHomeBtn} />
        <S.Logo>책 제목 짓기</S.Logo>
        {title === "" ? (
          <S.Check src={btnCheck} alt="확인" onClick={onClickCheck} />
        ) : (
          <S.Check src={btnCheckG} alt="확인(활성화)" onClick={onClickCheck} />
        )}
      </S.Header>
      <S.Body>
        <S.BookContainer>
          <S.BookShadow src={bookShadow} alt="책 그림자" />
          <S.BookImg src={books[bookColor]} alt="동화책 종류" />
          <S.BookInput
            onChange={handleInput}
            type="name"
            placeholder="동화의 제목을 지어주세요."
          />
        </S.BookContainer>
        <S.ColorContainer>
          {colors.map((color, index) => (
            <S.Color
              key={index}
              onClick={() => onClickColor(index)}
              style={{
                backgroundColor: `${color}`,
                width: index === bookColor ? "5.2rem" : "4.6rem",
                height: index === bookColor ? "5.2rem" : "4.6rem",
                border: index === bookColor ? "0.24rem solid #947047a3" : "",
              }}
            />
          ))}
        </S.ColorContainer>
        <S.Ggummi src={ggummi} alt="꾸미" />
        {rec === false ? (
          <S.Rec src={btnMic} alt="다음으로(비활성화)" onClick={onClickMic} />
        ) : (
          <S.Rec src={btnRecord} alt="다음으로(활성화)" onClick={onClickRec} />
        )}
      </S.Body>
    </S.Container>
  );
};