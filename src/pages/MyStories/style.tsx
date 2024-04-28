import { styled } from "styled-components";

export const Container = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #CFFF8A;
`;

export const Header = styled.div`
  width: 100%;
  height: 12dvh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 3dvh;
  position: absolute;
  z-index: 10;
`;

export const Home = styled.img`
  width: auto;
  height: 75%;
  margin-left: 5vw;
  filter: drop-shadow(0 0 1rem rgba(0, 0, 0, 0.17));
  cursor: pointer;
`;

export const ExitBtn = styled.img`
  width: auto;
  height: 75%;
  margin-left: 11.5vw;
  filter: drop-shadow(0 0 1rem rgba(0, 0, 0, 0.17));
  cursor: pointer;
  position: absolute;
  z-index: 11;
`;

export const Check = styled.img`
  width: auto;
  height: 75%;
  margin-right: 5vw;
  filter: drop-shadow(0 0 1rem rgba(0, 0, 0, 0.17));
  opacity: 0;
`;

export const Logo = styled.img`
  width: 20rem;
  height: auto;
  position: absolute;
  z-index: 4;
  top: 0;
`;

export const Bg = styled.img`
  width: 94vw;
  height: 103rem;
  position: absolute;
  z-index: 1;
  top: 2rem;
`;

export const BgT = styled.img`
  width: 94vw;
  height: 97dvh;
  position: absolute;
  z-index: 1;
  top: 4dvh;
  object-fit: cover;
  object-position: top;
`;

export const Body = styled.div`
  width: 100vw;
  height: 105rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 3;
`;

export const BodyContainer = styled.div`
  width: 75vw;
  height: 88rem;
  border-radius: 2.5rem;  
  display: flex;
  box-sizing: border-box;
  padding: 5rem 6rem 2.4rem 6rem;
  margin-top: 4rem;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 2.6rem;
  font-family: "BMJUA";
  position: relative;
  box-shadow: 0 0 0.5rem 0.5rem rgba(0, 0, 0, 0.13) inset, 0 0.25rem 1.4rem 0 rgba(0, 0, 0, 0.25);
  display: grid;
  grid-template-columns: repeat(3,1fr);
  grid-template-rows: repeat(3,1fr);
  grid-gap: 5rem;
`;

export const BodyBG = styled.img`
  position: absolute;
  z-index: 3;
  width: 100%;
  height: 100%;
  top: 0;
`;

export const MakeBtn = styled.button`
  width: 20rem;
  height: 5.4rem;
  background-color: #F7B22C;
  border-radius: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #FFF;
  font-size: 2.2rem;
  font-family: "BMJUA";
  margin-top: 1.5rem;
  cursor: pointer;
`;
export const CharacterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
`;

export const CharacterImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

export const CharacterName = styled.div`
  font-size: 2rem;
  font-family: "BMJUA";
  object-fit: cover;
  margin-top: 1rem;
`;

export const Ggummi = styled.img`
  width: 12rem;
  height: auto;
  position: fixed;
  bottom: 0;
  right: 4%;
  z-index: 6;
`;

/* book style */
export const BookContainer = styled.div`
  width: 16rem;
  height: 21rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  position: relative;
  cursor: pointer;
`;

export const BookImg = styled.img`
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 25;
`;

export const BookData = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  position: absolute;
  z-index: 26;
  font-family: "BMJUA";
  font-size: 1.5rem;
  text-align: center;
  color: #000;
`;

export const BookTitle = styled.div`
  width: 90%;
  margin-top: 20%;
  height: 12%;
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 1.65rem;
`;

export const BookAuthor = styled.div`
  width: 90%;
  height: 10%;
  font-size: 1.1rem;
`;

export const BookBg = styled.img`
  width: 100%;
  height: 55%;
  object-fit: cover;
  border-radius: 0 0 0.8rem 0.8rem;
`;

/* card style */
export const BodyContainerT = styled.div`
  width: 100vw;
  height: 100dvh;
  position: relative;
  display: flex;
  align-items: flex-start;
  justify-content: center;
`;

export const CardBG = styled.img`
  width: 62rem;
  height: auto;
  position: absolute;
  z-index: 1;
  bottom: 0rem;
`;

export const CardContainer = styled.div`
  width: 45rem;
  height: 60dvh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  z-index: 2;
  top: 25dvh;
`;

export const CardBookContainer = styled.div`
  width: 20rem;
  height: 25rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  position: relative;
`;

export const CardDataContainer = styled.div`
  width: 40%;
  height: 13rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  font-family: "BMJUA";
`;

export const CardCreateDate = styled.div`
  width: 90%;
  height: auto;
  font-size: 1.6rem;
  text-align: center;
  color: #819F54;
`;

export const MakeStoryBtn = styled.img`
  width: 15rem;
  height: auto;
  cursor: pointer;
`;

