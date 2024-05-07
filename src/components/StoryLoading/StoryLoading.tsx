import * as S from "./style";
import Lottie from "react-lottie-player";
import loadAnim from "../../assets/Lottie/loading.json";
import { useState, useEffect } from "react";

export const StoryLoading = () => {
  const [textToShow, setTextToShow] = useState(""); // 보여질 텍스트
  const [fullText, ] = useState([
    "그림을 그리는 중이에요.",
    "약 10~15초 정도 걸려요.",
  ]); // 전체 텍스트
  const [currentIndex, setCurrentIndex] = useState(0); // 현재 인덱스

  useEffect(() => {
    const interval = setInterval(() => {
      if (textToShow.length === fullText[currentIndex].length) {
        clearInterval(interval);
      } else {
        setTextToShow((prev) => prev + fullText[currentIndex][prev.length]);
      }
    }, 120); // 한 글자씩 보여주는 시간 간격 (ms)

    return () => clearInterval(interval);
  }, [currentIndex, fullText, textToShow]);

  useEffect(() => {
    if (textToShow.length === fullText[currentIndex].length) {
      // 첫 번째 줄의 텍스트가 모두 표시된 경우
      // 두 번째 줄의 텍스트를 설정하기 위해 다음 인덱스로 이동
      setCurrentIndex((prevIndex) =>
        prevIndex === fullText.length - 1 ? 0 : prevIndex + 1
      );
      setTextToShow(""); // 다음 텍스트를 표시하기 전에 초기화
    }
  }, [currentIndex, fullText, textToShow]);

  return (
    <S.LoadingContainer>
      <S.LottieWrapper>
        <Lottie loop animationData={loadAnim} play />
      </S.LottieWrapper>
      <S.LoadingTextWrapper>
        <S.LoadingText>{textToShow}<S.Cursor>ㅣ</S.Cursor></S.LoadingText>
      </S.LoadingTextWrapper>
    </S.LoadingContainer>
  );
};
