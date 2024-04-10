import * as S from "./style";
import { useNavigate } from "react-router-dom";
import { btnHome, dong } from "../../../assets/index";
import { btnEnd, check, checkG } from "../../../assets/Story";
import { btnMic, btnRecord } from "../../../assets";
import { useState } from "react";
import { useAtom, useAtomValue } from "jotai";
import {
  background1,
  canvasImageDataAtom,
  context1
} from "../../../store/jotaiAtoms";

export const Create = () => {
  const navigate = useNavigate();
  const [story1, setStory1] = useState("");
  const canvasImageData = useAtomValue(canvasImageDataAtom);
  const [rec, setRec] = useState(false);
  const [initImgUrl] = useAtom(background1);
  const [, setText1] = useAtom(context1);

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setStory1(e.target.value);
  };

  const onClickHomeBtn = () => {
    navigate("/");
  };
  const onClickEnd = () => {
    navigate("/story/title");
  };

  const onClickMic = () => {
    setRec(true);
  };
  const onClickRec = () => {
    setRec(false);
  };

  const onClickNext = () => {
    setText1(story1);
    navigate("/story/create/2");
  };

  return (
    <S.Container>
      <S.Header>
        <S.Home src={btnHome} alt="홈" onClick={onClickHomeBtn} />
        <S.EndBtn src={btnEnd} alt="확인" onClick={onClickEnd} />
      </S.Header>
      <S.Body>
        {initImgUrl && <S.Bg src={initImgUrl} alt="스토리 배경" />}
        <S.BodyContainer>
          <S.StoryInput
            onChange={handleInput}
            type="name"
            placeholder="동화의 첫 문장을 지어주세요."
          />
          {canvasImageData && (
            <S.Character src={canvasImageData} alt="Saved Image" />
          )}
        </S.BodyContainer>
        {story1 === "" ? (
          <S.Check
            src={check}
            alt="다음으로(비활성화)"
            onClick={() => alert("스토리를 입력해주세요.")}
          />
        ) : (
          <S.CheckG src={checkG} alt="다음으로(활성화)" onClick={onClickNext} />
        )}
        <S.Dong src={dong} alt="동동이" />
        {rec === false ? (
          <S.Rec src={btnMic} alt="음성인식(비활성화)" onClick={onClickMic} />
        ) : (
          <S.Rec src={btnRecord} alt="인식중(활성화)" onClick={onClickRec} />
        )}
      </S.Body>
    </S.Container>
  );
};
