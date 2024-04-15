import * as S from "../style";
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
  background3,
  bookBGInit,
  bookId,
  canvasImageDataAtom,
  characterId,
  characterNameAtom,
  context1,
  question1,
} from "../../../../store/jotaiAtoms";
import { BubbleG } from "../../../../components/Bubble/BubbleG";
import { btnEnd, createBG, createBook, createBookS } from "../../../../assets/Story/Create";
import apis from "../../../../apis/apis";
interface BookInitDataTypes {
  characterId: number | null;
  backgroundInfo: string | null;
  firstContext: string | null;
}

export const CreateThree = () => {
  const navigate = useNavigate();
  const [story, setStory] = useState("");
  const [nameAtomValue] = useAtom(characterNameAtom);
  const [, setQuest1] = useAtom(question1);
  const canvasImageData = useAtomValue(canvasImageDataAtom);
  const [rec, setRec] = useState(false);
  const [text1, setText1] = useAtom(context1);
  const [act] = useAtom(accessTokenAtom);
  const [charId] = useAtom(characterId);
  const [bgInit] = useAtom(bookBGInit);
  const [bg1, setBg1] = useAtom(background1);
  const [, setBg2] = useAtom(background2);
  const [, setBg3] = useAtom(background3);
  const [, setBookId] = useAtom(bookId);
  const [isCreated, setIsCreated] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [showFirst, setShowFirst] = useState(false);
  const [showSecond, setShowSecond] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    setBookId(null);
    setBg1(null);
    setBg2(null);
    setBg3(null);
    setTimeout(() => {
      setShowFirst(true);
      setTimeout(() => {
        setShowSecond(true);
      }, 2000);
    }, 2000);
  }, []);

  const bookInitData = {
    characterId: charId,
    backgroundInfo: bgInit,
    firstContext: story,
  };

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

  const onClickCreate = () => {
    if (story === "") {
      alert("스토리를 입력해주세요.");
    } else {
      setIsLoading(true);
      postBookInit(bookInitData);
    }
  };

  const onClickDong = () => {
    setIsClicked(true);
    setTimeout(() => {
      setIsClicked(false);
    }, 2000);
  };

  const onClickNext = () => {
    navigate("/story/create-three/2");
  };

  const postBookInit = async (bookInitData: BookInitDataTypes) => {
    const config = {
      headers: {
        Authorization: `Bearer ${act}`,
      },
    };

    if (act) {
      try {
        const res = await apis.post(
          "/books/builder/init",
          bookInitData,
          config
        );
        console.log(res.data);
        setBookId(res.data.data[0].bookId);
        setBg1(res.data.data[0].bookInsightDTO.temporaryGeneratedImageUrl);
        setText1(res.data.data[0].bookInsightDTO.refinedContext);
        setQuest1(res.data.data[0].bookInsightDTO.generatedQuestions);
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
          {isCreated ? (
            <>
              {isClicked && (
                <BubbleG text="다음 이야기를 만들어보자!" length={25} />
              )}
            </>
          ) : (
            <>
              {showFirst && (
                <BubbleG text="이제 이야기를 만들어보자!" length={25} />
              )}
              {showSecond && (
                <BubbleG text="도움이 필요하다면 날 클릭해줘~!" length={31} />
              )}
              {isClicked && (
                <BubbleG
                  text={`${nameAtomValue}(은/는) ${bgInit}에서 무엇을 하고 있어?`}
                  length={52}
                />
              )}
            </>
          )}
          <S.Bg src={createBG} alt="배경" />
          <S.Book src={createBook} alt="기본 책" />
          {bg1 && <S.CreateBg src={bg1} alt="생성된 스토리 배경" />}
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
                <S.StoryCreated>{text1}</S.StoryCreated>
              ) : (
                      <S.StoryInput
                        onChange={handleInput}
                        type="name"
                        placeholder="동화의 첫 문장을 지어주세요."
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
            <S.Dong src={dong} alt="동동이" onClick={onClickDong} />
            {rec === false ? (
              <S.Rec src={btnMic} alt="다음으로(비활성화)" onClick={onClickMic} />
            ) : (
              <S.Rec src={btnRecord} alt="다음으로(활성화)" onClick={onClickRec} />
            )}
          </S.Body>
        </>
      )}
    </S.Container>
  );
};
