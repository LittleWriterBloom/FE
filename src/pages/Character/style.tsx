import { styled } from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100dvh;
  display: flex;
  flex-direction: column;
  background-color: #CAF2FF;
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

export const Profile = styled.img`
  width: auto;
  height: 75%;
  margin-left: 5vw;
  filter: drop-shadow(0 0 1rem rgba(0, 0, 0, 0.17));
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

export const Body = styled.div`
  width: 100%;
  height: 85dvh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

export const BtnWrapper = styled.div`
  width: 70%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3rem;
  position: absolute;
  z-index: 1;
`;

export const Btn = styled.div`
  width: 16rem;
  height: 18.8rem;
  position: relative;
  display: flex;
  justify-content: center;
  margin-bottom: 8dvh;
  cursor: pointer;
`;

export const BtnImg = styled.img`
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 2;
`;

export const BtnContent = styled.div`
  font-family: 'BMJUA';
  font-size: 2rem;
  position: absolute;
  z-index: 3;
  bottom: 2rem;
`;

export const Ggummi = styled.img`
  width: 20%;
  height: auto;
  position: absolute;
  bottom: 0;
  left: 5%;
  z-index: 6;
`;
