import * as S from "./style";
import { bubbleP } from "../../assets";

interface BubbleProps {
  text: string;
  length: number;
}

export const BubbleP: React.FC<BubbleProps> = ({ text, length }) => {
  return (
    <S.BubbleContainer>
      <S.BubbleWrapper style={{ width: `${length}rem` }}>
        <S.BubbleImg
          src={bubbleP}
          alt="말풍선"
          style={{ width: `${length}rem` }}
        />
        <S.BubbleText style={{color: "#C15794"}}>{text}</S.BubbleText>
      </S.BubbleWrapper>
    </S.BubbleContainer>
  );
};
