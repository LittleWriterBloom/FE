import styled, { keyframes } from "styled-components";
import { bubbleP } from "../../assets";

interface BubbleProps {
  text: string;
  length: number;
}

export const BubbleP: React.FC<BubbleProps> = ({ text, length }) => {
  return (
    <BubbleContainer>
      <BubbleWrapper style={{ width: `${length}rem` }}>
        <BubbleImg
          src={bubbleP}
          alt="말풍선"
          style={{ width: `${length}rem` }}
        />
        <BubbleText>{text}</BubbleText>
      </BubbleWrapper>
    </BubbleContainer>
  );
};

const fadeInOut = keyframes`
  0% {
    opacity: 0;
  }
  20% {
    opacity: 1;
  }
  75% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`;

const BubbleContainer = styled.div`
  width: auto;
  height: 5.2rem;
  position: absolute;
  z-index: 50;
  left: 27vw;
  bottom: 15dvh;
  display: flex;
  align-items: flex-start;
  animation: ${fadeInOut} 2s linear forwards;
`;

const BubbleWrapper = styled.div`
  height: 5.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const BubbleImg = styled.img`
  height: 5.2rem;
  position: absolute;
  z-index: 51;
  filter: drop-shadow(0 0.25rem 0.25rem rgba(0, 0, 0, 0.25));
`;

const BubbleText = styled.p`
  position: absolute;
  z-index: 52;
  font-size: 2.1rem;
  font-family: "BMJUA";
  color: #c15794;
  padding-left: 1rem;
`;
