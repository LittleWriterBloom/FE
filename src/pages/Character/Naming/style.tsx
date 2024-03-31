import { styled } from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100dvh;
  display: flex;
  flex-direction: column;
  background-color: #FFFBD5;
`;

export const Header = styled.div`
  width: 100%;
  height: 12dvh;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 3dvh;
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

export const Body = styled.div`
  width: 100vw;
  height: 85dvh;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  position: relative;
`;

export const Easel = styled.img`
  width: auto;
  height: 70dvh;
  position: absolute;
  bottom: 0;
  right: 5%;
  z-index: 6;
`;

export const Ggummi = styled.img`
  width: 20%;
  height: auto;
  position: absolute;
  bottom: 0;
  left: 5%;
  z-index: 6;
`;

export const BottomBox = styled.div`
  width: 100%;
  height:28.6dvh;
  background-color: #E9E5C2;
  position: absolute;
  bottom: 0;
`;

