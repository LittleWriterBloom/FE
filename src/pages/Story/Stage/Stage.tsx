import * as S from "./style";
import { useNavigate } from "react-router-dom";
import { btnHome, btnCheck, btnCheckG, dong } from "../../../assets/index";
import { stageBG, textBG } from "../../../assets/Story";
import { btnMic, btnRecord } from "../../../assets";
import { useEffect, useState } from "react";
import { useAtom, useAtomValue } from "jotai";
import { bookBGInit, canvasImageDataAtom } from "../../../store/jotaiAtoms";
import { BubbleG } from "../../../components/Bubble/BubbleG";

export const Stage = () => {
  const navigate = useNavigate();
  const [bg, setBg] = useState("");
  const [, setBgInit] = useAtom(bookBGInit);
  const canvasImageData = useAtomValue(canvasImageDataAtom);
  const [rec, setRec] = useState(false);
  const [showFirst, setShowFirst] = useState(false);
  const [showSecond, setShowSecond] = useState(false);
  const [showThird, setShowThird] = useState(false);
  const [showFourth, setShowFourth] = useState(false);
  const [showFifth, setShowFifth] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowFirst(true);
      setTimeout(() => {
        setShowSecond(true);
        setTimeout(() => {
          setShowThird(true);
          setTimeout(() => {
            setShowFourth(true);
            setTimeout(() => {
              setShowFifth(true);
            }, 2000); 
          }, 2000); 
        }, 2000); 
      }, 2000); 
    }, 500); 
  }, []);

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBg(e.target.value);
  };

  const onClickHomeBtn = () => {
    navigate("/");
  };
  const onClickCheck = () => {
    if (bg === "") {
      alert("동화의 배경을 입력하세요.");
    } else {
      setBgInit(bg);
      navigate("/story");
    }
  };

  const onClickMic = () => {
    setRec(true);
  };
  const onClickRec = () => {
    setRec(false);
  };

  return (
    <S.Container>
      {showFirst && <BubbleG text="어떤 배경으로 동화를 만들어볼까?" length={32} />}
      {showSecond && <BubbleG text="주인공은 지금 어디 있을까?" length={27} />}
      {showThird && <BubbleG text="울창한 숲 속? 물고기 친구들이 가득한 바닷속?" length={42} />}
      {showFourth && <BubbleG text="아니면 무지개빛 가득한 구름 위?" length={31} />}
      {showFifth && <BubbleG text="함께 상상해보자~!" length={20} />}
      <S.Bg src={stageBG} alt="배경" />
      <S.Header>
        <S.Home src={btnHome} alt="홈" onClick={onClickHomeBtn} />
        {bg === "" ? (
          <S.Check src={btnCheck} alt="확인" onClick={onClickCheck} />
        ) : (
          <S.Check src={btnCheckG} alt="확인(활성화)" onClick={onClickCheck} />
        )}
      </S.Header>
      <S.Body>
        <S.BGContainer>
          <S.BGText src={textBG} alt="주인공은 지금 어디?" />
          <S.BGInput
            onChange={handleInput}
            type="name"
            placeholder="이야기 배경"
          />
          {canvasImageData && (
            <S.Character src={canvasImageData} alt="Saved Image" />
          )}
        </S.BGContainer>
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
