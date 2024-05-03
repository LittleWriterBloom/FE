import { useState } from "react";
import { ggummiAppear, ggummiBase, ggummiClap, ggummiFront, ggummiRight, ggummiTalk } from "../../assets/Lottie/Ggummi";
import * as S from "./style";
import Lottie from "react-lottie-player";

export const Testing = () => {
  const [currentAnimationIndex, setCurrentAnimationIndex] = useState(0);
  const [isLastAnimationPlayed, setIsLastAnimationPlayed] = useState(false);
  const animations = [
    ggummiBase,
    ggummiAppear,
    ggummiTalk,
    ggummiRight,
    ggummiFront,
    ggummiClap
  ];

  const handleAnimationEnd = () => {
    if (currentAnimationIndex === animations.length - 1) {
      // 마지막 로티가 재생된 후에 처리할 로직
      setIsLastAnimationPlayed(true);
    } else {
      // 다음 로티 애니메이션을 표시
      setCurrentAnimationIndex(prevIndex => prevIndex + 1);
    }
  };

  return (
    <S.LoadingContainer>
      <S.LottieWrapper
        style={{ width: "100vw", height: "100dvh", display: "flex" }}
      >
        {animations.map((animation, index) => (
          <Lottie
            key={index}
            loop={false}
            animationData={animation}
            play={index === currentAnimationIndex}
            style={{ width: "12vw", display: index === currentAnimationIndex && !isLastAnimationPlayed ? 'block' : 'none' }}
            onComplete={handleAnimationEnd}
          />
        ))}
      </S.LottieWrapper>
    </S.LoadingContainer>
  );
};
