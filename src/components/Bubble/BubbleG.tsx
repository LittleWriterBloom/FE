import * as S from "./style";
import { bubbleG } from "../../assets";

interface BubbleProps {
  text: string;
  length: number;
}

export const BubbleG: React.FC<BubbleProps> = ({ text, length }) => {
  return (
    <S.BubbleContainer style={{bottom: "22dvh"}}>
      <S.BubbleWrapper style={{ width: `${length}rem` }}>
        <S.BubbleImg
          src={bubbleG}
          alt="말풍선"
          style={{ width: `${length}rem` }}
        />
        <S.BubbleText style={{color: "#2c7d78"}}>{text}</S.BubbleText>
      </S.BubbleWrapper>
    </S.BubbleContainer>
  );
};
