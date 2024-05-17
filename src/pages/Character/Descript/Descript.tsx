import * as S from "./style";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
// import { useAtom, useAtomValue } from "jotai";
import { btnCheck, btnCheckG } from "../../../assets";
import { btnHome } from "../../../assets";
import { useAtom } from "jotai";
import {
  descriptBG,
  descriptTitle,
  descriptInput,
} from "../../../assets/Character/Draw/Descript";
import { SpeechToText } from "../../../components/SpeechToText/SpeechToText";
import { CharacterLoading } from "../../../components/StoryLoading/CharacterLoading";
import {
  characterDescriptAtom,
  accessTokenAtom,
  canvasImageDataAtom,
  aiImageDataAtom,
  originImageDataAtom,
} from "../../../store/jotaiAtoms";
import apis from "../../../apis/apis";
import { BubbleP } from "../../../components/Bubble/BubbleP";
import { GgummiAnim } from "../../../components/CharacterAnim/GgummiAnim";
import { TTS } from "../../../components/TTS/TTS";

export const Descript = () => {
  const navigate = useNavigate();
  const [act] = useAtom(accessTokenAtom);
  const [canvasImg, ] = useAtom(canvasImageDataAtom);
  const [originImg, setOriginImg] = useAtom(originImageDataAtom);
  const [, setAiImg] = useAtom(aiImageDataAtom);
  const [descript, setDescript] = useAtom(characterDescriptAtom);

  const [showFirst, setShowFirst] = useState(false);
  const [showSecond, setShowSecond] = useState(false);
  const [showThird, setShowThird] = useState(false);

  const [isLoading, setIsLoading] = useState(false);
  const [listening, setListening] = useState(false);

  const startListening = () => {
    setListening(true);
  };

  const stopListening = () => {
    setListening(false);
  };

  const handleSpeechResult = (result: string) => {
    setDescript(result); // 입력된 음성 결과로 설명 업데이트
  };

  const handleInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setDescript(e.target.value);
  };

  useEffect(() => {
    setTimeout(() => {
      setShowFirst(true);
      setTimeout(() => {
        setShowSecond(true);
        setTimeout(() => {
          setShowThird(true);
        }, 3000);
      }, 3500);
    }, 500);
  }, []);

  const onClickHomeBtn = () => {
    navigate("/");
  };

  interface CharacterData {
    prompt: string | null;
    base64Image: string | null;
  }

  const characterData = {
    prompt: descript,
    imageType: "BASE_64",
    base64Image: originImg,
  };
  console.log(characterData);

  const postCharacterData = async (characterData: CharacterData) => {
    const config = {
      headers: {
        Authorization: `Bearer ${act}`,
      },
    };

    if (act) {
      try {
        const res = await apis.post("/character/ai", characterData, config);
        console.log(res.data);
        setOriginImg(res.data.data[0].originUrl);
        setAiImg(res.data.data[0].aiGeneratedImageUrl);
        setIsLoading(false);
        navigate("/character/compareAi");
      } catch (err) {
        console.error(err);
      }
    }
  };

  const changeToAi = () => {
    setIsLoading(true);
    postCharacterData(characterData);
  };

  return (
    <S.Container>
      {isLoading ? (
        <CharacterLoading />
      ) : (
        <>
          <GgummiAnim talkCount={6} />
          {showFirst && (
            <>
              <TTS text="이제 이 친구에 대해 설명해줄래?" speaker="nmeow" />
              <BubbleP text="이제 이 친구에 대해 설명해줄래?" length={31} />
            </>
          )}
          {showSecond && (
            <>
              <TTS
                text="고양이인가? 곰? 아니면 모자를 쓴 남자 아이?"
                speaker="nmeow"
              />
              <BubbleP
                text="고양이인가? 곰? 아니면 모자를 쓴 남자 아이?"
                length={42}
              />
            </>
          )}
          {showThird && (
            <>
              <TTS text="자세하게 알려줄수록 내가 그림을 그리는데 도움이 돼!" speaker="nmeow" />
              <BubbleP text="자세하게 알려줄수록 내가 그림을 그리는데 도움이 돼!" length={47} />
            </>
          )}
          <S.Header>
            <S.Home src={btnHome} alt="홈" onClick={onClickHomeBtn} />
            {descript == "" ? (
              <S.Check src={btnCheck} alt="확인" onClick={changeToAi} />
            ) : (
              <S.Check
                src={btnCheckG}
                alt="확인(활성화)"
                onClick={changeToAi}
              />
            )}
          </S.Header>
          <S.DescriptContainer>
            <SpeechToText
              listening={listening}
              startListening={startListening}
              stopListening={stopListening}
              onSpeechResult={handleSpeechResult}
            />
            <S.DescriptBG src={descriptBG} alt="배경" />
            <S.DescriptContentsWrapper>
              <S.DescriptTextContainer>
                <S.DescriptTitle src={descriptTitle} alt="설명 타이틀" />
                <S.DescriptTextWrapper>
                  <S.DescriptTextBG
                    src={descriptInput}
                    alt="설명 박스 배경"
                  />
                  <S.DescriptTextInput
                    onChange={handleInput}
                    placeholder="캐릭터를 설명해주세요"
                    value={descript}
                  />
                </S.DescriptTextWrapper>
              </S.DescriptTextContainer>
              <S.DescriptImgWrapper>
                <S.DescriptImg src={canvasImg} alt="원본이미지" />
              </S.DescriptImgWrapper>
            </S.DescriptContentsWrapper>
          </S.DescriptContainer>
        </>
      )}
    </S.Container>
  );
};
