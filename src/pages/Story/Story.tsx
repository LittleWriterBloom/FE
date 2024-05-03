import * as S from "./style";
import { useNavigate } from "react-router-dom";
import { bgCloudB, bgCloudP, btnHome } from "../../assets/index";
import { useEffect, useState } from "react";
import { storyFive, storySeven, storyThree } from "../../assets/Story";
import { useAtom } from "jotai";
import { bookLengthAtom, isSDModeAtom } from "../../store/jotaiAtoms";
import { ChaeckAnim } from "../../components/CharacterAnim/ChaeckAnim";
import { BubbleY } from "../../components/Bubble/BubbleY";

export const Story = () => {
  const navigate = useNavigate();
  const [showFirst, setShowFirst] = useState(false);
  const [showSecond, setShowSecond] = useState(false);
  const [, setBookLength] = useAtom(bookLengthAtom);
  const [isSDAtom] = useAtom(isSDModeAtom);

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

  const onClickThree = () => {
    if (isSDAtom) {
      setBookLength(3);
      navigate("/story/createai");
    } else {
      setBookLength(3);
      navigate("/story/create");
    }
  };

  const onClickFive = () => {
    if (isSDAtom) {
      setBookLength(5);
      navigate("/story/createai");
    } else {
      setBookLength(5);
      navigate("/story/create");
    }
  };

  const onClickSeven = () => {
    if (isSDAtom) {
      setBookLength(7);
      navigate("/story/createai");
    } else {
      setBookLength(7);
      navigate("/story/create");
    }
  };

  return (
    <S.Container>
      <ChaeckAnim talkCount={1} />
      {showFirst && <BubbleY text="동화의 길이를 정해보자!" length={23.5} />}
      {showSecond && (
        <BubbleY text="몇줄짜리 동화를 만들어볼까? 3줄? 5줄? 7줄?" length={42} />
      )}
      <S.Bg src={bgCloudP} alt="배경 패턴" />
      <S.BgBottom src={bgCloudB} alt="구름하단" />
      <S.Header>
        <S.Home src={btnHome} alt="홈" onClick={onClickHomeBtn} />
        <S.Logo>동화 길이 정하기</S.Logo>
        <S.Settings src={btnHome} alt="홈" />
      </S.Header>
      <S.Body>
        <S.BtnWrapper>
          <S.Btn onClick={onClickThree}>
            <S.BtnImg src={storyThree} alt="3줄 동화" />
          </S.Btn>
          <S.Btn onClick={onClickFive}>
            <S.BtnImg src={storyFive} alt="5줄 동화" />
          </S.Btn>
          <S.Btn onClick={onClickSeven}>
            <S.BtnImg src={storySeven} alt="7줄 동화" />
          </S.Btn>
        </S.BtnWrapper>
      </S.Body>
    </S.Container>
  );
};
