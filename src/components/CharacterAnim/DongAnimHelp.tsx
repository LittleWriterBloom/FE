import { useState } from "react";
import {
  dongHelp,
  dongHelpStart,
  dongHelpEnd,
} from "../../assets/Lottie/DongDong";
import * as S from "./style";
import Lottie from "react-lottie-player";

interface DongAnimProps {
  talkCount: number;
}

export const DongAnimHelp: React.FC<DongAnimProps> = ({ talkCount }) => {
  const [currentAnimationIndex, setCurrentAnimationIndex] = useState(0);
  const [isLastAnimationPlayed, setIsLastAnimationPlayed] = useState(false);
  const animations = [
    dongHelpStart,
    ...Array(talkCount).fill(dongHelp),
    dongHelpEnd,
  ];

  const handleAnimationEnd = () => {
    if (currentAnimationIndex === animations.length - 1) {
      // 마지막 로티가 재생된 후에 처리할 로직
      setIsLastAnimationPlayed(true);
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
          loop={false}
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
