import * as S from "./style";
import { useNavigate } from "react-router-dom";
import { btnHome } from "../../../assets/index";
import { check, checkG, checkW } from "../../../assets/Story";
import { btnMic, btnRecord } from "../../../assets";
import { useEffect, useState } from "react";
import { useAtom } from "jotai";
import {
  accessTokenAtom,
  // bgAtom2,
  // bgAtom3,
  // bgAtom4,
  // bgAtom5,
  // bgAtom6,
  // bgAtom7,
  bookLengthAtom,
  // canvasImageDataAtom,
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
  createG,
} from "../../../assets/Story/Create";
import apis from "../../../apis/apis";
import { WritingLoading } from "../../../components/StoryLoading/\bWritingLoading";
import { DongAnim } from "../../../components/CharacterAnim/DongAnim";
import { TTS } from "../../../components/TTS/TTS";

interface pageDataTypes {
  userContext: string | null;
  characterActionInfo: string;
}

export const CreateAIParams = () => {
  const navigate = useNavigate();
  const [pageNum, setPageNum] = useState(2);
  const [bookLength] = useAtom(bookLengthAtom);
  const [act] = useAtom(accessTokenAtom);
  // const canvasImageData = useAtomValue(canvasImageDataAtom);
  const [rec, setRec] = useState(false);
  const [quest1] = useAtom(questAtom1);
  const [story, setStory] = useState("");

  const [quest2, setQuest2] = useAtom(questAtom2);
  const [text2, setText2] = useAtom(contextAtom2);
  // const [bg2, setBg2] = useAtom(bgAtom2);

  const [quest3, setQuest3] = useAtom(questAtom3);
  const [text3, setText3] = useAtom(contextAtom3);
  // const [bg3, setBg3] = useAtom(bgAtom3);

  const [quest4, setQuest4] = useAtom(questAtom4);
  const [text4, setText4] = useAtom(contextAtom4);
  // const [bg4, setBg4] = useAtom(bgAtom4);

  const [quest5, setQuest5] = useAtom(questAtom5);
  const [text5, setText5] = useAtom(contextAtom5);
  // const [bg5, setBg5] = useAtom(bgAtom5);

  const [quest6, setQuest6] = useAtom(questAtom6);
  const [text6, setText6] = useAtom(contextAtom6);
  // const [bg6, setBg6] = useAtom(bgAtom6);

  const [, setQuest7] = useAtom(questAtom7);
  const [text7, setText7] = useAtom(contextAtom7);
  // const [bg7, setBg7] = useAtom(bgAtom7);

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

  const onClickCheck = () => {
    alert("스토리를 입력해주세요.");
  };

  const onClickCreate = () => {
    setIsLoading(true);
    postBookData(pageData);
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
    navigate(`/story/createai/${pageNum + 1}`);
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
        const res = await apis.post(
          `/books/builder/insight2`,
          pageData,
          config
        );
        console.log(res.data.data[0]);
        if (pageNum === 2) {
          setQuest2(res.data.data[0].bookInsight.generatedQuestions);
          // setBg2(res.data.data[0].bookInsight.temporaryGeneratedImageUrl);
          setText2(res.data.data[0].bookInsight.refinedContext);
        } else if (pageNum === 3) {
          setQuest3(res.data.data[0].bookInsight.generatedQuestions);
          // setBg3(res.data.data[0].bookInsight.temporaryGeneratedImageUrl);
          setText3(res.data.data[0].bookInsight.refinedContext);
        } else if (pageNum === 4) {
          setQuest4(res.data.data[0].bookInsight.generatedQuestions);
          // setBg4(res.data.data[0].bookInsight.temporaryGeneratedImageUrl);
          setText4(res.data.data[0].bookInsight.refinedContext);
        } else if (pageNum === 5) {
          setQuest5(res.data.data[0].bookInsight.generatedQuestions);
          // setBg5(res.data.data[0].bookInsight.temporaryGeneratedImageUrl);
          setText5(res.data.data[0].bookInsight.refinedContext);
        } else if (pageNum === 6) {
          setQuest6(res.data.data[0].bookInsight.generatedQuestions);
          // setBg6(res.data.data[0].bookInsight.temporaryGeneratedImageUrl);
          setText6(res.data.data[0].bookInsight.refinedContext);
        } else if (pageNum === 7) {
          setQuest7(res.data.data[0].bookInsight.generatedQuestions);
          // setBg7(res.data.data[0].bookInsight.temporaryGeneratedImageUrl);
          setText7(res.data.data[0].bookInsight.refinedContext);
        }
        setIsLoading(false);
        setIsCreated(true);
      } catch (err) {
        console.error(err);
      }
    }
  };

  const circles = [...Array(bookLength)].map((_, index) => (
    <S.Circle
      key={index}
      style={index === pageNum - 1 ? { backgroundColor: "#FF90F4" } : {}}
    />
  ));
  
  const texts = [text2, text3, text4, text5, text6, text7];
  const quests = [quest1, quest2, quest3, quest4, quest5, quest6];

  return (
    <S.Container>
      {isLoading ? (
        <WritingLoading />
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
                  {/* <DongAnimHelp talkCount={1} /> */}
                  {[2, 3, 4, 5, 6].map((page, index) => (
                    <div key={index}>
                      {pageNum === page && (
                        <>
                          <TTS text={quests[index][0]} speaker="nwoof" />
                          <BubbleG text={quests[index][0]} length={50} />
                        </>
                      )}
                    </div>
                  ))}
                </>
              )}
              {clickCount === 2 && (
                <>
                  {/* <DongAnimHelp talkCount={1} /> */}
                  {[2, 3, 4, 5, 6].map((page, index) => (
                    <div key={index}>
                      {pageNum === page && (
                        <>
                          <TTS text={quests[index][1]} speaker="nwoof" />
                          <BubbleG text={quests[index][1]} length={50} />
                        </>
                      )}
                    </div>
                  ))}
                </>
              )}
              {clickCount === 3 && (
                <>
                  {/* <DongAnimHelp talkCount={1} /> */}
                  {[2, 3, 4, 5, 6].map((page, index) => (
                    <div key={index}>
                      {pageNum === page && (
                        <>
                          <TTS text={quests[index][2]} speaker="nwoof" />
                          <BubbleG text={quests[index][2]} length={50} />
                        </>
                      )}
                    </div>
                  ))}
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
          {/* {pageNum === 2 && bg2 && (
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
          )} */}
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
                  {[2, 3, 4, 5, 6, 7].map((page, index) => (
                    <div key={index}>
                      {pageNum === page && (
                        <>
                          <TTS text={texts[page - 2]} speaker="ndain" />
                          <S.StoryCreated>{texts[page - 2]}</S.StoryCreated>
                        </>
                      )}
                    </div>
                  ))}
                </>
              ) : (
                <>
                  <S.StoryInput
                    onChange={handleInput}
                    type="name"
                    placeholder="이야기를 만들어 주세요."
                  />
                  <S.Character src={createG} alt="Saved Image" />
                </>
              )}
            </S.BodyContainer>
            {isCreated ? (
              <S.CheckG
                src={checkW}
                alt="다음으로"
                onClick={onClickNext}
                style={pageNum === bookLength ? { opacity: "0" } : {}}
              />
            ) : (
              <>
                {story === "" ? (
                  <S.Check
                    src={check}
                    alt="다음으로(비활성화)"
                    onClick={onClickCheck}
                  />
                ) : (
                  <S.Check
                    src={checkG}
                    alt="다음으로(활성화)"
                    onClick={onClickCreate}
                  />
                )}
              </>
            )}
            {!isCreated && (
              <div onClick = {handleClickDong}>
                <DongAnim talkCount={1} />
              </div>
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
