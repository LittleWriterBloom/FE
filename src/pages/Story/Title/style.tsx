import { styled } from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100dvh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #F7FFD9;
`;

export const Bg = styled.img`
  position: absolute;
  width: 100vw;
  height: 100dvh;
  object-fit: cover;
  z-index: 1;
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
  z-index: 21;
  top: 0;
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

export const Body = styled.div`
  width: 100vw;
  height: 88vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  position: absolute;
  z-index: 12;
  bottom: 0;
`;

export const BookContainer = styled.div`
  width: 50vw;
  height: 82dvh;
  position: absolute;
  bottom: 0;
  z-index: 13;
  display: flex;
  justify-content: center;
  overflow: hidden;
`;

export const BookImg = styled.img`
  width: 44vw;
  height: 90dvh;
  position: absolute;
  z-index: 14;
`;

export const BookShadow = styled.img`
  width: 44vw;
  height: 90dvh;
  position: absolute;
  z-index: 14;
  top: 1.5rem;
  left: 0.7rem;
`;

export const BookInput = styled.input`
  width: 38vw;
  height: 4.8rem;
  position: absolute;
  z-index: 16;
  top: 15dvh;
  background-color: #FFFFFF;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25) inset;
  border-radius: 10rem;
  box-sizing: border-box;
  padding: 0 2rem;
  font-family: "BMJUA";
  font-size: 1.8rem;
  text-align: center;
  color: #000;
`;

export const ColorContainer = styled.div`
  width: auto;
  height: auto;
  position: absolute;
  z-index: 20;
  right: 2.5rem;
  bottom: 2.5rem;
  box-sizing: border-box;
  padding: 2rem 1.7rem;
  border: 0.23rem solid #E7EFC8;
  border-radius: 2.4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 1.3rem;
  background-color: #FFF;
`;

export const Color = styled.div`
  border-radius: 20rem;
  cursor: pointer;
`;

export const Ggummi = styled.img`
  width: 20%;
  height: auto;
  position: absolute;
  bottom: 0;
  left: 5%;
  z-index: 26;
`;

export const Rec = styled.img`
  position: absolute;
  z-index: 27;
  bottom: 5dvh;
  width: 5.5rem;
  height: auto;
  padding-top: 2rem;
  cursor: pointer;
`;