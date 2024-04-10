import { styled } from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100dvh;
  display: flex;
  flex-direction: column;
  background: linear-gradient(169deg, #66CEF2 70.8%, #FEFFB4 124.47%);
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
  height: 85dvh;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Arrows = styled.img`
  width: 3rem;
  height: auto;
  margin: auto 5vw;
  padding-bottom: 9dvh;
  filter: drop-shadow(0 0.3rem 0.8rem rgba(0, 0, 0, 0.15));
`;

export const StoryMake = styled.div`
  width: 70%;
  height: 85dvh;
  position: relative;
  display: flex;
  justify-content: center;
  overflow: hidden;
`;

export const StoryMakeBG = styled.img`
  width: 100%;
  height: 85dvh;
  object-fit: cover;
  object-position: top;
  bottom: 0;

`;

export const StoryMakeBtn = styled.img`
  width: 15rem;
  height: auto;
  position: absolute;
  z-index: 3;
  bottom: 10%;
  cursor: pointer;
`;
