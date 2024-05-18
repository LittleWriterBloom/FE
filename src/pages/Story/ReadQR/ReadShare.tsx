import * as S from "./style";
import { useParams } from "react-router-dom";
import { checkW } from "../../../assets/Story";
import React, { useEffect, useState } from "react";
import apis from "../../../apis/apis";
import QRCode from "qrcode.react";
import logo from "../../../assets/logo.png";
import {
  pinkBook,
  orangeBook,
  yellowBook,
  greenBook,
  blueBook,
} from "../../../assets/Story/Title";
import { btnReadQR } from "../../../assets";
import Card from "./Card";
import qrText from "../../../assets/qrText.png";

interface Page {
  coloredImageUrl: string;
  context: string;
}

interface BookData {
  pages: Page[];
  author: string;
  title: string;
  bookColor: number;
}

/* 캐러셀 컴포넌트 */

const MAX_VISIBILITY = 3;

interface CarouselProps {
  children: React.ReactNode;
  resetTextOpen: () => void;
}

const Carousel: React.FC<CarouselProps> = ({ children, resetTextOpen }) => {
  const [active, setActive] = useState(0);
  const count = React.Children.count(children);

  const next = () => {
    setActive((i) => {
      const newIndex = i < count - 1 ? i + 1 : i;
      resetTextOpen();
      return newIndex;
    });
  };

  const prev = () => {
    setActive((i) => {
      const newIndex = i > 0 ? i - 1 : i;
      resetTextOpen();
      return newIndex;
    });
  };

  return (
    <S.StyledCarousel>
      {active > 0 && <button className="nav left" onClick={prev}><S.CheckL src={checkW} alt="다음으로(비활성화)" /></button>}
      {React.Children.map(children, (child, i) => (
        <div
          className="card-container"
          style={{
            "--active": i === active ? 1 : 0,
            "--offset": (active - i) / 3,
            "--direction": Math.sign(active - i),
            "--abs-offset": Math.abs(active - i) / 3,
            pointerEvents: active === i ? "auto" : "none",
            opacity: Math.abs(active - i) >= MAX_VISIBILITY ? "0" : "1",
            display: Math.abs(active - i) > MAX_VISIBILITY ? "none" : "block",
          } as React.CSSProperties}
        >
          {child}
        </div>
      ))}
      {active < count - 1 && <button className="nav right" onClick={next}><S.Check src={checkW} alt="다음으로(비활성화)" /></button>}
    </S.StyledCarousel>
  );
};

/* 메인 컴포넌트 */

export const ReadShare = () => {
  const { uuid } = useParams<{ uuid: string }>();
  const [bookData, setBookData] = useState<BookData | null>(null);
  const [bookColor, setBookColor] = useState(pinkBook);
  const [isBookOpen, setIsBookOpen] = useState(false);
  const [isBookClick, setIsBookClick] = useState(false);
  const [bgArray, setBgArray] = useState<string[]>([]);
  const [contextArray, setContextArray] = useState<string[]>([]);
  const [textOpenIndices, setTextOpenIndices] = useState<number[]>([]);

  const books = [pinkBook, orangeBook, yellowBook, greenBook, blueBook];

  useEffect(() => {
    getBookTotalData();
  }, []);

  const getBookTotalData = async () => {
    try {
      const res = await apis.get(`/books/board/${uuid}`);
      const book = res.data.data[0].book as BookData;
      const newBgArray = book.pages.map((page) => page.coloredImageUrl);
      const newContextArray = book.pages.map((page) => page.context);

      setBgArray(newBgArray);
      setContextArray(newContextArray);
      setBookData(book);
      setBookColor(books[book.bookColor]);
    } catch (err) {
      console.error(err);
    }
  };

  const onClickCard = (index: number) => {
    setTextOpenIndices((prevIndices) =>
      prevIndices.includes(index)
        ? prevIndices.filter((i) => i !== index)
        : [...prevIndices, index]
    );
  };

  const onClickBook = () => {
    setIsBookClick((prevState) => !prevState);
  };

  const onClickReadBtn = () => {
    setIsBookOpen(true);
  };

  const resetTextOpen = () => {
    setTextOpenIndices([]);
  };

  return (
    <S.Container>
      {isBookOpen ? (
        <S.StyledApp>
          <S.BookText src={qrText} alt="그림카드를 터치해서 이야기를 읽어요" />
          <Carousel resetTextOpen={resetTextOpen}>
            {bgArray.map((bg, i) => (
              <Card
                key={i}
                content={contextArray[i]}
                image={bg}
                isTextOpen={textOpenIndices.includes(i)}
                onClickCard={() => onClickCard(i)}
              />
            ))}
          </Carousel>
        </S.StyledApp>
      ) : (
        <S.Body>
          <S.Logo src={logo} alt="로고" />
          {isBookClick ? (
            <S.QRContainer onClick={onClickBook}>
              <QRCode
                value={`http://littlewriter.netlify.app/#/story/readai/${uuid}`}
                style={{ width: "100%", height: "auto" }}
              />
            </S.QRContainer>
          ) : (
            <S.BookContainer onClick={onClickBook}>
              <S.BookImg src={bookColor} alt="동화책 종류" />
              {bookData && (
                <S.BookData>
                  <S.BookTitle style={{ fontSize: "1.7rem" }}>
                    {bookData.title}
                  </S.BookTitle>
                  <S.BookAuthor>{bookData.author} 지음</S.BookAuthor>
                  <S.BookBg
                    src={bookData.pages[0].coloredImageUrl}
                    alt="책 메인 이미지"
                  />
                </S.BookData>
              )}
            </S.BookContainer>
          )}
          <S.ReadBtn
            src={btnReadQR}
            alt="내가 만든 동화 보기"
            onClick={onClickReadBtn}
          />
        </S.Body>
      )}
    </S.Container>
  );
};