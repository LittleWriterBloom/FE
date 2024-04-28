import * as S from "./style";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
// import { useAtom, useAtomValue } from "jotai";
import { easel, paints } from "../../../assets/Character";
import { useAtom } from "jotai";
import { aiImageDataAtom, canvasImageDataAtom, characterNameAtom } from "../../../store/jotaiAtoms";
import { btnMic, btnRecord } from '../../../assets';
import { BubbleP } from "../../../components/Bubble/BubbleP";
import { namingBG } from "../../../assets/Character";
import {
  btnHome,
  btnCheck,
  btnCheckG,
  ggummi,
} from "../../../assets";

export const Naming = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [, setNameAtom] = useAtom(characterNameAtom);
  const [canvasImageData, ] = useAtom(canvasImageDataAtom);
  const [aiImg, ] = useAtom(aiImageDataAtom);
  const [rec, setRec] = useState(false);
  const [showFirst, setShowFirst] = useState(false);
  const [showSecond, setShowSecond] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowFirst(true);
      setTimeout(() => {
        setShowSecond(true);
      }, 2000); 
    }, 500); 
  }, []);
  
  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const onClickHomeBtn = () => {
    navigate("/");
  };

  const onClickCheck = () => {
    if(name === "") {
      alert("캐릭터 이름을 입력해주세요.");
    }
    else {
      setNameAtom(name);
      navigate("/character/personality");
    }
  };

  const onClickMic = () => {
    setRec(true);
  }
  const onClickRec = () => {
    setRec(false);
  }

  return (
    <S.Container>
      <S.Bg src={namingBG} alt="배경이미지" />
      {showFirst && <BubbleP text="우와~ 정말 잘 그렸다! 화가의 솜씨인데?!" length={41} />}
      {showSecond && <BubbleP text="이 멋진 캐릭터에게 이름을 지어주자!" length={36} />}
      <S.Header>
        <S.Home src={btnHome} alt="홈" onClick={onClickHomeBtn} />
        <S.Logo>주인공 만들기</S.Logo>
        {name === "" ? (
          <S.Check src={btnCheck} alt="확인" onClick={onClickCheck} />
        ) : (
          <S.Check src={btnCheckG} alt="확인(활성화)" onClick={onClickCheck} />
        )}
      </S.Header>
      <S.Body>
        <S.NameContainer>
          <S.NameText>이름을 지어주세요!</S.NameText>
          <S.NameInput
            onChange={handleInput}
            type="name" 
            placeholder="캐릭터 이름"
          />
        </S.NameContainer>
        <S.CharacterImage>
          {canvasImageData && (
            <S.Character src={canvasImageData} alt="Saved Image" />
          )}
          {aiImg && (
            <S.Character src={aiImg} alt="Saved Image" />
          )}
          <S.Easel src={easel} alt='이젤' />
        </S.CharacterImage>
        <S.Ggummi src={ggummi} alt='꾸미' />
        <S.BottomBox />
        <S.BottomPaints src={paints} alt="페인트" />
        {rec === false ? (
          <S.Rec src={btnMic} alt="다음으로(비활성화)" onClick={onClickMic} />
        ) : (
          <S.Rec src={btnRecord} alt="다음으로(활성화)" onClick={onClickRec} />
        )}
      </S.Body>
    </S.Container>
  );
};
