import * as S from "./style";
import { useNavigate } from "react-router-dom";
import { btnHome, dong } from "../../../assets/index";
import { check, checkG, checkW } from "../../../assets/Story";
import { btnMic, btnRecord } from "../../../assets";
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
  characterIdAtom,
  characterNameAtom,
  contextAtom1,
  questAtom1,
} from "../../../store/jotaiAtoms";
import { BubbleG } from "../../../components/Bubble/BubbleG";
import {
  btnEnd,
  createBG,
  createBook,
  createG,
} from "../../../assets/Story/Create";
import apis from "../../../apis/apis";
import { WritingLoading } from "../../../components/StoryLoading/\bWritingLoading";
interface BookInitDataTypes {
  characterId: number | null;
  backgroundInfo: string | null;
  firstContext: string | null;
}

export const CreateAI = () => {
  const navigate = useNavigate();
  const [bookLength] = useAtom(bookLengthAtom);
  const [story, setStory] = useState("");
  const [nameAtomValue] = useAtom(characterNameAtom);
  const [, setQuest1] = useAtom(questAtom1);
  // const canvasImageData = useAtomValue(canvasImageDataAtom);
  const [rec, setRec] = useState(false);
  const [text1, setText1] = useAtom(contextAtom1);
  const [act] = useAtom(accessTokenAtom);
  const [charId] = useAtom(characterIdAtom);
  const [bgInit] = useAtom(bookBGInit);
  const [, setBg1] = useAtom(bgAtom1);
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
  const [isClicked, setIsClicked] = useState(false);

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
      }, 2000);
    }, 500);
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
    navigate("/story/createai/2");
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
          "/books/builder/init2",
          bookInitData,
          config
        );
        console.log(res.data);
        setBg1(res.data.data[0].bookInsight.temporaryGeneratedImageUrl);
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
                <S.StoryCreated>{text1}</S.StoryCreated>
              ) : (
                <>
                  <S.StoryInput
                    onChange={handleInput}
                    type="name"
                    placeholder="동화의 첫 문장을 지어주세요."
                  />
                  <S.Character src={createG} alt="Saved Image" />
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
              <S.Dong src={dong} alt="동동이" onClick={onClickDong} />
            )}
            {rec === false ? (
              <S.Rec
                src={btnMic}
                alt="다음으로(비활성화)"
                onClick={onClickMic}
              />
            ) : (
              <S.Rec
                src={btnRecord}
                alt="다음으로(활성화)"
                onClick={onClickRec}
              />
            )}
          </S.Body>
        </>
      )}
    </S.Container>
  );
};
