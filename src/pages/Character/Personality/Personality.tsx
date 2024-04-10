import * as S from "./style";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
// import { useAtom, useAtomValue } from "jotai";
import { easel } from "../../../assets/Character";
import { useAtom, useAtomValue } from "jotai";
import { canvasImageDataAtom, characterPersonalityAtom } from "../../../store/jotaiAtoms";
import { btnMic, btnRecord } from '../../../assets';
import {
  btnHome,
  btnCheck,
  btnCheckG,
  ggummi,
} from "../../../assets";

export const Personality = () => {
  const navigate = useNavigate();
  const [personality, setPersonality] = useState("");
  const [, setPersonalityAtom] = useAtom(characterPersonalityAtom);
  const canvasImageData = useAtomValue(canvasImageDataAtom);
  const [rec, setRec] = useState(false);

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPersonality(e.target.value);
  };

  const onClickHomeBtn = () => {
    navigate("/");
  };

  const onClickCheck = () => {
    if(personality === "") {
      alert("캐릭터의 성격을 입력해주세요.");
    }
    else {
      setPersonalityAtom(personality);
      navigate("/character/complete");
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
      <S.Header>
        <S.Home src={btnHome} alt="홈" onClick={onClickHomeBtn} />
        <S.Logo>주인공 만들기</S.Logo>
        {personality === "" ? (
          <S.Check src={btnCheck} alt="확인" onClick={onClickCheck} />
        ) : (
          <S.Check src={btnCheckG} alt="확인(활성화)" onClick={onClickCheck} />
        )}
      </S.Header>
      <S.Body>
        <S.NameContainer>
          <S.NameText>어떤 성격을 갖고 있나요?</S.NameText>
          <S.NameInput
            onChange={handleInput}
            type="name" 
            placeholder="캐릭터 성격"
          />
        </S.NameContainer>
        <S.CharacterImage>
          {canvasImageData && (
            <S.Character src={canvasImageData} alt="Saved Image" />
          )}
          <S.Easel src={easel} alt='이젤' />
        </S.CharacterImage>
        <S.Ggummi src={ggummi} alt='꾸미' />
        <S.BottomBox />
        {rec === false ? (
          <S.Rec src={btnMic} alt="다음으로(비활성화)" onClick={onClickMic} />
        ) : (
          <S.Rec src={btnRecord} alt="다음으로(활성화)" onClick={onClickRec} />
        )}
      </S.Body>
    </S.Container>
  );
};
