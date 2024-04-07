import { styled } from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100dvh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
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
`;

export const Home = styled.img`
  width: auto;
  height: 75%;
  margin-left: 5vw;
  filter: drop-shadow(0 0 1rem rgba(0, 0, 0, 0.17));
`;

export const Logo = styled.div`
  width: auto;
  height: 100%;
  opacity: 0;
`;

export const Check = styled.img`
  width: auto;
  height: 75%;
  margin-right: 5vw;
  filter: drop-shadow(0 0 1rem rgba(0, 0, 0, 0.17));
`;

export const DrawArea = styled.div`
  position: absolute;
  width: 70vw;
  height: 100dvh;
  position: absolute;
  z-index: 4;
`;

export const Body = styled.div`
  width: 100vw;
  height: 88dvh;
  margin-top: 12dvh;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  position: absolute;
  z-index: 2;
`;

export const ColorPalette = styled.div`
  width: 15vw;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
`;

export const PaletteBG = styled.img`
  position: absolute;
  width: 90%;
  height: auto;
  top: 50%;
  left: 50%;
  transform: translate(-56%, -50%);
  z-index: 1;
`;

export const PaletteContents = styled.div`
  width: 90%;
  height: auto;
  position: absolute;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.5rem;
`;

export const ColorWrapper = styled.div`
  width: 80%;
  height: auto;
  display: grid;
  grid-template-columns: repeat(2,1fr);
  grid-template-rows: repeat(1fr);
  grid-gap: 1rem;
`;

export const Color = styled.img`
  width: 100%;
  height: auto;
`;

export const PaletteBtn = styled.img`
  width: 4.5rem;
  height: auto;
`;

export const PenCase = styled.div`
  width: 13vw;
  height: 95%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  margin-left: 2vw;
  overflow: hidden;
`;

export const PenCaseImg = styled.img`
  width: 100%;
  height: 100%;
  position: absolute;
  object-fit: cover;
  object-position: left;
  z-index: 1;
`;

export const PenWrapper = styled.div`
  width: 20vw;
  height: 85dvh;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 2rem;
  overflow: hidden;
  position: absolute;
  z-index: 2;
  margin-left: 13vw;
`;

export const PenType = styled.img`
  width: 100%;
  height: auto;
`;

