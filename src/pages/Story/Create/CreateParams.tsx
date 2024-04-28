import * as S from "./style";
import { useNavigate } from "react-router-dom";
import { btnHome, dong } from "../../../assets/index";
import { check, checkG } from "../../../assets/Story";
import { btnMic, btnRecord } from "../../../assets";
import { useEffect, useState } from "react";
import { useAtom, useAtomValue } from "jotai";
import Lottie from "react-lottie-player";
import loadAnim from "../../../assets/Lottie/loading.json";
import {
  accessTokenAtom,
  bgAtom2,
  bgAtom3,
  bgAtom4,
  bgAtom5,
  bgAtom6,
  bgAtom7,
  bookLengthAtom,
  canvasImageDataAtom,
  contextAtom2,
  contextAtom3,
  contextAtom4,
  contextAtom5,
  contextAtom6,
  contextAtom7,
  questAtom1,
  questAtom2,
  questAtom3,
  questAtom4,
  questAtom5,
  questAtom6,
  questAtom7,
} from "../../../store/jotaiAtoms";
import { BubbleG } from "../../../components/Bubble/BubbleG";
import {
  btnEnd,
  createBG,
  createBook,
  createBookS,
} from "../../../assets/Story/Create";
import apis from "../../../apis/apis";

interface pageDataTypes {
  userContext: string | null;
  characterActionInfo: string;
}

export const CreateParams = () => {
  const navigate = useNavigate();
  const [pageNum, setPageNum] = useState(2);
  const [bookLength] = useAtom(bookLengthAtom);
  const [act] = useAtom(accessTokenAtom);
  const canvasImageData = useAtomValue(canvasImageDataAtom);
  const [rec, setRec] = useState(false);
  const [quest1] = useAtom(questAtom1);
  const [story, setStory] = useState("");

  const [quest2, setQuest2] = useAtom(questAtom2);
  const [text2, setText2] = useAtom(contextAtom2);
  const [bg2, setBg2] = useAtom(bgAtom2);

  const [quest3, setQuest3] = useAtom(questAtom3);
  const [text3, setText3] = useAtom(contextAtom3);
  const [bg3, setBg3] = useAtom(bgAtom3);

  const [quest4, setQuest4] = useAtom(questAtom4);
  const [text4, setText4] = useAtom(contextAtom4);
  const [bg4, setBg4] = useAtom(bgAtom4);

  const [quest5, setQuest5] = useAtom(questAtom5);
  const [text5, setText5] = useAtom(contextAtom5);
  const [bg5, setBg5] = useAtom(bgAtom5);

  const [quest6, setQuest6] = useAtom(questAtom6);
  const [text6, setText6] = useAtom(contextAtom6);
  const [bg6, setBg6] = useAtom(bgAtom6);

  const [, setQuest7] = useAtom(questAtom7);
  const [text7, setText7] = useAtom(contextAtom7);
  const [bg7, setBg7] = useAtom(bgAtom7);

  const [isCreated, setIsCreated] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const [showFirst, setShowFirst] = useState(false);

  const [clickCount, setClickCount] = useState(0);
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowFirst(true);
    }, 500);
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
    setIsCreated(false);
    setClickCount(0);
    setPageNum((prevPageNum) => prevPageNum + 1);
    navigate(`/story/create/${pageNum + 1}`);
  };

  const pageData = {
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
        const res = await apis.post(`/books/builder/insight`, pageData, config);
        console.log(res.data.data[0]);
        if (pageNum === 2) {
          setQuest2(res.data.data[0].bookInsight.generatedQuestions);
          setBg2(res.data.data[0].bookInsight.temporaryGeneratedImageUrl);
          setText2(res.data.data[0].bookInsight.refinedContext);
        } else if (pageNum === 3) {
          setQuest3(res.data.data[0].bookInsight.generatedQuestions);
          setBg3(res.data.data[0].bookInsight.temporaryGeneratedImageUrl);
          setText3(res.data.data[0].bookInsight.refinedContext);
        } else if (pageNum === 4) {
          setQuest4(res.data.data[0].bookInsight.generatedQuestions);
          setBg4(res.data.data[0].bookInsight.temporaryGeneratedImageUrl);
          setText4(res.data.data[0].bookInsight.refinedContext);
        } else if (pageNum === 5) {
          setQuest5(res.data.data[0].bookInsight.generatedQuestions);
          setBg5(res.data.data[0].bookInsight.temporaryGeneratedImageUrl);
          setText5(res.data.data[0].bookInsight.refinedContext);
        } else if (pageNum === 6) {
          setQuest6(res.data.data[0].bookInsight.generatedQuestions);
          setBg6(res.data.data[0].bookInsight.temporaryGeneratedImageUrl);
          setText6(res.data.data[0].bookInsight.refinedContext);
        } else if (pageNum === 7) {
          setQuest7(res.data.data[0].bookInsight.generatedQuestions);
          setBg7(res.data.data[0].bookInsight.temporaryGeneratedImageUrl);
          setText7(res.data.data[0].bookInsight.refinedContext);
        }
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
        <S.LoadingText>
          그림 그리는 중 ...
          <br />약 10~15초 정도 걸려요.
        </S.LoadingText>
      </S.LoadingContainer>
    );
  };

  const circles = [...Array(bookLength)].map((_, index) => (
    <S.Circle
      key={index}
      style={index === pageNum - 1 ? { backgroundColor: "#FF90F4" } : {}}
    />
  ));

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
                <BubbleG text="도움이 필요하다면 날 클릭해줘~!" length={31} />
              )}
              {clickCount === 1 && (
                <>
                  {pageNum === 2 && (
                    <BubbleG text={`${quest1[0]}`} length={50} />
                  )}
                  {pageNum === 3 && (
                    <BubbleG text={`${quest2[0]}`} length={50} />
                  )}
                  {pageNum === 4 && (
                    <BubbleG text={`${quest3[0]}`} length={50} />
                  )}
                  {pageNum === 5 && (
                    <BubbleG text={`${quest4[0]}`} length={50} />
                  )}
                  {pageNum === 6 && (
                    <BubbleG text={`${quest5[0]}`} length={50} />
                  )}
                  {pageNum === 7 && (
                    <BubbleG text={`${quest6[0]}`} length={50} />
                  )}
                </>
              )}
              {clickCount === 2 && (
                <>
                  {pageNum === 2 && (
                    <BubbleG text={`${quest1[1]}`} length={50} />
                  )}
                  {pageNum === 3 && (
                    <BubbleG text={`${quest2[1]}`} length={50} />
                  )}
                  {pageNum === 4 && (
                    <BubbleG text={`${quest3[1]}`} length={50} />
                  )}
                  {pageNum === 5 && (
                    <BubbleG text={`${quest4[1]}`} length={50} />
                  )}
                  {pageNum === 6 && (
                    <BubbleG text={`${quest5[1]}`} length={50} />
                  )}
                  {pageNum === 7 && (
                    <BubbleG text={`${quest6[1]}`} length={50} />
                  )}
                </>
              )}
              {clickCount === 3 && (
                <>
                  {pageNum === 2 && (
                    <BubbleG text={`${quest1[2]}`} length={50} />
                  )}
                  {pageNum === 3 && (
                    <BubbleG text={`${quest2[2]}`} length={50} />
                  )}
                  {pageNum === 4 && (
                    <BubbleG text={`${quest3[2]}`} length={50} />
                  )}
                  {pageNum === 5 && (
                    <BubbleG text={`${quest4[2]}`} length={50} />
                  )}
                  {pageNum === 6 && (
                    <BubbleG text={`${quest5[2]}`} length={50} />
                  )}
                  {pageNum === 7 && (
                    <BubbleG text={`${quest6[2]}`} length={50} />
                  )}
                </>
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
          {pageNum === 2 && bg2 && (
            <S.CreateBg src={bg2} alt="생성된 스토리 배경" />
          )}
          {pageNum === 3 && bg3 && (
            <S.CreateBg src={bg3} alt="생성된 스토리 배경" />
          )}
          {pageNum === 4 && bg4 && (
            <S.CreateBg src={bg4} alt="생성된 스토리 배경" />
          )}
          {pageNum === 5 && bg5 && (
            <S.CreateBg src={bg5} alt="생성된 스토리 배경" />
          )}
          {pageNum === 6 && bg6 && (
            <S.CreateBg src={bg6} alt="생성된 스토리 배경" />
          )}
          {pageNum === 7 && bg7 && (
            <S.CreateBg src={bg7} alt="생성된 스토리 배경" />
          )}
          <S.BookFrame src={createBookS} alt="책 프레임" />
          <S.CircleWrapper>{circles}</S.CircleWrapper>
          <S.Header>
            <S.Home src={btnHome} alt="홈" onClick={onClickHomeBtn} />
            <S.EndBtn
              src={btnEnd}
              alt="확인"
              onClick={onClickEnd}
              style={
                pageNum === bookLength && isCreated ? {} : { opacity: "0" }
              }
            />
          </S.Header>
          <S.Body>
            <S.BodyContainer>
              {isCreated ? (
                <>
                  {pageNum === 2 && <S.StoryCreated>{text2}</S.StoryCreated>}
                  {pageNum === 3 && <S.StoryCreated>{text3}</S.StoryCreated>}
                  {pageNum === 4 && <S.StoryCreated>{text4}</S.StoryCreated>}
                  {pageNum === 5 && <S.StoryCreated>{text5}</S.StoryCreated>}
                  {pageNum === 6 && <S.StoryCreated>{text6}</S.StoryCreated>}
                  {pageNum === 7 && <S.StoryCreated>{text7}</S.StoryCreated>}
                </>
              ) : (
                <S.StoryInput
                  onChange={handleInput}
                  type="name"
                  placeholder="이야기를 만들어 주세요."
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
                style={pageNum === bookLength ? { opacity: "0" } : {}}
              />
            ) : (
              <S.Check
                src={check}
                alt="다음으로(비활성화)"
                onClick={onClickCreate}
              />
            )}
            {!isCreated && (
              <S.Dong src={dong} alt="동동이" onClick={handleClickDong} />
            )}
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
