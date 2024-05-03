import * as S from "./style";
import { bubbleY } from "../../assets";

interface BubbleProps {
  text: string;
  length: number;
}

export const BubbleY: React.FC<BubbleProps> = ({ text, length }) => {
  return (
    <S.BubbleContainer>
      <S.BubbleWrapper style={{ width: `${length}rem` }}>
        <S.BubbleImg
          src={bubbleY}
          alt="말풍선"
          style={{ width: `${length}rem` }}
        />
        <S.BubbleText style={{color: "#898633"}}>{text}</S.BubbleText>
      </S.BubbleWrapper>
    </S.BubbleContainer>
  );
};
