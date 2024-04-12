import { styled } from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100dvh;
  display: flex;
  flex-direction: column;
  background-color: #CAF2FF;
`;

export const Bg = styled.img`
  position: absolute;
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
  z-index: 3;
`;

export const Logo = styled.div`
  font-family: 'BMJUA';
  font-size: 3rem;
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

export const Settings = styled.img`
  width: auto;
  height: 75%;
  margin-right: 5vw;
  opacity: 0;
`;

export const Body = styled.div`
  width: 100%;
  height: 100dvh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

export const BtnWrapper = styled.div`
  width: 70%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4rem;
  position: absolute;
  z-index: 5;
`;

export const Btn = styled.div`
  width: 16rem;
  height: 18.8rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  cursor: pointer;
  gap: 1rem;
`;

export const BtnImg = styled.div`
  position: absolute;
  z-index: 10;
  width: 100%;
  height: 100%;
  border-radius: 2.8rem;
  border: 0.5rem solid #FFF;
  background-color: #D6D6D6;
`;

export const BtnContent = styled.div`
  position: absolute;
  z-index: 11;
  text-align: center;
  font-family: 'BMJUA';
  font-size: 3.5rem;
`;

export const Dong = styled.img`
  width: 20%;
  height: auto;
  position: absolute;
  bottom: 0;
  left: 5%;
  z-index: 6;
`;
