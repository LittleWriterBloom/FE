import * as S from "./style";
import { useNavigate } from "react-router-dom";
import { btnHome } from "../../../assets/index";
import { check, checkG, checkW } from "../../../assets/Story";
import { useEffect, useState } from "react";
import { useAtom } from "jotai";
import {
  accessTokenAtom,
  bgAtom1,
  bgAtom2,
  bgAtom3,
  bgAtom4,
  bgAtom5,
  bgAtom6,
  bgAtom7,
  bookBGInit,
  bookIdAtom,
  bookLengthAtom,
  canvasImageDataAtom,
  characterIdAtom,
  characterNameAtom,
  contextAtom1,
  questAtom1,
} from "../../../store/jotaiAtoms";
import { BubbleG } from "../../../components/Bubble/BubbleG";
import {
  bookBG,
  btnEnd,
  createBG,
  createBook,
  createG,
} from "../../../assets/Story/Create";
import apis from "../../../apis/apis";
import { WritingLoading } from "../../../components/StoryLoading/\bWritingLoading";
import { DongAnim } from "../../../components/CharacterAnim/DongAnim";
import { TTS } from "../../../components/TTS/TTS";
import { ModalYN } from "../../../components/ModalYN/ModalYN";
import { STT } from "../../../components/STT/STT";
interface BookInitDataTypes {
  characterId: number | null;
  backgroundInfo: string | null;
  firstContext: string | null;
  storyLength: number | null;
}

export const Create = () => {
  const navigate = useNavigate();
  const [bookLength] = useAtom(bookLengthAtom);
  const [story, setStory] = useState("");
  const [nameAtomValue] = useAtom(characterNameAtom);
  const [, setQuest1] = useAtom(questAtom1);
  const [canvasImageData] = useAtom(canvasImageDataAtom);
  const [text1, setText1] = useAtom(contextAtom1);
  const [act] = useAtom(accessTokenAtom);
  const [charId] = useAtom(characterIdAtom);
  const [bgInit] = useAtom(bookBGInit);
  const [bg1, setBg1] = useAtom(bgAtom1);
  const [, setBg2] = useAtom(bgAtom2);
  const [, setBg3] = useAtom(bgAtom3);
  const [, setBg4] = useAtom(bgAtom4);
  const [, setBg5] = useAtom(bgAtom5);
  const [, setBg6] = useAtom(bgAtom6);
  const [, setBg7] = useAtom(bgAtom7);
  const [, setBookId] = useAtom(bookIdAtom);
  const [isCreated, setIsCreated] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [showFirst, setShowFirst] = useState(false);
  const [showSecond, setShowSecond] = useState(false);
  const [showThird, setShowThird] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [isModal, setIsModal] = useState(false);
  const [listening, setListening] = useState(false);

  const startListening = () => {
    setListening(true);
  };

  const stopListening = () => {
    setListening(false);
  };

  const handleSpeechResult = (result: string) => {
    setStory(result); // 입력된 음성 결과로 이름 업데이트
  };

  useEffect(() => {
    setBookId("");
    setBg1("");
    setBg2("");
    setBg3("");
    setBg4("");
    setBg5("");
    setBg6("");
    setBg7("");
    setTimeout(() => {
      setShowFirst(true);
      setTimeout(() => {
        setShowSecond(true);
        setTimeout(() => {
          setShowThird(true);
        }, 4000);
      }, 2500);
    }, 500);
  }, []);

  const bookInitData = {
    characterId: charId,
    backgroundInfo: bgInit,
    firstContext: story,
    storyLength: bookLength,
  };

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setStory(e.target.value);
  };

  const onClickHomeBtn = () => {
    setIsModal(true);
  };

  const closeModal = () => {
    setIsModal(false);
  };

  const onClickEnd = () => {
    navigate("/story/title");
  };

  const onClickCheck = () => {
    alert("스토리를 입력해주세요.");
  };

  const onClickCreate = () => {
    setIsLoading(true);
    postBookInit(bookInitData);
  };

  const onClickDong = () => {
    setIsClicked(true);
    setTimeout(() => {
      setIsClicked(false);
    }, 2000);
  };

  const onClickNext = () => {
    navigate("/story/create/2");
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
        setBg1(res.data.data[0].bookInsight.sketchImageUrl);
        setText1(res.data.data[0].bookInsight.refinedContext);
        setQuest1(res.data.data[0].bookInsight.generatedQuestions);
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
      style={index === 0 ? { backgroundColor: "#FF90F4" } : {}}
    />
  ));

  return (
    <S.Container>
      {isLoading ? (
        <WritingLoading />
      ) : (
        <>
          <STT
            listening={listening}
            startListening={startListening}
            stopListening={stopListening}
            onSpeechResult={handleSpeechResult}
          />
          {isModal && <ModalYN isOpen={true} closeModal={closeModal} />}
          {isCreated ? (
            <>
              {isClicked && (
                <BubbleG text="다음 이야기를 만들어보자!" length={25} />
              )}
            </>
          ) : (
            <>
              {showFirst && (
                <>
                  <TTS text="이제 이야기를 만들어보자!" speaker="nwoof" />
                  <BubbleG text="이제 이야기를 만들어보자!" length={25} />
                </>
              )}
              {showSecond && (
                <>
                  <TTS text="도움이 필요하다면 날 클릭해줘~!" speaker="nwoof" />
                  <BubbleG text="도움이 필요하다면 날 클릭해줘~!" length={31} />
                </>
              )}
              {showThird && (
                <>
                  <TTS
                    text={`${nameAtomValue}이는 ${bgInit}에서 무엇을 하고 있어?`}
                    speaker="nwoof"
                  />
                  <BubbleG
                    text={`${nameAtomValue}(은/는) ${bgInit}에서 무엇을 하고 있어?`}
                    length={52}
                  />
                </>
              )}
            </>
          )}
          <S.Bg src={createBG} alt="배경" />
          <S.Book src={createBook} alt="기본 책" />
          {bg1 && (
            <>
              <S.CreateBg src={bg1} alt="생성된 스토리 배경" />
              <S.BookFrame src={bookBG} alt="책 프레임" />
            </>
          )}
          <S.CircleWrapper>{circles}</S.CircleWrapper>
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
                <S.StoryContainer>
                  <TTS text={text1} speaker="ndain" />
                  <S.CharacterContainer>
                    {canvasImageData && (
                      <S.Character src={canvasImageData} alt="Saved Image" />
                    )}
                  </S.CharacterContainer>
                  <S.StoryCreatedContainer>
                    <S.StoryCreated>
                      {text1.split(".").map((sentence, index, array) => (
                        <div key={index}>
                          {sentence.trim()}
                          {index < array.length - 1 && "."}
                          {index < array.length - 2 && (
                            <>
                              <br style={{ fontSize: "0.1rem" }} />
                              <div style={{ width: "1rem", height: "1rem" }} />
                            </>
                          )}
                        </div>
                      ))}
                    </S.StoryCreated>
                  </S.StoryCreatedContainer>
                </S.StoryContainer>
              ) : (
                <>
                  <S.StoryInput
                    onChange={handleInput}
                    type="name"
                    placeholder="동화의 첫 문장을 지어주세요."
                    value={story}
                  />
                  <S.CreateG src={createG} alt="Saved Image" />
                </>
              )}
            </S.BodyContainer>
            {isCreated ? (
              <S.CheckG src={checkW} alt="다음으로" onClick={onClickNext} />
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
              <div onClick={onClickDong}>
                <DongAnim talkCount={1} />
              </div>
            )}
          </S.Body>
        </>
      )}
    </S.Container>
  );
};
