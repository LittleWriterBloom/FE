import { styled } from "styled-components";

export const Container = styled.div`
  width: auto;
  height: 100dvh;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
`;

export const Bg = styled.img`
  position: absolute;
  z-index: 2;
  width: 100vw;
  height: 100dvh;
  object-fit: cover;
  margin: 0;
`;

export const Book = styled.img`
  position: absolute;
  z-index: 3;
  width: 48vw;
  height: auto;
  object-fit: cover;
  bottom: 6dvh;
`;

export const LottieWrapper = styled.div`
  width: 100vw;
  height: 100dvh;
  position: absolute;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  padding: 0;
`

export const Header = styled.div`
  width: 100%;
  height: 12dvh;
  margin-top: 3dvh;
  position: absolute;
  z-index: 5;
`;

export const Home = styled.img`
  width: auto;
  height: 75%;
  margin-left: 5vw;
  filter: drop-shadow(0 0 1rem rgba(178, 53, 53, 0.17));
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
  height: 88dvh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;
  position: absolute;
  z-index: 4;
  margin-top: 5.5dvh;
`;

export const Personality = styled.p`
  font-family: 'BMJUA';
  font-size: 2rem;
`;

export const Name = styled.p`
  font-family: 'BMJUA';
  font-size: 3rem;
  margin-bottom: 0.5rem;
`;

export const Character = styled.img`
  width: 40vw;
  height: auto;
`