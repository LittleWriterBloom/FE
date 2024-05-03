import { useEffect, useState } from "react";
import {
  ggummiAppear,
  ggummiBase,
  ggummiFront,
  ggummiRight,
  ggummiTalk,
} from "../../assets/Lottie/Ggummi";
import * as S from "./style";
import Lottie from "react-lottie-player";

export const GgummiAnim = () => {
  const [currentAnimationIndex, setCurrentAnimationIndex] = useState(0);
  const [isLastAnimationPlayed, setIsLastAnimationPlayed] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);
  const animations = [
    ggummiAppear,
    ggummiRight,
    ggummiTalk,
    ggummiFront,
    ggummiBase,
  ];

  useEffect(() => {
    // 5초 후에 재생 상태를 false로 변경하여 반복 재생을 멈춤
    const timeout = setTimeout(() => {
      setIsPlaying(false);
    }, 8000);

    return () => clearTimeout(timeout);
  }, []);

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
          loop={index === 2 ? isPlaying : false}
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
