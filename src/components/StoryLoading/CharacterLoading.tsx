import * as S from "./style";
import { useState, useEffect } from "react";
import Lottie from "react-lottie-player";
import characterLoading from "../../assets/Lottie/Loading/CharacterLoading.json";

export const CharacterLoading = () => {
  const [textToShow, setTextToShow] = useState(""); // 보여질 텍스트
  const [fullText, ] = useState([
    "캐릭터를 멋지게 변신시키는 중이에요.",
    "약 1분 정도 걸려요.",
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
        <Lottie loop animationData={characterLoading} play />
      </S.LottieWrapper>
      <S.LoadingText>{textToShow}<S.Cursor>ㅣ</S.Cursor></S.LoadingText>
    </S.LoadingContainer>
  );
};
