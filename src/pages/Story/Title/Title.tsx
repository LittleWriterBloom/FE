import * as S from "./style";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
// import { useAtom, useAtomValue } from "jotai";
import { useAtom } from "jotai";
import { bookColorAtom, bookTitleAtom } from "../../../store/jotaiAtoms";
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
import { TTS } from "../../../components/TTS/TTS";
import { ModalYN } from "../../../components/ModalYN/ModalYN";
import { STT } from "../../../components/STT/STT";

export const Title = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [, setBookTitle] = useAtom(bookTitleAtom);

  const [bookColor, setBookColor] = useState(0);
  const [, setBookColAtom] = useAtom(bookColorAtom);

  const [showFirst, setShowFirst] = useState(false);
  const [isModal, setIsModal] = useState(false);
  const [listening, setListening] = useState(false);

  const startListening = () => {
    setListening(true);
  };

  const stopListening = () => {
    setListening(false);
  };

  const handleSpeechResult = (result: string) => {
    setTitle(result); // 입력된 음성 결과로 이름 업데이트
  };

  useEffect(() => {
    setTimeout(() => {
      setShowFirst(true);
    }, 500);
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
    setIsModal(true);
  };

  const closeModal = () => {
    setIsModal(false);
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

  return (
    <S.Container>
      <STT
        listening={listening}
        startListening={startListening}
        stopListening={stopListening}
        onSpeechResult={handleSpeechResult}
      />
      {isModal && <ModalYN isOpen={true} closeModal={closeModal} />}
      <S.Bg src={createBG} alt="배경" />
      {showFirst && (
        <>
          <TTS text="동화책의 제목을 지어볼까~?" speaker="nwoof" />
          <BubbleP text="동화책의 제목을 지어볼까~?" length={41} />
        </>
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
            value={title}
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
      </S.Body>
    </S.Container>
  );
};
