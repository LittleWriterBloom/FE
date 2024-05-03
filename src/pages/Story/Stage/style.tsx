import { styled } from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100dvh;
  display: flex;
  flex-direction: column;
  background-color: #caf2ff;
`;

export const Bg = styled.img`
  position: absolute;
  z-index: 1;
  width: 100vw;
  height: 100dvh;
  object-fit: cover;
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
  z-index: 6;
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
  cursor: pointer;
`;

export const Body = styled.div`
  width: 100%;
  height: 90dvh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  z-index: 5;
  bottom: 0;
`;

export const BGContainer = styled.div`
  width: 30vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.5rem;
`;

export const BGText = styled.img`
  width: 32rem;
`;

export const BGInput = styled.input`
  width: 35vw;
  height: 5rem;
  background-color: #ffffff;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25) inset;
  border-radius: 10rem;
  box-sizing: border-box;
  padding: 0 2rem;
  font-size: 1.8rem;
  text-align: center;
  color: #000;
`;

export const Character = styled.img`
  width: 40vw;
  height: auto;
`;

export const Dong = styled.img`
  width: 20%;
  height: auto;
  position: absolute;
  bottom: 0;
  left: 5%;
  z-index: 6;
`;

export const Rec = styled.img`
  position: absolute;
  z-index: 3;
  bottom: 5dvh;
  width: 5.5rem;
  height: auto;
  padding-top: 2rem;
  cursor: pointer;
`;
