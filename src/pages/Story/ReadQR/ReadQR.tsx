import * as S from "./style";
import { useNavigate } from "react-router-dom";
import { checkW } from "../../../assets/Story";
import { useEffect, useState } from "react";
import { useAtom } from "jotai";
import {
  accessTokenAtom,
  aiImageDataAtom,
  bgAtom1,
  bgAtom2,
  bgAtom3,
  bgAtom4,
  bgAtom5,
  bgAtom6,
  bgAtom7,
  bookIdAtom,
  bookLengthAtom,
  contextAtom1,
  contextAtom2,
  contextAtom3,
  contextAtom4,
  contextAtom5,
  contextAtom6,
  contextAtom7,
} from "../../../store/jotaiAtoms";
import { bookBG, createBG, createBookNew } from "../../../assets/Story/Create";
import { btnHome, readEnd, speakerF, speakerT } from "../../../assets";
// import apis from "../../../apis/apis";
import apis from "../../../apis/apis";
import { TTS } from "../../../components/TTS/TTS";

export const ReadQR = () => {
  const navigate = useNavigate();
  const [act] = useAtom(accessTokenAtom);
  const [, setAiImageData] = useAtom(aiImageDataAtom);
  const [bookid] = useAtom(bookIdAtom);
  const [bookLength, setBookLength] = useAtom(bookLengthAtom);

  const [text1, setText1] = useAtom(contextAtom1);
  const [bg1, setBg1] = useAtom(bgAtom1);
  const [text2, setText2] = useAtom(contextAtom2);
  const [bg2, setBg2] = useAtom(bgAtom2);
  const [text3, setText3] = useAtom(contextAtom3);
  const [bg3, setBg3] = useAtom(bgAtom3);
  const [text4, setText4] = useAtom(contextAtom4);
  const [bg4, setBg4] = useAtom(bgAtom4);
  const [text5, setText5] = useAtom(contextAtom5);
  const [bg5, setBg5] = useAtom(bgAtom5);
  const [text6, setText6] = useAtom(contextAtom6);
  const [bg6, setBg6] = useAtom(bgAtom6);
  const [text7, setText7] = useAtom(contextAtom7);
  const [bg7, setBg7] = useAtom(bgAtom7);

  const [clickCount, setClickCount] = useState(0);
  const [showFirst, setShowFirst] = useState(false);
  const [speakerOn, setSpeakerOn] = useState(true);
  const [ttsActive, setTTSActive] = useState(true);

  console.log(bookid);

  useEffect(() => {
    getBookTotalData();
    setTimeout(() => {
      setShowFirst(true);
    }, 200);
  });

  const onClickHomeBtn = () => {
    navigate("/");
  };
  const onClickEnd = () => {
    navigate("/mystories");
  };

  // const onClickDong = () => {
  //   setIsModal(true);
  // }

  // const onClickExit = () => {
  //   setIsModal(false);
  // }

  const onClickSpeakerOn = () => {
    setSpeakerOn(true);
    setTTSActive(true);
  };

  const onClickSpeakerOff = () => {
    setSpeakerOn(false);
    setTTSActive(false);
  };

  const onClickNext = () => {
    setClickCount(clickCount + 1);
  };

  const onClickPrev = () => {
    setClickCount(clickCount - 1);
  };

  const getBookTotalData = async () => {
    if (act) {
      try {
        const config = {
          headers: {
            Authorization: `Bearer ${act}`,
          },
        };
        const res = await apis.get(`/books/board/${bookid}`, config);
        console.log(res.data.data[0].book.pages);
        const bookPages = res.data.data[0].book.pages;
        const bookL = bookPages.length;
        setBookLength(bookL);
        setAiImageData(res.data.data[0].character.imageUrl);
        setText1(bookPages[0].context);
        setText2(bookPages[1].context);
        setText3(bookPages[2].context);
        setBg1(bookPages[0].coloredImageUrl);
        setBg2(bookPages[1].coloredImageUrl);
        setBg3(bookPages[2].coloredImageUrl);
        if (bookL >= 5) {
          setText4(bookPages[3].context);
          setText5(bookPages[4].context);
          setBg4(bookPages[3].coloredImageUrl);
          setBg5(bookPages[4].coloredImageUrl);
        }
        if (bookL === 7) {
          setText6(bookPages[5].context);
          setText7(bookPages[6].context);
          setBg6(bookPages[5].coloredImageUrl);
          setBg7(bookPages[6].coloredImageUrl);
        }
      } catch (err) {
        console.error(err);
      }
    }
  };

  return (
    <S.Container>
      <S.Bg src={createBG} alt="배경" />
      <S.Book src={createBookNew} alt="기본 책" />
      {[bg1, bg2, bg3, bg4, bg5, bg6, bg7].map(
        (bg, index) =>
          clickCount === index &&
          bg && <S.CreateBg key={index} src={bg} alt="생성된 스토리 배경" />
      )}
      <S.BookFrame src={bookBG} alt="책 프레임" />
      <S.Header>
        <S.Home src={btnHome} alt="홈" onClick={onClickHomeBtn} />
        <S.BtnContainer>
          {clickCount + 1 === bookLength && (
            <S.EndBtn src={readEnd} alt="확인" onClick={onClickEnd} />
          )}
          {speakerOn ? (
            <S.SpeakerBtn src={speakerT} alt="스피커(활성화)" onClick={onClickSpeakerOff} />
          ) : (
            <S.SpeakerBtn src={speakerF} alt="스피커(활성화)" onClick={onClickSpeakerOn} />
          )}
        </S.BtnContainer>
      </S.Header>
      <S.Body>
        <S.BodyContainer>
          <S.CharacterContainer>
            {/* {aiImageData && (
              <S.Character src={aiImageData} alt="Saved Image" />
            )} */}
          </S.CharacterContainer>
          {[text1, text2, text3, text4, text5, text6, text7].map(
            (text, index) =>
              clickCount === index &&
              text && (
                <S.StoryCreatedContainer>
                  <S.StoryCreated key={index}>
                    {text.split(".").map((sentence, index, array) => (
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
                  {showFirst && ttsActive && <TTS text={text} speaker="ndain" />}
                </S.StoryCreatedContainer>
              )
          )}
        </S.BodyContainer>
        {clickCount + 1 === bookLength ? (
          <></>
        ) : (
          // <S.CheckG
          //   src={checkG}
          //   alt="다음으로(활성화)"
          //   onClick={onClickNext}
          // />
          <S.Check src={checkW} alt="다음으로(비활성화)" onClick={onClickNext} />
        )}
        {clickCount === 0 ? (
          <></>
        ) : (
          // <S.CheckG
          //   src={checkG}
          //   alt="다음으로(활성화)"
          //   onClick={onClickNext}
          // />
          <S.CheckL
            src={checkW}
            alt="다음으로(비활성화)"
            onClick={onClickPrev}
          />
        )}
      </S.Body>
    </S.Container>
  );
};
