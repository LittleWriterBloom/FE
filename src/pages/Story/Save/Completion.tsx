import { styled } from "styled-components";
import { useNavigate } from "react-router-dom";
import { btnHome } from "../../../assets";
import { useAtom } from "jotai";
import {
  // canvasImageDataAtom,
  bookColorAtom,
  bookTitleAtom,
  bgAtom1,
  bookAuthorAtom,
} from "../../../store/jotaiAtoms";
import bookCompletion from "../../../assets/Lottie/bookcompletion.json";
import Lottie from "react-lottie-player";
import { bookShadow } from "../../../assets/Story/Save/Completion";
import { useEffect } from "react";

export const Completion = () => {
  const navigate = useNavigate();
  // const [canvasImageData, ] = useAtom(canvasImageDataAtom);
  const [bookColAtom] = useAtom(bookColorAtom);
  const [bookBg1] = useAtom(bgAtom1);
  const [bookTitle] = useAtom(bookTitleAtom);
  const [author] = useAtom(bookAuthorAtom);

  useEffect(() => {
    setTimeout(() => {
      navigate("/story/save");
    }, 3000);
  }, []);

  const onClickHomeBtn = () => {
    navigate("/");
  };

  return (
    <Container>
      <Lottie
        loop
        animationData={bookCompletion}
        play
        style={{ width: "100vw" }}
      />
      <Header>
        <Home src={btnHome} alt="홈" onClick={onClickHomeBtn} />
      </Header>
      <Body>
        <BookContainer>
          <BookImg src={bookColAtom} alt="동화책 종류" />
          <BookTitle>{bookTitle}</BookTitle>
          <BookAuthor>{author} 지음</BookAuthor>
          {bookBg1 && <BookBg src={bookBg1} />}
          {/* {canvasImageData && (
            <Character src={canvasImageData} alt="Saved Image" />
          )} */}
        </BookContainer>
        <BookShadow src={bookShadow} alt="책" />
      </Body>
    </Container>
  );
};

const Container = styled.div`
  width: auto;
  height: 100dvh;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  background-color: #96d9ff;
`;

const BookShadow = styled.img`
  position: absolute;
  z-index: 3;
  width: 40vw;
  height: auto;
  object-fit: cover;
  bottom: 6dvh;
`;

const Header = styled.div`
  width: 100%;
  height: 12dvh;
  margin-top: 3dvh;
  position: absolute;
  z-index: 20;
`;

const Home = styled.img`
  width: auto;
  height: 75%;
  margin-left: 5vw;
  filter: drop-shadow(0 0 1rem rgba(178, 53, 53, 0.17));
  cursor: pointer;
`;

const Body = styled.div`
  width: 100vw;
  height: 100dvh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  position: absolute;
  z-index: 14;
  cursor: pointer;
`;

const BookContainer = styled.div`
  width: 28vw;
  height: 60dvh;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  position: relative;
  margin-top: 8rem;
`;

const BookImg = styled.img`
  width: 28vw;
  height: 60dvh;
  position: absolute;
  z-index: 25;
`;

const BookTitle = styled.div`
  width: 26vw;
  height: 10dvh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  z-index: 26;
  top: 5dvh;
  font-family: "BMJUA";
  font-size: 1.8rem;
  text-align: center;
  color: #000;
`;

export const BookAuthor = styled.div`
  width: 26vw;
  height: 10dvh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  z-index: 26;
  top: 13dvh;
  font-family: "BMJUA";
  font-size: 1.5rem;
  text-align: center;
  color: #000;
`;

const BookBg = styled.img`
  width: 30vw;
  height: 37dvh;
  position: absolute;
  z-index: 26;
  bottom: 0;
  border-radius: 0 0 1rem 1rem;
  object-fit: cover;
`;

// const Character = styled.img`
//   width: 30vw;
//   height: auto;
//   position: absolute;
//   z-index: 26;
//   bottom: 0;
// `;
