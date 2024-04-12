import * as S from "./style";
import { useNavigate } from "react-router-dom";
import { btnHome, dong } from "../../assets/index";
import { BubbleG } from "../../components/Bubble/BubbleG";
import { useEffect, useState } from "react";

export const Story = () => {
  const navigate = useNavigate();
  const [showFirst, setShowFirst] = useState(false);
  const [showSecond, setShowSecond] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowFirst(true);
      setTimeout(() => {
        setShowSecond(true);
      }, 2000); 
    }, 2000); 
  }, []);

  const onClickHomeBtn = () => {
    navigate("/");
  };

  const onClickThree = () => {
    navigate("/story/create-three");
  };
  const onClickFive = () => {
    navigate("/story/create-five");
  };

  return (
    <S.Container>
      {showFirst && <BubbleG text="동화의 길이를 정해보자!" length={23.5} />}
      {showSecond && <BubbleG text="몇줄짜리 동화를 만들어볼까? 3줄? 5줄?" length={37} />}
      <S.Header>
        <S.Home src={btnHome} alt="홈" onClick={onClickHomeBtn} />
        <S.Logo>동화 길이 정하기</S.Logo>
        <S.Settings src={btnHome} alt="홈" />
      </S.Header>
      <S.Body>
        <S.BtnWrapper>
          <S.Btn onClick={onClickThree}>
            <S.BtnImg />
            <S.BtnContent>
              3줄
              <br />
              동화
            </S.BtnContent>
          </S.Btn>
          <S.Btn onClick={onClickFive}>
            <S.BtnImg />
            <S.BtnContent>
              5줄
              <br />
              동화
            </S.BtnContent>
          </S.Btn>
        </S.BtnWrapper>
        <S.Dong src={dong} alt="꾸미" />
      </S.Body>
    </S.Container>
  );
};