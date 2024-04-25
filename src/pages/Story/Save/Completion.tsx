import { styled } from "styled-components";
import { useNavigate } from "react-router-dom";
// import { useAtom, useAtomValue } from "jotai";
import { btnHome } from "../../../assets";
import { useAtom, useAtomValue } from "jotai";
import {
  canvasImageDataAtom,
  bookColorAtom,
  bookTitleAtom,
  bgAtom1,
  bookAuthorAtom,
} from "../../../store/jotaiAtoms";
import sparkle1 from "../../../assets/Lottie/sparkle1.json";
import Lottie from "react-lottie-player";
import { bg1, bookShadow, textComplete } from "../../../assets/Story/Save/Completion";
import { useEffect, useState } from "react";

export const Completion = () => {
  const navigate = useNavigate();
  const canvasImageData = useAtomValue(canvasImageDataAtom);
  const [bookColAtom, ] = useAtom(bookColorAtom);
  const [bookBg1] = useAtom(bgAtom1);
  const [bookTitle] = useAtom(bookTitleAtom);
  const [author ,] = useAtom(bookAuthorAtom);

  const [showFirst, setShowFirst] = useState(false);
  const [showSecond, setShowSecond] = useState(false);
  const [showThird, setShowThird] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowFirst(true);
      setTimeout(() => {
        setShowSecond(true);
        setTimeout(() => {
          setShowThird(true);
        }, 400); 
      }, 400); 
    }, 400); 
    setTimeout(() => {
      navigate("/story/save");
    }, 4000); 
  }, []);

  const onClickHomeBtn = () => {
    navigate("/");
  };

  return (
    <Container>
      <Bg src={bg1} alt="배경" />
      <LottieWrapper>
        {showFirst && <Lottie
          loop
          animationData={sparkle1}
          play
          style={{ width: "18rem", position: "absolute", left: "14rem", top: "0rem" }}
        />}
        {showSecond && <Lottie
          loop
          animationData={sparkle1}
          play
          style={{ width: "10rem", position: "absolute", left: "4rem", top: "11rem" }}
        />}
        {showThird && <Lottie
          loop
          animationData={sparkle1}
          play
          style={{ width: "25rem", position: "absolute", left: "6rem", top: "10rem" }}
        />}
        {showThird && <Lottie
          loop
          animationData={sparkle1}
          play
          style={{ width: "18rem", position: "absolute", right: "16rem", top: "-rem" }}
        />}
        {showFirst && <Lottie
          loop
          animationData={sparkle1}
          play
          style={{ width: "10rem", position: "absolute", right: "6rem", top: "4rem" }}
        />}
        {showSecond && <Lottie
          loop
          animationData={sparkle1}
          play
          style={{ width: "25rem", position: "absolute", right: "1rem", top: "10rem" }}
        />}
      </LottieWrapper>
      <Header>
        <Home src={btnHome} alt="홈" onClick={onClickHomeBtn} />
      </Header>
      <Body>
        <TextComplete src={textComplete} alt="동화책 완성"/>
        <BookContainer>
          <BookImg src={bookColAtom} alt="동화책 종류" />
          <BookTitle>{bookTitle}</BookTitle>
          <BookAuthor>{author} 지음</BookAuthor>
          {bookBg1 && <BookBg src={bookBg1} />}
          {canvasImageData && (
            <Character src={canvasImageData} alt="Saved Image" />
          )}
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
  background-color: #96D9FF;
`;

const Bg = styled.img`
  position: absolute;
  z-index: 1;
  width: 100vw;
  height: 100dvh;
  object-fit: cover;
`;

const BookShadow = styled.img`
  position: absolute;
  z-index: 3;
  width: 40vw;
  height: auto;
  object-fit: cover;
  bottom: 6dvh;
`;

const LottieWrapper = styled.div`
  width: 100vw;
  height: 100dvh;
  position: absolute;
  z-index: 2;
  display: flex;
  overflow: hidden;
`

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

const TextComplete = styled.img`
  width: 24vw;
  height: auto;
`;

const BookContainer = styled.div`
  width: 30vw;
  height: 64dvh;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  position: relative;
`;

const BookImg = styled.img`
  width: 30vw;
  height: 64dvh;
  position: absolute;
  z-index: 25;
`;

const BookTitle = styled.div`
  width: 26vw;
  height: 12dvh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  z-index: 26;
  top: 7dvh;
  font-family: "BMJUA";
  font-size: 1.8rem;
  text-align: center;
  color: #000;
`;

export const BookAuthor = styled.div`
  width: 26vw;
  height: 12dvh;
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
  height: 39dvh;
  position: absolute;
  z-index: 26;
  bottom: 0;
  border-radius: 0 0 1rem 1rem;
`;

const Character = styled.img`
  width: 30vw;
  height: auto;
  position: absolute;
  z-index: 26;
  bottom: 0;
`;