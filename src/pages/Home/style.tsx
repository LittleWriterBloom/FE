import { styled } from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100dvh;
  display: flex;
  flex-direction: column;
  background: #66cef2;
`;

export const Header = styled.div`
  width: 100%;
  height: 12dvh;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-top: 3dvh;
  position: absolute;
  z-index: 10;
  top: 0;
`;

export const Profile = styled.img`
  width: auto;
  height: 75%;
  margin-left: 5vw;
  filter: drop-shadow(0 0 1rem rgba(0, 0, 0, 0.17));
  cursor: pointer;
`;

export const Logo = styled.img`
  width: auto;
  height: 100%;
`;

export const Settings = styled.img`
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
  flex-direction: row;
  align-items: center;
  justify-content: center;
  position: absolute;
  z-index: 1;
`;

export const ArrowsWrapper = styled.div`
  width: 3rem;
  height: 100dvh;
  position: absolute;
  z-index: 9;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Arrows = styled.img`
  width: 3rem;
  height: auto;
  filter: drop-shadow(0.1rem 0.3rem 0.35rem rgba(0, 0, 0, 0.25));
  position: absolute;
  z-index: 9;
  cursor: pointer;
`;

export const SlickWrapper = styled.div`
  width: 100vw;
  height: 100dvh;
  position: absolute;
  z-index: 1;
`;

export const StoryMakeBG = styled.img`
  width: 100vw;
  height: 100dvh;
  object-fit: cover;
  object-position: top;
  position: absolute;
  z-index: 3;
`;

export const StoryMakeBtn = styled.img`
  width: 16vw;
  margin: auto 42vw;
  height: auto;
  position: absolute;
  z-index: 4;
  bottom: 10%;
  cursor: pointer;
`;

// Slick
export const SliderItem = styled.div`
  width: 100vw;
  height: 100dvh;
  display: flex;
  align-items: center;
  justify-content: center;
`;
