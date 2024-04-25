import { styled } from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 103.6vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #CFFF8A;
`;

export const Bg = styled.img`
  width: 94vw;
  height: auto;
  position: absolute;
  z-index: 1;
  top: 3rem;
`;

export const BottomBox = styled.div`
  width: 100vw;
  height: 24dvh;
  position: absolute;
  z-index: 2;
  bottom: 0;
  background-color: #FFF5BD;
  opacity: 0;
`;

export const Header = styled.div`
  width: 100%;
  height: 12dvh;
  display: flex;
  flex-direction: row;
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

export const BookContainer = styled.div`
  width: 18vw;
  height: 40dvh;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  position: relative;
`;

export const BookImg = styled.img`
  width: 18vw;
  height: 40dvh;
  position: absolute;
  z-index: 25;
`;

export const BookTitle = styled.div`
  width: 16vw;
  height: 12dvh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  z-index: 26;
  top: 7dvh;
  font-family: "BMJUA";
  font-size: 1.7rem;
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
  font-size: 1.4rem;
  text-align: center;
  color: #000;
`;

export const BookBg = styled.img`
  width: 18vw;
  height: 16dvh;
  position: absolute;
  z-index: 26;
  bottom: 0;
  border-radius: 0 0 1rem 1rem;
`;

export const Character = styled.img`
  width: 30vw;
  height: auto;
  position: absolute;
  z-index: 26;
  bottom: 0;
`;

export const Body = styled.div`
  width: 75vw;
  height: 84vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  z-index: 3;
  top: 10rem;
`;

export const BodyContainer = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 2.5rem;  
  box-shadow: 0 0 0.5rem 0.5rem rgba(0, 0, 0, 0.13) inset, 0 0.25rem 1.4rem 0 rgba(0, 0, 0, 0.25);
  display: flex;
  box-sizing: border-box;
  padding: 5rem;
  margin-top: 1.5dvh;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 2.6rem;
  font-family: "BMJUA";
  position: relative;
  box-shadow: 0 0 0.5rem 0.5rem rgba(0, 0, 0, 0.13) inset, 0 0.25rem 1.4rem 0 rgba(0, 0, 0, 0.25);
  display: grid;
  grid-template-columns: repeat(3,1fr);
  grid-template-rows: repeat(1fr);
  grid-gap: 3rem;
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

export const ModalContainer = styled.div`
  width: 100vw;
  height: 100dvh;
  position: absolute;
  z-index: 10;
`;

export const BodyContainerT = styled.div`
  width: 100vw;
  height: 80dvh;
  margin-top: 20dvh;
  position: relative;
  display: flex;
  align-items: flex-start;
  justify-content: center;
`;

export const CardBG = styled.div`
  width: 77vw;
  height: 68dvh;
  margin-top: 20dvh;
  margin-bottom: 12dvh;
  background-color: #FFFBE5;
  border-radius: 2.5rem;
  box-shadow: 0 0.2rem 0.75rem 0 rgba(0, 0, 0, 0.25);
  transform: rotate(-6.597deg);
  position: absolute;
  z-index: 1;
  top: -20dvh;
`;

export const CardContainer = styled.div`
  width: 77vw;
  height: 68dvh;
  box-sizing: border-box;
  padding: 5rem 3rem 5rem 5rem;
  background-color: #FFFBE5;
  border-radius: 2.5rem;
  box-shadow: 0 0.2rem 0.75rem 0 rgba(0, 0, 0, 0.25);
  display: flex;
  position: relative;
  z-index: 2;
`;

export const CardBookContainer = styled.div`
  width: 30vw;
  height: 64dvh;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  position: relative;
`;

export const CardBookImg = styled.img`
  width: 30vw;
  height: 64dvh;
  position: absolute;
  z-index: 25;
`;

export const CardBookTitle = styled.div`
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

export const CardBookAuthor = styled.div`
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

export const CardBookBg = styled.img`
  width: 30vw;
  height: 39dvh;
  position: absolute;
  z-index: 26;
  bottom: 0;
  border-radius: 0 0 1rem 1rem;
`;

export const CardDataContainer = styled.div`
  width: 50%;
  height: 100%;
  box-sizing: border-box;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  font-family: "BMJUA";
`;

export const CardCharName = styled.div`
  width: 16rem;
  height: 5.5rem;
  background-color: #FFF3DC;
  border: 0.2rem solid #FFF;
  border-radius: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
`;

export const CardCharFeat = styled.div`
  width: 90%;
  height: auto;
  font-size: 1.8rem;
  text-align: center;
`;

export const MakeStoryBtn = styled.button`
  width: 16rem;
  height: 5.5rem;
  color: #FFF;
  background-color: #F7B22C;
  border-radius: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2.2rem;
`;

export const ExitBtn = styled.img`
  width: 4rem;
  height: 4rem;
  position: absolute;
  z-index: 3;
  top: -1.1rem;
  right: -1.1rem;
  filter: drop-shadow(0 0 0.6rem rgba(0, 0, 0, 0.17));
  cursor: pointer;
`;

