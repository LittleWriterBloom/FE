import { styled } from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100dvh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #FFECBB;
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

// Descript

export const DescriptContainer = styled.div`
  width: 100%;
  height: 100dvh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

export const DescriptBG = styled.img`
  width: 100%;
  height: 100dvh;
  object-fit: cover;
  position: absolute;
  z-index: 1;
`;

export const DescriptContentsWrapper = styled.div`
  width: 74%;
  height: 30rem;
  margin-top: 1rem;
  position: absolute;
  z-index: 2;
  display: flex;
  justify-content: space-between;
`;

export const DescriptImgWrapper = styled.div`
  width: 43%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 2.6vw;
`;

export const DescriptImg = styled.img`
  width: 100%;
  height: 27rem;
  object-fit: cover;
`;

export const DescriptTextContainer = styled.div`
  width: 45%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const DescriptTitle = styled.img`
  width: 100%;
  height: auto;
  margin-bottom: 2rem;
`;

export const DescriptTextWrapper = styled.div`
  width: 100%;
  height: 15rem;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const DescriptTextBG = styled.img`
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 3;
`;

export const DescriptTextInput = styled.textarea`
  width: 85%;
  height: 75%;
  font-size: 2rem;
  line-height: 4.1rem;
  font-family: "BMJUA";
  overflow-y: auto;
  position: absolute;
  z-index: 4;
  resize: none;
  border: none;
  &:focus {
    outline: none;
  }
`;