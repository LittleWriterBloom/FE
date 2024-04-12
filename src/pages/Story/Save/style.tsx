import { styled } from "styled-components";

export const Container = styled.div`
  width: auto;
  height: 100dvh;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  background-color: #96D9FF;
`;

export const Bg = styled.img`
  position: absolute;
  z-index: 1;
  width: 100vw;
  height: 100dvh;
  object-fit: cover;
`;

export const BookShadow = styled.img`
  position: absolute;
  z-index: 3;
  width: 40vw;
  height: auto;
  object-fit: cover;
  bottom: 6dvh;
`;

export const LottieWrapper = styled.div`
  width: 100vw;
  height: 100dvh;
  position: absolute;
  z-index: 2;
  display: flex;
  overflow: hidden;
`

export const Header = styled.div`
  width: 100%;
  height: 12dvh;
  margin-top: 3dvh;
  position: absolute;
  z-index: 20;
`;

export const Home = styled.img`
  width: auto;
  height: 75%;
  margin-left: 5vw;
  filter: drop-shadow(0 0 1rem rgba(178, 53, 53, 0.17));
  cursor: pointer;
`;

export const Check = styled.img`
  width: auto;
  height: 75%;
  margin-right: 5vw;
  filter: drop-shadow(0 0 1rem rgba(0, 0, 0, 0.17));
  cursor: pointer;
`;

export const Body = styled.div`
  width: 100vw;
  height: 100dvh;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 5vw;
  position: absolute;
  z-index: 4;
  bottom: 0;
  margin-top: 5.5dvh;
  cursor: pointer;
`;

export const BookContainer = styled.div`
  width: 30vw;
  height: 60dvh;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  position: relative;
`;

export const BookImg = styled.img`
  width: 30vw;
  height: 60dvh;
  position: absolute;
  z-index: 25;
`;

export const BookTitle = styled.div`
  width: 26vw;
  height: 12dvh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  z-index: 26;
  top: 8dvh;
  font-family: "BMJUA";
  font-size: 1.8rem;
  text-align: center;
  color: #000;
`;

export const BookBg = styled.img`
  width: 30vw;
  height: 35dvh;
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

export const BtnContainer = styled.div`
  width: auto;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2vw;
`;

export const Btn = styled.img`
  width: 18vw;
  height: auto;
  cursor: pointer;
  filter: drop-shadow(0 0 1.5rem rgba(37, 121, 181, 0.57));
`;
