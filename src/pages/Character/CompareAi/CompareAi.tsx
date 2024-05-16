import * as S from "./style";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
// import { useAtom, useAtomValue } from "jotai";
import { arrow, btnContinue, compareAi } from "../../../assets";
import { BubbleP } from "../../../components/Bubble/BubbleP";
import { btnHome, ggummi } from "../../../assets";
import { aiImageDataAtom, originImageDataAtom } from "../../../store/jotaiAtoms";
import { useAtom } from "jotai";
import Lottie from "react-lottie-player";
import aibrush from "../../../assets/Character/aibrush.json";
import flow from "../../../assets/Character/flow.json";
import { sketchbook } from "../../../assets/Character";

export const CompareAi = () => {
  const navigate = useNavigate();
  const [showFirst, setShowFirst] = useState(false);
  const [showSecond, setShowSecond] = useState(false);
  const [originImg, ] = useAtom(originImageDataAtom);
  const [aiImg, ] = useAtom(aiImageDataAtom);

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
          <S.CharactersContainerBG src={sketchbook} alt="스케치북배경" />
          <S.CharactersWrapper>
            <S.CharacterWrapper>
              <S.CharacterImage>
                {originImg && <S.Character src={originImg} alt="기본이미지" />}
              </S.CharacterImage>
              <S.CharacterText>내가 그린 그림</S.CharacterText>
            </S.CharacterWrapper>
            <S.Arrow src={arrow} alt="꾸미" />
            <S.CharacterWrapper>
              <S.CharacterImage>
                {aiImg && <S.Character src={aiImg} alt="AI이미지" />}
              </S.CharacterImage>
              <S.CharacterText>AI가 꾸며준 그림</S.CharacterText>
            </S.CharacterWrapper>
          </S.CharactersWrapper>
        </S.CharactersContainer>
        <S.ContinueBtn
          src={btnContinue}
          alt="계속하기"
          onClick={onClickContinueBtn}
        />
        <S.BrushWrapper>
          <Lottie loop={false} animationData={aibrush} play />
        </S.BrushWrapper>
        <S.Ggummi src={ggummi} alt="꾸미" />
      </S.Body>
      <S.LottieWrapper>
        <Lottie loop={false} animationData={flow} play style={{zIndex: "1"}}/>
      </S.LottieWrapper>
    </S.Container>
  );
};
