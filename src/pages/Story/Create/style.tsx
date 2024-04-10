import { styled } from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100dvh;
  display: flex;
  flex-direction: column;
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
  z-index: 3;
`;

export const Home = styled.img`
  width: auto;
  height: 75%;
  margin-left: 5vw;
  filter: drop-shadow(0 0 1rem rgba(0, 0, 0, 0.17));
  cursor: pointer;
`;

export const EndBtn = styled.img`
  width: auto;
  height: 75%;
  margin-right: 5vw;
  filter: drop-shadow(0 0 1rem rgba(0, 0, 0, 0.17));
  cursor: pointer;
`;

export const Body = styled.div`
  width: 100%;
  height: 100dvh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 2;
`;

export const BodyContainer = styled.div`
  width: 60vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.5rem;
  position: absolute;
  z-index: 1;
`;

export const StoryInput = styled.input`
  width: 60vw;
  height: 5rem;
  background-color: #FFFFFF;
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
`

export const Check = styled.img`
  position: absolute;
  z-index: 2;
  right: 4vw;
  width: 4rem;
  height: auto;
  padding-top: 2rem;
  cursor: pointer;
`;

export const CheckG = styled.img`
  position: absolute;
  z-index: 2;
  right: 4vw;
  width: 4rem;
  height: auto;
  padding-top: 2rem;
  filter: drop-shadow(0px 4px 40px rgba(255, 255, 255, 0.80));
  cursor: pointer;
`;

export const Dong = styled.img`
  width: 20%;
  height: auto;
  position: absolute;
  bottom: 0;
  left: 5%;
  z-index: 6;
  cursor: pointer;
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

// LoadingComp

export const LoadingContainer = styled.div`
  position: absolute;
  z-index: 10;
  width: 100vw;
  height: 100dvh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #FFF 50%;
`;

export const LottieWrapper = styled.div`
  width: 30vw;
  height: auto;
`;

export const LoadingText = styled.p`
  font-family: "BMJUA";
  font-size: 2rem;
  margin-top: -2rem;
  margin-bottom: 2rem;
`;

// Modal

export const ModalContainer = styled.div`
  position: absolute;
  z-index: 20;
  width: 100vw;
  height: 100dvh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(60, 60, 60, 0.8);
`;

export const ModalBox = styled.div`
  position: relative;
  width: 55vw;
  height: 40.2vw;
  margin-top: 3rem;
`;

export const ModalWrapper = styled.div`
  position: absolute;
  z-index: 22;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding: 8.5rem 4rem 4rem 4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const ModalExitBtn = styled.img`
  position: absolute;
  z-index: 23;
  width: 4rem;
  height: 4rem;
  top: 2rem;
  right: -1rem;
  filter: drop-shadow(0 0 0.6rem rgba(0, 0, 0, 0.17));
  cursor: pointer;
`;

export const ModalBG = styled.img`
  position: absolute;
  z-index: 21;
  width: 100%;
  height: 100%;
`;

export const ModalText = styled.p`
  font-family: "BMJUA";
  font-size: 1.6rem;
`;