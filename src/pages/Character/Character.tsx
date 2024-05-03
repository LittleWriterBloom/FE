import * as S from "./style";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { BubbleP } from "../../components/Bubble/BubbleP";
import { bring, ai, draw } from "../../assets/Character";
import { bgCloudB, bgCloudP, btnHome } from "../../assets";
import { aiImageDataAtom, canvasImageDataAtom } from "../../store/jotaiAtoms";
import { useAtom } from "jotai";
import { GgummiAnim } from "../../components/CharacterAnim/GgummiAnim";
import { TTS } from "../../components/TTS/TTS";

export const Character = () => {
  const navigate = useNavigate();
  const [showFirst, setShowFirst] = useState(false);
  const [showSecond, setShowSecond] = useState(false);
  const [showThird, setShowThird] = useState(false);
  const [, setCanvasImg] = useAtom(canvasImageDataAtom);
  const [, setAiImg] = useAtom(aiImageDataAtom);

  useEffect(() => {
    setCanvasImg("");
    setAiImg("");

    setTimeout(() => {
      setShowFirst(true);
      setTimeout(() => {
        setShowSecond(true);
        setTimeout(() => {
          setShowThird(true);
        }, 5500);
      }, 3000);
    }, 1000);
  }, []);

  const onClickHomeBtn = () => {
    navigate("/");
  };

  const onClickDrawBtn = () => {
    navigate("/character/draw");
  };

  const onClickDrawAiBtn = () => {
    navigate("/character/drawai");
  };

  const onClickBringBtn = () => {
    navigate("/character/mycharacters");
  };

  return (
    <S.Container>
      <GgummiAnim talkCount={6}/>
      {showFirst && (
        <>
          <TTS text="동화를 만드려면 주인공이 있어야겠지?" speaker="nmeow" />
          <BubbleP text="동화를 만드려면 주인공이 있어야겠지?" length={36} />
        </>
      )}
      {showSecond && (
        <>
          <TTS text="만들어 놓은 캐릭터를 불러와도 되구, 직접 캐릭터를 그려봐도 좋아!" speaker="nmeow" />
          <BubbleP text="만들어 놓은 캐릭터를 불러와도 되구, 직접 캐릭터를 그려봐도 좋아!" length={58} />
        </>
      )}
      {showThird && (
        <>
          <TTS text="AI와 함께 캐릭터를 그려보는 건 어때?" speaker="nmeow" />
          <BubbleP text="AI와 함께 캐릭터를 그려보는 건 어때?" length={36} />
        </>
      )}
      <S.Bg src={bgCloudP} alt="배경 패턴" />
      <S.BgBottom src={bgCloudB} alt="구름하단" />
      <S.Header>
        <S.Home src={btnHome} alt="홈" onClick={onClickHomeBtn} />
        <S.Logo>주인공 만들기</S.Logo>
        <S.Settings src={bring} alt="캐릭터 불러오기" />
        <S.Bring src={bring} alt="캐릭터 불러오기" onClick={onClickBringBtn} />
      </S.Header>
      <S.Body>
        <S.BtnWrapper>
          <S.Btn onClick={onClickDrawBtn}>
            <S.BtnImg src={draw} alt="버튼" />
          </S.Btn>
          <S.Btn onClick={onClickDrawAiBtn}>
            <S.BtnImg src={ai} alt="버튼" />
          </S.Btn>
          {/* <S.Btn>
            <S.BtnImg src={paint} alt="버튼" />
          </S.Btn> */}
        </S.BtnWrapper>
      </S.Body>
    </S.Container>
  );
};
