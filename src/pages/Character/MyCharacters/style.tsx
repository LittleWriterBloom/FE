import { styled } from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  background-color: #FFDAF5;
  overflow: hidden;
`;

export const Bg = styled.img`
  width: 100vw;
  height: auto;
  position: absolute;
  z-index: 1;
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

export const Body = styled.div`
  width: 100vw;
  min-height: 100dvh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  z-index: 3;
`;

export const Logo = styled.img`
  width: 18rem;
  height: auto;
  margin-top: 5dvh;
  position: absolute;
  z-index: 4;
  top: 2dvh;
`;

export const BodyContainer = styled.div`
  width: 80vw;
  height: auto;
  box-sizing: border-box;
  padding: 5rem;
  margin-top: 1.5dvh;
  border-radius: 2.5rem;
  border: 30px solid #E7BD6C;
  background: #FFF9C7;
  box-shadow: 0 0 0.5rem 0.5rem rgba(0, 0, 0, 0.13) inset, 0 0.25rem 1.4rem 0 rgba(0, 0, 0, 0.25);
  display: grid;
  grid-template-columns: repeat(3,1fr);
  grid-template-rows: repeat(1fr);
  grid-gap: 3rem;
`;

export const BodyContainerN = styled.div`
  width: 80vw;
  height: 79dvh;
  border-radius: 2.5rem;
  border: 30px solid #E7BD6C;
  background: #FFF9C7;
  box-shadow: 0 0 0.5rem 0.5rem rgba(0, 0, 0, 0.13) inset, 0 0.25rem 1.4rem 0 rgba(0, 0, 0, 0.25);
  display: flex;
  margin-top: 1.5dvh;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 2.6rem;
  font-family: "BMJUA";
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

export const Character = styled.div`
  width: 100%;
  height: 18rem;
  background-color: white;
  border-radius: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 4px 15px 0px rgba(190, 179, 118, 0.80);
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
  width: 20%;
  height: auto;
  position: absolute;
  bottom: 4dvh;
  right: 5%;
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

export const CardCharacter = styled.div`
  width: 50%;
  height: 100%;
  background-color: #FFF;
  border-radius: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CardCharacterImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
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