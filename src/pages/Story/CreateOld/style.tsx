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
  width: 74.8vw;
  height: 89.8dvh;
  bottom: 2.1dvh;
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

export const CircleWrapper = styled.div`
  width: auto;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.5rem;
  position: absolute;
  z-index: 13;
  top: 2.2rem;
`;

export const Circle = styled.div`
  width: 1.05rem;
  height: 1.05rem;
  border-radius: 10rem;
  background-color: #BDBDBD;
  box-shadow: 0.15rem 0.15rem 0.3rem 0 rgba(0, 0, 0, 0.20) inset;
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
  z-index: 10;
  bottom: 0;
`;

export const BodyContainer = styled.div`
  width: 60vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  position: absolute;
  z-index: 10;
`;

export const StoryInput = styled.input`
  width: 60vw;
  height: 5rem;
  background-color: #ffffff;
  box-shadow: 0 0.25rem 0.25rem 0 rgba(0, 0, 0, 0.25) inset;
  border-radius: 10rem;
  box-sizing: border-box;
  padding: 0 2rem;
  font-size: 1.8rem;
  text-align: center;
  color: #000;
  margin-top: 7dvh;
  font-family: "BMJUA";
`;

export const StoryCreated = styled.div`
  width: 60vw;
  min-height: 5rem;
  background-color: #ffffff;
  box-shadow: 0 0.25rem 0.25rem 0 rgba(0, 0, 0, 0.25) inset;
  border-radius: 10rem;
  box-sizing: border-box;
  padding: 1rem 2rem;
  font-size: 1.8rem;
  text-align: center;
  color: #000;
  margin-top: 7dvh;
  font-family: "BMJUA";
`;

export const Character = styled.img`
  width: 40vw;
  height: auto;
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
  text-align: center;
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
