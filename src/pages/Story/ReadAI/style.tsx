import { styled } from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100dvh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #f7ffd9;
`;
export const Bg = styled.img`
  position: absolute;
  width: 100vw;
  height: 100dvh;
  z-index: 1;
`;

export const Book = styled.img`
  position: absolute;
  width: 75vw;
  height: 90dvh;
  bottom: 2dvh;
  z-index: 2;
`;

export const CreateBg = styled.img`
  position: absolute;
  width: 37.5vw;
  height: 89.7dvh;
  bottom: 2.2dvh;
  left: 12.5vw;
  object-fit: cover;
  z-index: 3;
`;

export const BookFrame = styled.img`
  position: absolute;
  width: 75vw;
  height: 90dvh;
  bottom: 2dvh;
  z-index: 4;
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
  z-index: 12;
  top: 0;
`;

export const Home = styled.img`
  width: auto;
  height: 75%;
  margin-left: 5vw;
  filter: drop-shadow(0 0 1rem rgba(0, 0, 0, 0.17));
  cursor: pointer;
`;

export const BtnContainer = styled.div`
  width: auto;
  height: 12dvh;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 3dvh;
`;

export const EndBtn = styled.img`
  width: auto;
  height: 75%;
  margin-right: 1rem;
  filter: drop-shadow(0 0 1rem rgba(0, 0, 0, 0.17));
  cursor: pointer;
`;

export const SpeakerBtn = styled.img`
  width: auto;
  height: 90%;
  margin-right: 5vw;
  cursor: pointer;
`;

export const Body = styled.div`
  width: 100%;
  height: 100dvh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 10;
  bottom: 0;
`;

export const BodyContainer = styled.div`
  width: 69vw;
  height: 75dvh;
  margin-top: 2dvh;
  display: flex;
  /* flex-direction: column; */
  justify-content: space-between;
  position: absolute;
  z-index: 10;
`;

export const StoryCreatedContainer = styled.div`
  width: 34.4vw;
  height: 75dvh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StoryCreated = styled.div`
  width: 30vw;
  max-height: 58dvh;
  box-sizing: border-box;
  padding: 1rem 2rem;
  font-size: 1.5rem;
  color: #000;
  font-family: "BMJUA";
  overflow: auto;
`;

export const CharacterContainer = styled.div`
  width: 34vw;
  height: 75dvh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

export const Character = styled.img`
  max-width: 30vw;
  height: 22rem;
  object-fit: cover;
  overflow: hidden;
  position: absolute;
  bottom: 1rem;
`;

export const Check = styled.img`
  position: absolute;
  z-index: 11;
  right: 4vw;
  width: 4rem;
  height: auto;
  padding-top: 2rem;
  cursor: pointer;
`;

export const CheckL = styled.img`
  position: absolute;
  z-index: 11;
  left: 4vw;
  width: 4rem;
  height: auto;
  padding-top: 2rem;
  transform: scaleX(-1);
  cursor: pointer;
`;

export const CheckG = styled.img`
  position: absolute;
  z-index: 11;
  right: 4vw;
  width: 4rem;
  height: auto;
  padding-top: 2rem;
  filter: drop-shadow(0px 4px 40px rgba(255, 255, 255, 0.8));
  cursor: pointer;
`;

export const Dong = styled.img`
  width: 20%;
  height: auto;
  position: absolute;
  bottom: 0;
  left: 5%;
  z-index: 13;
  cursor: pointer;
`;

export const Rec = styled.img`
  position: absolute;
  z-index: 11;
  bottom: 5dvh;
  width: 5.5rem;
  height: auto;
  padding-top: 2rem;
  cursor: pointer;
`;

// LoadingComp

export const LoadingContainer = styled.div`
  position: absolute;
  z-index: 20;
  width: 100vw;
  height: 100dvh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #fff 50%;
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
  z-index: 21;
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
  z-index: 23;
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
  z-index: 24;
  width: 4rem;
  height: 4rem;
  top: 2rem;
  right: -1rem;
  filter: drop-shadow(0 0 0.6rem rgba(0, 0, 0, 0.17));
  cursor: pointer;
`;

export const ModalBG = styled.img`
  position: absolute;
  z-index: 22;
  width: 100%;
  height: 100%;
`;

export const ModalText = styled.p`
  font-family: "BMJUA";
  font-size: 1.6rem;
`;
