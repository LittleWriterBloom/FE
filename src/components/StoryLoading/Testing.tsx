import * as S from "./style";
import Lottie from "react-lottie-player";
// import bloomFlower from "../../assets/Lottie/BloomFlower.json";
import curtain from "../../assets/Lottie/Curtain.json";
import curtainShadow from "../../assets/Lottie/curtain_shadow.json";

export const Testing = () => {
  return (
    <S.LoadingContainer>
      <S.LottieWrapper
        style={{ width: "100vw", height: "100dvh", display: "flex" }}
      >
        <Lottie loop={false} animationData={curtain} play style={{position: "absolute"}}/>
        <Lottie loop={false} animationData={curtainShadow} play style={{position: "absolute"}} />
      </S.LottieWrapper>
    </S.LoadingContainer>
  );
};
