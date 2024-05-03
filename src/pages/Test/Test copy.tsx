import styled from "styled-components";
import Slick from "./Slick";
import {
  bgMyCharacters,
  bgMyStories,
  bgStoryMake,
  btnStoryMake,
} from "../../assets/Home";

const SliderItem = styled.div`
  width: 90vw;
  height: 90dvh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SlickWrapper = styled.div`
  width: 100vw;
  height: 100dvh;
  position: absolute;
  z-index: 1;
  background-color: red;
`;

const StoryMakeBG = styled.img`
  width: 90vw;
  height: 100dvh;
  object-fit: cover;
  object-position: top;
  position: absolute;
  z-index: 3;
`;

const StoryMakeBtn = styled.img`
  width: 16vw;
  margin: auto 42vw;
  height: auto;
  position: absolute;
  z-index: 4;
  bottom: 10%;
  cursor: pointer;
`;

// Slick
// const SliderItem = styled.div`
//   width: 100vw;
//   height: 100dvh;
//   display: flex;
//   justify-content: center;
//   overflow: hidden;
//   background-color: red;
//   position: absolute;
//   z-index: 5;
// `;

const items = [
  {
    item: bgStoryMake,
    name: "이미지01",
  },
  {
    item: bgMyStories,
    name: "이미지02",
  },
  {
    item: bgMyCharacters,
    name: "이미지03",
  },
];

export const TestCopy = () => {
  return (
    <SlickWrapper>
      <Slick>
        {items.map((item, index) => (
          <SliderItem key={index}>
            <StoryMakeBG src={item.item} alt={item.name} />
            <StoryMakeBtn src={btnStoryMake} alt="동화 만들기" />
          </SliderItem>
        ))}
      </Slick>
    </SlickWrapper>
  );
};
