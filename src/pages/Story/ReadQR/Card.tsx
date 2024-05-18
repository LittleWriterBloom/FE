import React, { memo } from "react";
import * as S from "./style";
import edgePattern from "../../../assets/edgePattern.png";

interface CardProps {
  image: string;
  content: string;
  isTextOpen: boolean;
  onClickCard: () => void;
}

const Card: React.FC<CardProps> = memo(({ content, image, isTextOpen, onClickCard }) => (
  <S.StyledCard onClick={onClickCard}>
    {isTextOpen ? (
      <S.CardContextContainer>
        <S.CardContext>
          {content.split(".").map((sentence, index, array) => (
            <S.CardDiv key={index}>
              <S.CardDivText>
                {sentence.trim()}
                {index < array.length - 1 && "."}
              </S.CardDivText>
            </S.CardDiv>
          ))}
        </S.CardContext>
        <S.CardPattern src={edgePattern} alt="책 무늬" />
        <S.CardPatternB src={edgePattern} alt="책 무늬" />
      </S.CardContextContainer>
    ) : (
      <S.CardImg src={image} alt="스토리 이미지" />
    )}
  </S.StyledCard>
));

export default Card;
