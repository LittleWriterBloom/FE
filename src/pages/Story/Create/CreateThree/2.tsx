import * as S from "../style";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { btnHome, dong } from "../../../../assets/index";
import { check, checkG } from "../../../../assets/Story";
import { btnMic, btnRecord } from "../../../../assets";
import { useEffect, useState } from "react";
import { useAtom, useAtomValue } from "jotai";
import Lottie from "react-lottie-player";
import loadAnim from "../../../../assets/Lottie/loading.json";
import {
  accessTokenAtom,
  background1,
  background2,
  bookBGInit,
  bookId,
  canvasImageDataAtom,
  characterId,
  context1,
  context2,
  question1,
  question2,
} from "../../../../store/jotaiAtoms";
import { BubbleG } from "../../../../components/Bubble/BubbleG";
import { btnEnd, createBG, createBook, createBookS } from "../../../../assets/Story/Create";

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

export const CreateThree2 = () => {
  const navigate = useNavigate();
  const [act] = useAtom(accessTokenAtom);
  const canvasImageData = useAtomValue(canvasImageDataAtom);
  const [rec, setRec] = useState(false);
  const [bgInit] = useAtom(bookBGInit);
  const [charId] = useAtom(characterId);
  const [bookid] = useAtom(bookId);
  const [quest1] = useAtom(question1);
  const [text1] = useAtom(context1);
  const [bg1] = useAtom(background1);
  const [story, setStory] = useState("");

  const [, setQuest2] = useAtom(question2);
  const [text2, setText2] = useAtom(context2);
  const [bg2, setBg2] = useAtom(background2);

  const [isCreated, setIsCreated] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const [showFirst, setShowFirst] = useState(false);

  const [clickCount, setClickCount] = useState(0);
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowFirst(true);
    }, 2000);
  }, []);

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setStory(e.target.value);
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

  // const onClickDong = () => {
  //   setIsModal(true);
  // }

  // const onClickExit = () => {
  //   setIsModal(false);
  // }

  const onClickCreate = () => {
    if (story === "") {
      alert("스토리를 입력해주세요.");
    } else {
      setIsLoading(true);
      postBookData(pageData);
    }
  };

  const handleClickDong = () => {
    setClickCount(clickCount + 1);
    if (clickCount >= 3) {
      setIsClicked(true);
      setTimeout(() => {
        setIsClicked(false);
      }, 2000);
    }
  };

  const onClickNext = () => {
    navigate("/story/create-three/3");
  };

  const pageData = {
    backgroundInfo: bgInit,
    characterId: charId,
    previousPages: [
      {
        context: text1,
        backgroundImageUrl: bg1,
        characterActionInfo: "characterActionInfo",
      },
    ],
    userContext: story,
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
          `/api/books/builder/${bookid}/insight`,
          pageData,
          config
        );
        console.log(res.data.data[0]);
        setQuest2(res.data.data[0].generatedQuestions);
        setBg2(res.data.data[0].generatedBackgroundImageUrl);
        setText2(res.data.data[0].refinedSentence);
        setIsLoading(false);
        setIsCreated(true);
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
      {isLoading ? (
        <LoadingComp />
      ) : (
        <>
          {/* {isModal && (
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
          )} */}
          {isCreated ? (
            <>
              {isClicked && (
                <BubbleG text="다음 이야기를 만들어보자!" length={25} />
              )}
            </>
          ) : (
            <>
              {showFirst && (
                <BubbleG text="이제 두번째 이야기를 만들어보자!" length={31} />
              )}
              {clickCount === 1 && (
                <BubbleG text={`${quest1[0]}`} length={50} />
              )}
              {clickCount === 2 && (
                <BubbleG text={`${quest1[1]}`} length={50} />
              )}
              {clickCount === 3 && (
                <BubbleG text={`${quest1[2]}`} length={50} />
              )}
              {isClicked && (
                <BubbleG
                  text="앞선 질문들을 통해 이야기를 상상해보자"
                  length={36}
                />
              )}
            </>
          )}
          <S.Bg src={createBG} alt="배경" />
          <S.Book src={createBook} alt="기본 책" />
          {bg2 && <S.CreateBg src={bg2} alt="생성된 스토리 배경" />}
          <S.BookFrame src={createBookS} alt="책 프레임" />
          <S.Header>
            <S.Home src={btnHome} alt="홈" onClick={onClickHomeBtn} />
            <S.EndBtn
              src={btnEnd}
              alt="확인"
              onClick={onClickEnd}
              style={{ opacity: "0" }}
            />
          </S.Header>
          <S.Body>
            <S.BodyContainer>
              {isCreated ? (
                <S.StoryCreated>{text2}</S.StoryCreated>
              ) : (
                <S.StoryInput
                  onChange={handleInput}
                  type="name"
                  placeholder="동화의 두번째 문장을 지어주세요."
                />
              )}
              {canvasImageData && (
                <S.Character src={canvasImageData} alt="Saved Image" />
              )}
            </S.BodyContainer>
            {isCreated ? (
              <S.CheckG
                src={checkG}
                alt="다음으로(활성화)"
                onClick={onClickNext}
              />
            ) : (
              <S.Check
                src={check}
                alt="다음으로(비활성화)"
                onClick={onClickCreate}
              />
            )}
            <S.Dong src={dong} alt="동동이" onClick={handleClickDong} />
            {rec === false ? (
              <S.Rec
                src={btnMic}
                alt="음성인식(비활성화)"
                onClick={onClickMic}
              />
            ) : (
              <S.Rec
                src={btnRecord}
                alt="인식중(활성화)"
                onClick={onClickRec}
              />
            )}
          </S.Body>
        </>
      )}
    </S.Container>
  );
};
