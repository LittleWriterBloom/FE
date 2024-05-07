import { styled } from "styled-components";

export const Container = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
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

export const Bring = styled.img`
  width: auto;
  height: 160%;
  position: absolute;
  z-index: 10;
  right: 5vw;
  top: 1.4dvh;
  cursor: pointer;
`;

export const Body = styled.div`
  width: 100vw;
  min-height: 115rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  z-index: 3;
`;

export const Bg = styled.img`
  width: 100%;
  height: 115rem;
  position: absolute;
  z-index: 1;
`;

export const Logo = styled.img`
  width: 20rem;
  height: auto;
  position: absolute;
  z-index: 5;
  top: 0;
`;

export const BodyContainer = styled.div`
  width: 80vw;
  height: 96rem;
  box-sizing: border-box;
  padding: 6rem 5rem;
  display: grid;
  grid-template-columns: repeat(3,1fr);
  grid-template-rows: repeat(3,1fr);
  grid-gap: 3rem 1rem;
  position: absolute;
  z-index: 2;
  top: 15dvh;
`;

export const BoardBG = styled.img`
  width: 80vw;
  height: 96rem;
  filter: drop-shadow(0 0 1rem rgba(0, 0, 0, 0.17));
  position: absolute;
  z-index: 1;
  top: 15dvh;
`;

export const BodyContainerN = styled.div`
  width: 80vw;
  height: 78dvh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 2.6rem;
  font-family: "BMJUA";
  position: absolute;
  z-index: 3;
  top: 15dvh;
  color: #ABA357;
`;

export const MakeBtn = styled.img`
  width: 20rem;
  height: auto;
  margin-top: 1.5rem;
  cursor: pointer;
`;

export const CharacterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  position: relative;
`;

export const CharacterMemoBG = styled.img`
  width: 100%;
  height: 88%;
  filter: drop-shadow(0 0 1rem rgba(0, 0, 0, 0.17));
  position: absolute;
  z-index: 3;
`;

export const Character = styled.div`
  width: 100%;
  height: 20rem;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  z-index: 3;
  top: 2rem;
`;

export const CharacterImg = styled.img`
  width: 90%;
  height: 100%;
  object-fit: cover;
  border-radius: 1.1rem;
`;

export const CharacterName = styled.div`
  font-size: 2rem;
  font-family: "BMJUA";
  object-fit: cover;
  margin-top: 1rem;
  position: absolute;
  z-index: 3;
  bottom: 0;
`;

export const Ggummi = styled.img`
  width: 20%;
  height: 18rem;
  position: fixed;
  bottom: 0;
  right: 5%;
  z-index: 6;
  object-fit: cover;
  object-position: top;
`;

export const ModalContainer = styled.div`
  width: 100vw;
  height: 100dvh;
  position: absolute;
  z-index: 10;
`;

export const BodyContainerT = styled.div`
  width: 100vw;
  height: 100dvh;
  position: relative;
  display: flex;
  align-items: flex-start;
  justify-content: center;
`;

export const BgT = styled.img`
  width: 100vw;
  height: 100dvh;
  position: absolute;
  z-index: 1;
`;

export const CardBG = styled.img`
  width: 80vw;
  height: 78dvh;
  position: absolute;
  z-index: 1;
  top: 15dvh;
`;

export const CardContainer = styled.div`
  width: 80vw;
  height: 78dvh;
  box-sizing: border-box;
  padding: 5rem;
  display: flex;
  position: relative;
  z-index: 2;
  top: 15dvh;
`;

export const CardCharacter = styled.div`
  width: 48%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

export const CardCharacterBG = styled.img`
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 3;
`;

export const CardCharacterImg = styled.img`
  width: 80%;
  height: 80%;
  object-fit: cover;
  position: absolute;
  z-index: 4;
`;

export const CardDataContainer = styled.div`
  width: 50%;
  height: 100%;
  box-sizing: border-box;
  padding: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  font-family: "BMJUA";
`;

export const CardCharName = styled.div`
  width: 18rem;
  height: 5.5rem;
  background-color: #FFFAF1;
  border: 0.4rem solid #FFF;
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
  color: #ABA357;
`;

export const MakeStoryBtn = styled.img`
  width: 15rem;
  height: auto;
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