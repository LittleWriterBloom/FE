import { styled } from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100dvh;
  display: flex;
  flex-direction: column;
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
  z-index: 2;
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
  height: 100dvh;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  position: relative;
  position: absolute;
  z-index: 1;
`;

export const NameContainer = styled.div`
  width: 36vw;
  position: absolute;
  left: 12%;
  bottom: 48%;
  z-index: 6;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.5rem;
`;

export const NameText = styled.p`
  font-size: 2.4rem;
  font-family: "BMJUA";
`;

export const NameInput = styled.input`
  width: 32vw;
  height: 5rem;
  background-color: #FFFFFF;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25) inset;
  border-radius: 10rem;
  box-sizing: border-box;
  padding: 0 2rem;
  font-size: 1.8rem;
  text-align: center;
  color: #000;
  font-family: "BMJUA";
`;

export const NameStt = styled.div`
  width: 100%;
  height: 5rem;
  background-color: #FFFFFF;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25) inset;
  border-radius: 10rem;
  box-sizing: border-box;
  padding: 0 2rem;
  font-size: 1.8rem;
  text-align: center;
  color: #000;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "BMJUA";
`;

export const CharacterImage = styled.div`
  width: 50dvh;
  height: 78dvh;
  position: absolute;
  right: 15%;
  bottom: 10%;
  z-index: 6;
  display: flex;
  justify-content: center;
`

export const Character = styled.img`
  position: absolute;
  z-index: 9;
  width: 90%;
  height: auto;
  top: 14dvh;
`

export const Easel = styled.img`
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 8;
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
  height: 28.6dvh;
  background-color: #E9E5C2;
  position: absolute;
  bottom: 0;
`;

export const BottomPaints = styled.img`
  width: 30vw;
  height: auto;
  bottom: 1dvh;
  position: absolute;
  z-index: 2;
  right: 3vw;
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