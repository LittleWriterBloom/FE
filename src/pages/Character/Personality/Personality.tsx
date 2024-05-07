import * as S from "./style";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
// import { useAtom, useAtomValue } from "jotai";
import { easel, namingBG, paints } from "../../../assets/Character";
import { useAtom } from "jotai";
import {
  aiImageDataAtom,
  canvasImageDataAtom,
  characterNameAtom,
  characterPersonalityAtom,
} from "../../../store/jotaiAtoms";
import { BubbleP } from "../../../components/Bubble/BubbleP";
import { btnCheck, btnCheckG, btnHome } from "../../../assets";
import { GgummiAnim } from "../../../components/CharacterAnim/GgummiAnim";
import { TTS } from "../../../components/TTS/TTS";
import { SpeechToText } from "../../../components/SpeechToText/SpeechToText";

export const Personality = () => {
  const navigate = useNavigate();
  const [personality, setPersonality] = useState("");
  const [, setPersonalityAtom] = useAtom(characterPersonalityAtom);
  const [canvasImageData] = useAtom(canvasImageDataAtom);
  const [aiImg] = useAtom(aiImageDataAtom);
  const [name] = useAtom(characterNameAtom);
  const [showFirst, setShowFirst] = useState(false);
  const [showSecond, setShowSecond] = useState(false);
  const [showThird, setShowThird] = useState(false);
  const [listening, setListening] = useState(false);

  const startListening = () => {
    setListening(true);
  };

  const stopListening = () => {
    setListening(false);
  };

  const handleSpeechResult = (result: string) => {
    setPersonality(result); // 입력된 음성 결과로 이름 업데이트
  };

  useEffect(() => {
    setTimeout(() => {
      setShowFirst(true);
      setTimeout(() => {
        setShowSecond(true);
        setTimeout(() => {
          setShowThird(true);
        }, 2200);
      }, 2400);
    }, 500);
  }, []);

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPersonality(e.target.value);
  };

  const onClickHomeBtn = () => {
    navigate("/");
  };

  const onClickCheck = () => {
    if (personality === "") {
      alert("캐릭터의 성격을 입력해주세요.");
    } else {
      setPersonalityAtom(personality);
      navigate("/character/complete");
    }
  };

  return (
    <S.Container>
      <SpeechToText
        listening={listening}
        startListening={startListening}
        stopListening={stopListening}
        onSpeechResult={handleSpeechResult}
      />
      <GgummiAnim talkCount={3} />
      <S.Bg src={namingBG} alt="배경이미지" />
      {showFirst && (
        <>
          <TTS text={`이 친구의 이름은 ${name}이구나~`} speaker="nmeow" />
          <BubbleP text={`이 친구의 이름은 ${name}이구나~`} length={34} />
        </>
      )}
      {showSecond && (
        <>
          <TTS text={`${name}은 어떤 친구야?`} speaker="nmeow" />
          <BubbleP text={`${name}(은/는) 어떤 친구야?`} length={28} />
        </>
      )}
      {showThird && (
        <>
          <TTS
            text="활발해? 소심해? 무서움이 많아? 어떤 친구일까~?"
            speaker="nmeow"
          />
          <BubbleP
            text="활발해? 소심해? 무서움이 많아? 어떤 친구일까~?"
            length={47}
          />
        </>
      )}
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
          <S.NameText>{name}(는/은) 어떤 친구야?</S.NameText>
          <S.NameInput
            onChange={handleInput}
            type="name"
            placeholder="캐릭터 성격"
            value={personality}
          />
        </S.NameContainer>
        <S.CharacterImage>
          {canvasImageData && (
            <S.Character src={canvasImageData} alt="Saved Image" />
          )}
          {aiImg && <S.Character src={aiImg} alt="Saved Image" />}
          <S.Easel src={easel} alt="이젤" />
        </S.CharacterImage>
        <S.BottomBox />
        <S.BottomPaints src={paints} alt="페인트" />
      </S.Body>
    </S.Container>
  );
};
