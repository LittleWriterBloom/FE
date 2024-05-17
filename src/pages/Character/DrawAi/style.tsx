import { styled } from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100dvh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #FFECBB;
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
  cursor: pointer;
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
  cursor: pointer;
`;

export const DrawAreaContainer = styled.div`
  position: absolute;
  width: 68vw;
  height: 100dvh;
  position: absolute;
  z-index: 4;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

export const DrawArea = styled.div`
  position: absolute;
  width: 60vw;
  height: 78dvh;
  position: absolute;
  z-index: 6;
`;

export const Paper = styled.img`
  position: absolute;
  width: 70vw;
  height: 92dvh;
  position: absolute;
  z-index: 5;
  filter: drop-shadow(0px 0.2rem 1rem rgba(212, 186, 119, 0.59));
`;

export const BrushControlBarWrapper = styled.div`
  width: 13rem;
  height: 3rem;
  position: absolute;
  z-index: 8;
  right: -3rem;
  border-radius: 10rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #FFDE2E;
  transform: rotate(90deg);
`;

export const BrushControlBar = styled.input`
  width: 10rem;
  height: 0.75rem;
  -webkit-appearance: none;
  appearance: none;
  background: #DDC12E;
  cursor: pointer;
  border-radius: 10rem;
  &::-webkit-slider-thumb{
    -webkit-appearance: none; /* Override default look */
    appearance: none;
    width: 2rem;
    height: 2rem;
    background: white;
    border-radius: 6rem;
    filter: drop-shadow(0.17rem 0 0.17rem rgba(0, 0, 0, 0.2));
  }
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
  cursor: pointer;
`;

export const PaletteBtn = styled.img`
  width: 4.5rem;
  height: auto;
  cursor: pointer;
`;

export const PenCase = styled.div`
  width: 13vw;
  height: 95%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  margin-left: 2vw;
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
  gap: 4rem;
  position: absolute;
  z-index: 2;
  margin-left: 13vw;
`;

export const PenType = styled.img`
  width: 100%;
  height: auto;
  cursor: pointer;
`;

export const CharacterDataInput = styled.input`
  width: 32vw;
  height: 5rem;
  background-color: #ffffff;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25) ;
  border-radius: 1rem;
  box-sizing: border-box;
  padding: 0 2rem;
  font-size: 1.8rem;
  text-align: center;
  color: #000;
  font-family: "BMJUA";
  position: absolute;
  z-index: 10;
  top: 3rem;
`;

// Descript

export const DescriptContainer = styled.div`
  width: 100%;
  height: 100dvh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

export const DescriptBG = styled.img`
  width: 100%;
  height: 100dvh;
  position: absolute;
  z-index: 1;
`;

export const DescriptContentsWrapper = styled.div`
  width: 74%;
  height: 35rem;
  margin-top: 3rem;
  position: absolute;
  z-index: 2;
  display: flex;
  justify-content: space-between;
  background-color: rgba(200, 200, 200, 0.5);
`;

export const DescriptImgWrapper = styled.div`
  width: 50%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(205, 182, 83, 0.5);
`;

export const DescriptImg = styled.img`
  width: 100%;
  height: 90%;
  object-fit: cover;
`;

export const DescriptTextContainer = styled.div`
  width: 45%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const DescriptTitle = styled.img`
  width: 100%;
  height: auto;
  margin-bottom: 2rem;
`;

export const DescriptTextWrapper = styled.div`
  width: 100%;
  height: 15rem;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const DescriptTextBG = styled.img`
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 3;
`;

export const DescriptTextInput = styled.input`
  width: 85%;
  height: 85%;
  font-size: 2rem;
  font-family: "BMJUA";
  overflow-y: auto;
  position: absolute;
  z-index: 4;
  text-align: top;
  &:focus {
    outline: none;
  }
`;