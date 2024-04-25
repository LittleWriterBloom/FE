import { useEffect, useState } from "react";
import * as S from "./style";
import { useNavigate } from "react-router-dom";
import { useAtom } from "jotai";
import { 
  accessTokenAtom, 
  bookAuthorAtom, 
  bookColorAtom, 
  bookCreateDate, 
  bookIdAtom, 
  bookTitleAtom, 
  characterIdAtom} from "../../store/jotaiAtoms";
import { bgTangled, bodyBG, bookChaek, title } from "../../assets/MyStories";
import {
  btnHome,
  btnCheck,
  btnX,
} from "../../assets";
import {
  pinkBook,
  orangeBook,
  yellowBook,
  greenBook,
  blueBook,
} from "../../assets/Story/Title";
import apis from "../../apis/apis";

interface AllData {
  author: string;
  bookColor: number;
  characterId: number;
  createDate: string;
  id: string;
  title: string;
}

export const MyStories = () => {
  const navigate = useNavigate();
  const [act] = useAtom(accessTokenAtom);
  const [allData, setAllData] = useState<AllData[]>([]);
  const [card, setCard] = useState(false);
  const [selectedBook, setSelectedBook] = useState<AllData | null>(null);
  const [author, setAuthor] = useAtom(bookAuthorAtom);
  const [, setCreateDate] = useAtom(bookCreateDate);
  const [, setBookId] = useAtom(bookIdAtom);
  const [bookTitle, ] = useAtom(bookTitleAtom);
  const [, setCharId] = useAtom(characterIdAtom);
  const [bookColAtom, setBookColAtom] = useAtom(bookColorAtom);

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
    if (selectedBook) {
      setAuthor(selectedBook.author); 
      setCreateDate(selectedBook.createDate); 
      setBookId(selectedBook.id); 
      setCharId(selectedBook.characterId);
      setBookColAtom(books[selectedBook.bookColor]);
    }
    navigate("/story/stage")
  }

  useEffect(() => {
    getAllBooks();
  }, [act]);

  const onClickCharacter = (index: number) => {
    const selected = allData[index];
    setSelectedBook(selected);
    setCard(true);
  };

  return (
    <S.Container>
      <S.Bg src={bgTangled} alt="배경" />
      <S.BottomBox />
      <S.Logo src={title} alt="홈"/>
      <S.Header>
        <S.Home src={btnHome} alt="홈" onClick={onClickHomeBtn} />
        <S.Check src={btnCheck} alt="확인" />
      </S.Header>
      <S.Body>
        {card === false ? (
          <S.BodyContainer>
            <S.BodyBG src={bodyBG} alt="배경" />
            {allData.map((item, index) => (
              <S.BookContainer key={index} onClick={() => onClickCharacter(index)}>
                <S.BookImg src={books[item.bookColor]} alt="동화책 종류" />
                <S.BookTitle>{item.title}</S.BookTitle>
                <S.BookAuthor>{item.author} 지음</S.BookAuthor>
                <S.BookBg alt="책 메인 이미지" />
              </S.BookContainer>
            ))}
          </S.BodyContainer>
        ) : (
          <S.BodyContainerT>
            <S.CardBG />
            <S.CardContainer>
              <S.CardBookContainer>
                <S.CardBookImg src={bookColAtom} alt="동화책 종류" />
                <S.CardBookTitle>{bookTitle}</S.CardBookTitle>
                <S.CardBookAuthor>{author} 지음</S.CardBookAuthor>
                <S.CardBookBg alt="책 메인 이미지" />
              </S.CardBookContainer>
              <S.CardDataContainer>
                <S.MakeStoryBtn onClick={onClickStoryBtn}>동화 읽기</S.MakeStoryBtn>
                <S.CardCharFeat>{selectedBook?.createDate}</S.CardCharFeat>
                <S.ExitBtn src={btnX} alt="나가기" onClick={() => setCard(false)}/>
              </S.CardDataContainer>
            </S.CardContainer>
          </S.BodyContainerT>
        )}
      </S.Body>
      <S.Ggummi src={bookChaek} alt='꾸미' />
    </S.Container>
  );
};
