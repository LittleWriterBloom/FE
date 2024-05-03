import { useState } from "react";
import {
  chaeckBase,
  chaeckAppear,
  chaeckTalk,
  chaeckRight,
  chaeckFront,
} from "../../assets/Lottie/ChackChack";
import * as S from "./style";
import Lottie from "react-lottie-player";

interface ChaeckAnimProps {
  talkCount: number;
}

export const ChaeckAnim: React.FC<ChaeckAnimProps> = ({ talkCount }) => {
  const [currentAnimationIndex, setCurrentAnimationIndex] = useState(0);
  const [isLastAnimationPlayed, setIsLastAnimationPlayed] = useState(false);
  const animations = [
    chaeckAppear,
    chaeckRight,
    ...Array(talkCount).fill(chaeckTalk),
    chaeckFront,
    chaeckBase,
  ];

  const handleAnimationEnd = () => {
    if (currentAnimationIndex === animations.length - 1) {
      // 마지막 로티가 재생된 후에 처리할 로직
      setIsLastAnimationPlayed(false);
    } else {
      // 다음 로티 애니메이션을 표시
      setCurrentAnimationIndex((prevIndex) => prevIndex + 1);
    }
  };

  return (
    <S.LoadingContainer>
      {animations.map((animation, index) => (
        <Lottie
          key={index}
          loop={index === animations.length - 1 ? true : false}
          animationData={animation}
          play={index === currentAnimationIndex}
          style={{
            width: "30rem",
            marginBottom: "-0.41rem",
            display:
              index === currentAnimationIndex && !isLastAnimationPlayed
                ? "block"
                : "none",
          }}
          onComplete={handleAnimationEnd}
        />
      ))}
    </S.LoadingContainer>
  );
};
