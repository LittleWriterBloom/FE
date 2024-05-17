import { styled } from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100dvh;
  display: flex;
  flex-direction: column;
  background-color: #F5F0C2;
  overflow: hidden;
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
  z-index: 3;
  top: 0;
`;

export const Home = styled.img`
  width: auto;
  height: 75%;
  margin-left: 5vw;
  filter: drop-shadow(0 0 1rem rgba(0, 0, 0, 0.17));
  cursor: pointer;
`;

export const Body = styled.div`
  width: 100vw;
  height: 100dvh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  z-index: 2;
  gap: 2.5rem;
`;

export const Title = styled.img`
  width: 20rem;
  height: auto;
`;

export const CharactersContainer = styled.div`
  width: 70vw;
  height: 55dvh;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 2.5rem;
  border-radius: 2.5rem;
  position: relative;
`;

export const CharactersContainerBG = styled.img`
  width: 70vw;
  height: 55dvh;
  position: absolute;
  z-index: 2;
`;

export const CharactersWrapper = styled.div`
  width: 70vw;
  height: 55dvh;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 2.5rem;
  position: absolute;
  z-index: 3;
`;

export const ContinueBtn = styled.img`
  width: 16rem;
  height: auto;
  cursor: pointer;
`;

export const CharacterWrapper = styled.div`
  width: 23vw;
  height: 45dvh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

`;

export const CharacterText = styled.div`
  font-family: "BMJUA";
  font-size: 1.5rem;
`;

export const CharacterImage = styled.div`
  width: 23vw;
  height: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Character = styled.img`
  width: 100%;
  height: auto;
`;

export const Arrow = styled.img`
  width: 5rem;
  height: auto;
`;

export const BrushWrapper = styled.div`
  width: 25rem;
  height: auto;
  position: absolute;
  top: -11rem;
  right: -1rem;
  z-index: 6;
  transform: rotate(200deg);
`;

export const Ggummi = styled.img`
  width: 20%;
  height: auto;
  position: absolute;
  bottom: 0;
  left: 5%;
  z-index: 6;
`;

export const LottieWrapper = styled.div`
  width: 100vw;
  height: 100dvh;
  position: absolute;
  z-index: 1;
`;