import * as S from "./style";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
// import { useAtom, useAtomValue } from "jotai";
import { aiBrush, arrow, btnContinue, compareAi } from "../../../../assets";
import { BubbleP } from "../../../../components/Bubble/BubbleP";
import { btnHome, ggummi } from "../../../../assets";

interface ImageProps {
  canvasImg: string;
  aiImg: string;
}
export const CompareAi: React.FC<ImageProps> = ({ canvasImg, aiImg }) => {
  const navigate = useNavigate();
  const [showFirst, setShowFirst] = useState(false);
  const [showSecond, setShowSecond] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowFirst(true);
      setTimeout(() => {
        setShowSecond(true);
      }, 2000);
    }, 500);
  }, []);

  const onClickHomeBtn = () => {
    navigate("/");
  };

  const onClickContinueBtn = () => {
    navigate("/character/naming");
  };

  return (
    <S.Container>
      {showFirst && (
        <BubbleP text="우와~ 캐릭터가 더 멋있어졌어!" length={31} />
      )}
      {showSecond && (
        <BubbleP text="AI가 캐릭터를 더 멋있게 꾸며줬구나~!" length={35} />
      )}
      <S.Header>
        <S.Home src={btnHome} alt="홈" onClick={onClickHomeBtn} />
      </S.Header>
      <S.Body>
        <S.Title src={compareAi} alt="꾸미" />
        <S.CharactersContainer>
          <S.CharacterWrapper>
            <S.CharacterText>내가 그린 그림</S.CharacterText>
            <S.CharacterImage>
              {canvasImg && <S.Character src={canvasImg} alt="기본이미지" />}
            </S.CharacterImage>
          </S.CharacterWrapper>
          <S.Arrow src={arrow} alt="꾸미" />
          <S.CharacterWrapper>
            <S.CharacterText>AI가 꾸며준 그림</S.CharacterText>
            <S.CharacterImage>
              {aiImg && <S.Character src={aiImg} alt="AI이미지" />}
            </S.CharacterImage>
          </S.CharacterWrapper>
        </S.CharactersContainer>
        <S.ContinueBtn
          src={btnContinue}
          alt="계속하기"
          onClick={onClickContinueBtn}
        />
        <S.Brush src={aiBrush} alt="꾸미" />
        <S.Ggummi src={ggummi} alt="꾸미" />
      </S.Body>
    </S.Container>
  );
};
