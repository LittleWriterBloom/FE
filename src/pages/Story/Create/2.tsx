import * as S from "./style";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { btnHome, btnX, dong } from "../../../assets/index";
import { btnEnd, check, checkG, questModal } from "../../../assets/Story";
import { btnMic, btnRecord } from "../../../assets";
import { useEffect, useState } from "react";
import { useAtom, useAtomValue } from "jotai";
import Lottie from "react-lottie-player";
import loadAnim from "../../../assets/Lottie/loading.json";
import {
  accessTokenAtom,
  background1,
  background2,
  bookBGInit,
  bookId1,
  canvasImageDataAtom,
  characterId,
  context1,
  question2,
} from "../../../store/jotaiAtoms";

interface PreviousPage {
  context: string | null;
  backgroundImageUrl: string | null;
  characterActionInfo: string;
}

interface pageDataTypes {
  backgroundInfo: string | null;
  characterId: number | null;
  previousPages: PreviousPage[];
  userContext: string | null;
  characterActionInfo: string;
}

export const Create2 = () => {
  const navigate = useNavigate();
  const [story2, setStory2] = useState("");
  const canvasImageData = useAtomValue(canvasImageDataAtom);
  const [rec, setRec] = useState(false);
  const [act] = useAtom(accessTokenAtom);
  const [charId] = useAtom(characterId);
  const [bgInit] = useAtom(bookBGInit);
  const [bookid1] = useAtom(bookId1);
  const [bg1] = useAtom(background1);
  const [text1] = useAtom(context1);
  const [bgSecond, setBgSecond] = useAtom(background2);
  const [quest2, setQuest2] = useAtom(question2);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isModal, setIsModal] = useState(false);

  useEffect(() => {
    if (!isLoaded) {
      postBookData(pageData);
    }
  },)
  
  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setStory2(e.target.value);
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
    navigate("/story/create/3");
  };

  const onClickDong = () => {
    setIsModal(true);
  }

  const onClickExit = () => {
    setIsModal(false);
  }

  const pageData = {
    backgroundInfo: bgInit,
    characterId: charId,
    previousPages: [
      {
        context: text1,
        backgroundImageUrl: bg1,
        characterActionInfo: "characterActionInfo"
      }
    ],
    userContext: story2,
    characterActionInfo: "characterActionInfo",
  };

  const postBookData = async (pageData: pageDataTypes) => {
    const config = {
      headers: {
        Authorization: `Bearer ${act}`,
      },
    };

    if (act) {
      try {
        const res = await axios.post(
          `/api/books/builder/${bookid1}/insight`,
          pageData,
          config
        );
        console.log(res.data.data[0]);
        setBgSecond(res.data.data[0].generatedBackgroundImageUrl);
        const quests = res.data.data[0].generatedQuestions.split("\n");
        setQuest2(quests);
        setIsLoaded(true);
      } catch (err) {
        console.error(err);
      }
    }
  };

  const LoadingComp = () => {
    return (
      <S.LoadingContainer>
        <S.LottieWrapper>
          <Lottie loop animationData={loadAnim} play />
        </S.LottieWrapper>
        <S.LoadingText>그림 그리는 중 ...</S.LoadingText>
      </S.LoadingContainer>
    );
  };

  return (
    <S.Container>
      {isLoaded ? (
        <>
          {isModal && (
            <S.ModalContainer>
              <S.ModalBox>
                <S.ModalBG src={questModal} alt="모달 배경" />
                <S.ModalWrapper>
                  <S.ModalExitBtn src={btnX} alt="모달 나가기" onClick={onClickExit}/>
                  <S.ModalText>{quest2[0]}</S.ModalText>
                  <S.ModalText>{quest2[1]}</S.ModalText>
                  <S.ModalText>{quest2[2]}</S.ModalText>
                </S.ModalWrapper>
              </S.ModalBox>
            </S.ModalContainer>
          )}
          <S.Header>
            <S.Home src={btnHome} alt="홈" onClick={onClickHomeBtn} />
            <S.EndBtn src={btnEnd} alt="확인" onClick={onClickEnd} />
          </S.Header>
          <S.Body>
            {bgSecond && <S.Bg src={bgSecond} alt="스토리 배경" />}
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
            {story2 === "" ? (
              <S.Check
                src={check}
                alt="다음으로(비활성화)"
                onClick={() => alert("스토리를 입력해주세요.")}
              />
            ) : (
              <S.CheckG src={checkG} alt="다음으로(활성화)" onClick={onClickNext} />
            )}
            <S.Dong src={dong} alt="동동이" onClick={onClickDong}/>
            {rec === false ? (
              <S.Rec src={btnMic} alt="음성인식(비활성화)" onClick={onClickMic} />
            ) : (
              <S.Rec src={btnRecord} alt="인식중(활성화)" onClick={onClickRec} />
            )}
          </S.Body>
        </>
      ) : (
        <LoadingComp />
      )}
    </S.Container>
  );
};
