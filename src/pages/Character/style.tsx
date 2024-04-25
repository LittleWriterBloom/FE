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
  z-index: 1;
  width: 100vw;
  height: 100dvh; 
  object-fit: cover;
`;

export const BgBottom = styled.img`
  position: absolute;
  z-index: 2;
  width: 100vw;
  height: auto;
  object-fit: cover;
  bottom: 0;
`;

export const Header = styled.div`
  width: 100%;
  height: 12dvh;
  display: flex;
  top: 0;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 3dvh;
  position: absolute;
  z-index: 5;
`;

export const Home = styled.img`
  width: auto;
  height: 75%;
  margin-left: 5vw;
  filter: drop-shadow(0 0 1rem rgba(0, 0, 0, 0.17));
  cursor: pointer;
`;

export const Logo = styled.div`
  font-family: 'BMJUA';
  font-size: 3rem;
`;

export const Settings = styled.img`
  width: auto;
  height: 75%;
  margin-right: 5vw;
  opacity: 0;
`;

export const Bring = styled.img`
  width: auto;
  height: 115%;
  position: absolute;
  z-index: 10;
  right: 5vw;
  top: 1.3dvh;
  cursor: pointer;
`;

export const Body = styled.div`
  width: 100%;
  height: 85dvh;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  z-index: 4;
`;

export const BtnWrapper = styled.div`
  width: 70%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3rem;
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
  margin-bottom: 8dvh;
  cursor: pointer;
  gap: 1rem;
`;

export const BtnImg = styled.img`
  width: 100%;
  height: 100%;
`;

export const Ggummi = styled.img`
  width: 20%;
  height: auto;
  position: absolute;
  bottom: 0;
  left: 5%;
  z-index: 6;
`;
