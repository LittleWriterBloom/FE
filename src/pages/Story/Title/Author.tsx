import * as S from "./style";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
// import { useAtom, useAtomValue } from "jotai";
import { useAtom } from "jotai";
import {
  accessTokenAtom,
  bgAtom1,
  bookAuthorAtom,
  bookColorAtom,
  bookIdAtom,
  bookTitleAtom,
} from "../../../store/jotaiAtoms";
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
import apis from "../../../apis/apis";
import { createBG } from "../../../assets/Story/Create";
import { BookMaking } from "../../../components/StoryLoading/BookMaking";
import { TTS } from "../../../components/TTS/TTS";
import { ModalYN } from "../../../components/ModalYN/ModalYN";
import { SpeechToText } from "../../../components/SpeechToText/SpeechToText";

interface bookDataTypes {
  title: string | null;
  bookColor: number | null;
  author: string | null;
}

export const Author = () => {
  const navigate = useNavigate();
  const [act] = useAtom(accessTokenAtom);
  const [author, setAuthor] = useState("");
  const [bookTitle] = useAtom(bookTitleAtom);
  const [, setBookBg1] = useAtom(bgAtom1);
  const [, setBookAuthor] = useAtom(bookAuthorAtom);
  const [, setBookId] = useAtom(bookIdAtom);

  const [bookColor, setBookColor] = useState(0);
  const [bookColAtom, setBookColAtom] = useAtom(bookColorAtom);

  const [showFirst, setShowFirst] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isModal, setIsModal] = useState(false);
  const [listening, setListening] = useState(false);

  const startListening = () => {
    setListening(true);
  };

  const stopListening = () => {
    setListening(false);
  };

  const handleSpeechResult = (result: string) => {
    setAuthor(result); // 입력된 음성 결과로 이름 업데이트
  };

  useEffect(() => {
    const index = books.findIndex((book) => book === bookColAtom);
    if (index !== -1) {
      setBookColor(index);
    }

    setTimeout(() => {
      setShowFirst(true);
    }, 500);
  }, []);

  const colors = ["#FF88DB", "#FFA52E", "#FFFA2E", "#25EF3C", "#43C0FF"];
  const books = [pinkBook, orangeBook, yellowBook, greenBook, blueBook];

  const bookData = {
    title: bookTitle,
    bookColor: bookColor,
    author: author,
  };

  console.log(bookData);

  const saveBookData = async (bookData: bookDataTypes) => {
    const config = {
      headers: {
        Authorization: `Bearer ${act}`,
      },
    };

    if (act) {
      try {
        const res = await apis.post(`/books/builder/dalle-save`, bookData, config);
        console.log(res.data.data[0]);
        setBookId(res.data.data[0].book.id);
        setBookBg1(res.data.data[0].book.pages[0].coloredImageUrl);
        navigate("/story/completion");
      } catch (err) {
        console.error(err);
      }
    }
  };

  const onClickColor = (index: number) => {
    setBookColor(index);
  };

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAuthor(e.target.value);
  };

  const onClickHomeBtn = () => {
    setIsModal(true);
  };

  const closeModal = () => {
    setIsModal(false);
  };

  const onClickCheck = () => {
    if (author === "") {
      alert("동화책의 작가를 입력해 주세요.");
    } else {
      setBookAuthor(author);
      setBookColAtom(books[bookColor]);
      setIsLoading(true);
      saveBookData(bookData);
    }
  };

  return (
    <S.Container>
      {isLoading ? (
        <BookMaking />
      ) : (
        <>
          <SpeechToText
            listening={listening}
            startListening={startListening}
            stopListening={stopListening}
            onSpeechResult={handleSpeechResult}
          />
          {isModal && <ModalYN isOpen={true} closeModal={closeModal} />}
          <S.Bg src={createBG} alt="배경" />
          {showFirst && (
            <>
              <TTS text="동화책의 작가는 누구야~?" speaker="nwoof" />
              <BubbleP text="동화책의 작가는 누구야~?" length={41} />
            </>
          )}
          <S.Header>
            <S.Home src={btnHome} alt="홈" onClick={onClickHomeBtn} />
            <S.Logo>책 제목 짓기</S.Logo>
            {author === "" ? (
              <S.Check src={btnCheck} alt="확인" onClick={onClickCheck} />
            ) : (
              <S.Check
                src={btnCheckG}
                alt="확인(활성화)"
                onClick={onClickCheck}
              />
            )}
          </S.Header>
          <S.Body>
            <S.BookContainer>
              <S.BookShadow src={bookShadow} alt="책 그림자" />
              <S.BookImg src={books[bookColor]} alt="동화책 종류" />
              <S.BookTitle>{bookTitle}</S.BookTitle>
              <S.BookAuthor>
                <S.BookAuthorInput
                  onChange={handleInput}
                  type="name"
                  placeholder="작가 이름"
                  value={author}
                />
                <span>지음</span>
              </S.BookAuthor>
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
                    border:
                      index === bookColor ? "0.24rem solid #947047a3" : "",
                  }}
                />
              ))}
            </S.ColorContainer>
            <S.Ggummi src={ggummi} alt="꾸미" />
          </S.Body>
        </>
      )}
    </S.Container>
  );
};
