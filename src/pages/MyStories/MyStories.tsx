import { useEffect, useState } from "react";
import * as S from "./style";
import { useNavigate } from "react-router-dom";
import { useAtom } from "jotai";
import {
  accessTokenAtom,
  bookAuthorAtom,
  bookIdAtom,
  bookTitleAtom,
  characterImgAtom,
} from "../../store/jotaiAtoms";
import {
  bgTangled,
  bodyBG,
  bookChaek,
  btnRead,
  cardBG,
  title,
} from "../../assets/MyStories";
import { btnHome, btnCheck, btnBack } from "../../assets";
import {
  pinkBook,
  orangeBook,
  yellowBook,
  greenBook,
  blueBook,
} from "../../assets/Story/Title";
import apis from "../../apis/apis";

interface AllData {
  firstPageImageUrl: string;
  author: string;
  bookColor: number;
  characterImg: string;
  createDate: string;
  id: string;
  title: string;
}

export const MyStories = () => {
  const navigate = useNavigate();
  const [act] = useAtom(accessTokenAtom);
  const [allData, setAllData] = useState<AllData[]>([]);
  const [card, setCard] = useState(false);
  const [, setSelectedBook] = useState<AllData | null>(null);
  const [author, setAuthor] = useAtom(bookAuthorAtom);
  const [createDate, setCreateDate] = useState("");
  const [, setBookId] = useAtom(bookIdAtom);
  const [bookTitle, setBookTitle] = useAtom(bookTitleAtom);
  const [, setCharImg] = useAtom(characterImgAtom);
  const [bookColor, setBookColor] = useState(pinkBook);
  const [bookFirstImg, setBookFirstImg] = useState("");

  const books = [pinkBook, orangeBook, yellowBook, greenBook, blueBook];

  const onClickHomeBtn = () => {
    navigate("/");
  };

  const getAllBooks = async () => {
    if (act) {
      try {
        const config = {
          headers: {
            Authorization: `Bearer ${act}`,
          },
        };
        const res = await apis.get("/books/board/my", config);
        console.log(res.data);
        setAllData(res.data.data);
      } catch (err) {
        console.error(err);
      }
    }
  };

  const onClickStoryBtn = () => {
    navigate("/story/read");
  };

  useEffect(() => {
    getAllBooks();
  }, [act]);

  const onClickBook = (index: number) => {
    const selected = allData[index];
    setSelectedBook(selected);
    setBookFirstImg(selected.firstPageImageUrl);
    setAuthor(selected.author);
    setCreateDate(selected.createDate);
    setBookId(selected.id);
    setCharImg(selected.characterImg);
    setBookColor(books[selected.bookColor]);
    setBookTitle(selected.title);
    setCard(true);
  };

  const onClickBackBtn = () => {
    setCard(false);
    setSelectedBook(null);
  };

  return (
    <S.Container>
      <S.Header>
        <S.Home src={btnHome} alt="홈" onClick={onClickHomeBtn} />
        {card === true && (
          <S.ExitBtn src={btnBack} alt="나가기" onClick={onClickBackBtn} />
        )}
        <S.Check src={btnCheck} alt="확인" />
      </S.Header>
      <S.Logo src={title} alt="홈" />
      {card === false ? (
        <S.Body>
          <S.Bg src={bgTangled} alt="배경" />
          <S.BodyContainer>
            <S.BodyBG src={bodyBG} alt="배경" />
            {allData.map((item, index) => (
              <S.BookContainer key={index} onClick={() => onClickBook(index)}>
                <S.BookImg src={books[item.bookColor]} alt="동화책 종류" />
                <S.BookData>
                  <S.BookTitle>{item.title}</S.BookTitle>
                  <S.BookAuthor>{item.author} 지음</S.BookAuthor>
                  <S.BookBg src={item.firstPageImageUrl} alt="책 메인 이미지" />
                </S.BookData>
              </S.BookContainer>
            ))}
          </S.BodyContainer>
          <S.Ggummi src={bookChaek} alt="꾸미" />
        </S.Body>
      ) : (
        <S.BodyContainerT>
          <S.BgT src={bgTangled} alt="배경" />
          <S.CardBG src={cardBG} alt="책 배경" />
          <S.CardContainer>
            <S.CardBookContainer>
              <S.BookImg src={bookColor} alt="동화책 종류" />
              <S.BookData>
                <S.BookTitle style={{ fontSize: "1.7rem" }}>
                  {bookTitle}
                </S.BookTitle>
                <S.BookAuthor>{author} 지음</S.BookAuthor>
                <S.BookBg src={bookFirstImg} alt="책 메인 이미지" />
              </S.BookData>
            </S.CardBookContainer>
            <S.CardDataContainer>
              <S.MakeStoryBtn
                src={btnRead}
                alt="동화읽기 버튼"
                onClick={onClickStoryBtn}
              />
              <S.CardCreateDate>
                만든 날짜: {createDate.split("T")[0]}
              </S.CardCreateDate>
            </S.CardDataContainer>
          </S.CardContainer>
        </S.BodyContainerT>
      )}
    </S.Container>
  );
};
