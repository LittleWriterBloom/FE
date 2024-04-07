import { styled } from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100dvh;
  display: flex;
  flex-direction: column;
  overflow-x: scroll;
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
  margin-top: 3dvh;
  position: absolute;
  z-index: 10;
`;

export const Home = styled.img`
  width: auto;
  height: 75%;
  margin-left: 5vw;
  cursor: pointer;
  filter: drop-shadow(0 0 1rem rgba(0, 0, 0, 0.17));
`;

export const Body = styled.div`
  width: 100vw;
  height: 100dvh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

export const Clouds = styled.div`
  position: absolute;
  z-index: 4;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8.5vw;
`;

export const Cloud= styled.img`
  width: 20vw;
  height: auto;
`;

export const MenuContainer = styled.div`
  position: absolute;
  z-index: 5;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8vw;
`;

export const Menu= styled.img`
  width: 20vw;
  height: auto;
  padding-top: 32dvh;
  cursor: pointer;
`;

export const MenuCenter= styled.img`
  width: 20vw;
  height: auto;
  padding-bottom: 28dvh;
  cursor: pointer;
`;

