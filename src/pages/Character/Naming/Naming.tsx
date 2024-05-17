import * as S from "./style";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
// import { useAtom, useAtomValue } from "jotai";
import { easel, paints } from "../../../assets/Character";
import { useAtom } from "jotai";
import {
  aiImageDataAtom,
  characterNameAtom,
} from "../../../store/jotaiAtoms";
import { BubbleP } from "../../../components/Bubble/BubbleP";
import { namingBG } from "../../../assets/Character";
import { btnHome, btnCheck, btnCheckG } from "../../../assets";
import { GgummiAnimClap } from "../../../components/CharacterAnim/GgummiAnimClap";
import { TTS } from "../../../components/TTS/TTS";
import { SpeechToText } from "../../../components/SpeechToText/SpeechToText";

export const Naming = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [, setNameAtom] = useAtom(characterNameAtom);
  const [aiImg] = useAtom(aiImageDataAtom);
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

  useEffect(() => {
    setTimeout(() => {
      setShowFirst(true);
      setTimeout(() => {
        setShowSecond(true);
        setTimeout(() => {
          setShowThird(true);
        }, 2200);
      }, 2200);
    }, 500);
  }, []);

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const onClickHomeBtn = () => {
    navigate("/");
  };

  const onClickCheck = () => {
    if (name === "") {
      alert("캐릭터 이름을 입력해주세요.");
    } else {
      setNameAtom(name);
      navigate("/character/personality");
    }
  };

  const handleSpeechResult = (result: string) => {
    setName(result); // 입력된 음성 결과로 이름 업데이트
  };

  return (
    <S.Container>
      <SpeechToText
        listening={listening}
        startListening={startListening}
        stopListening={stopListening}
        onSpeechResult={handleSpeechResult}
      />
      <GgummiAnimClap talkCount={1} />
      <S.Bg src={namingBG} alt="배경이미지" />
      {showFirst && (
        <>
          <TTS text="우와~ 정말 잘 그렸다~!!" speaker="nmeow" />
          <BubbleP text="우와~ 정말 잘 그렸다!" length={24} />
        </>
      )}
      {showSecond && (
        <>
          <TTS text="화가의 솜씨인데?!" speaker="nmeow" />
          <BubbleP text="화가의 솜씨인데?!" length={19} />
        </>
      )}
      {showThird && (
        <>
          <TTS text="이 멋진 캐릭터에게 이름을 지어주자!" speaker="nmeow" />
          <BubbleP text="이 멋진 캐릭터에게 이름을 지어주자!" length={34} />
        </>
      )}
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
            value={name}
          />
        </S.NameContainer>
        <S.CharacterImage>
          {/* {canvasImageData && (
            <S.Character src={canvasImageData} alt="Saved Image" />
          )} */}
          {aiImg && <S.Character src={aiImg} alt="Saved Image" />}
          <S.Easel src={easel} alt="이젤" />
        </S.CharacterImage>
        <S.BottomBox />
        <S.BottomPaints src={paints} alt="페인트" />
      </S.Body>
    </S.Container>
  );
};
