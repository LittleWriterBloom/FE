import * as S from "./style";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
// import { useAtom, useAtomValue } from "jotai";
import { easel } from "../../../assets/Character";
import { useAtom, useAtomValue } from "jotai";
import { canvasImageDataAtom, characterNameAtom } from "../../../store/jotaiAtoms";
import { btnMic, btnRecord } from '../../../assets';
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
  const canvasImageData = useAtomValue(canvasImageDataAtom);
  const [rec, setRec] = useState(false);

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
