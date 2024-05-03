import * as S from "./style";
import { useNavigate } from "react-router-dom";
import { check } from "../../../assets/Story";
import { useEffect, useState } from "react";
import { useAtom, useAtomValue } from "jotai";
import {
  accessTokenAtom,
  bgAtom1,
  bgAtom2,
  bgAtom3,
  bgAtom4,
  bgAtom5,
  bgAtom6,
  bgAtom7,
  bookIdAtom,
  bookLengthAtom,
  canvasImageDataAtom,
  contextAtom1,
  contextAtom2,
  contextAtom3,
  contextAtom4,
  contextAtom5,
  contextAtom6,
  contextAtom7,
} from "../../../store/jotaiAtoms";
import {
  createBG,
  createBook,
  createBookS,
} from "../../../assets/Story/Create";
import { btnHome, readEnd } from "../../../assets";
// import apis from "../../../apis/apis";
import apis from "../../../apis/apis";

export const Read = () => {
  const navigate = useNavigate();
  const [act] = useAtom(accessTokenAtom);
  const canvasImageData = useAtomValue(canvasImageDataAtom);
  const [bookid] = useAtom(bookIdAtom);
  const [bookLength] = useAtom(bookLengthAtom);

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

  useEffect(() => {
    getBookTotalData();
  });

  const onClickHomeBtn = () => {
    navigate("/");
  };
  const onClickEnd = () => {
    navigate("/home");
  };

  // const onClickDong = () => {
  //   setIsModal(true);
  // }

  // const onClickExit = () => {
  //   setIsModal(false);
  // }

  const onClickNext = () => {
    setClickCount(clickCount + 1);
  };

  const getBookTotalData = async () => {
    const config = {
      headers: {
        Authorization: `Bearer ${act}`,
      },
    };

    if (act) {
      try {
        const res = await apis.get(
          `{https://littlewriter-api.com/books/board/${bookid}}`,
          config
        );
        console.log(res.data.data[0].pages);
        setText1(res.data.data[0].pages[0].context);
        setText2(res.data.data[0].pages[1].context);
        setText3(res.data.data[0].pages[2].context);
        setText4(res.data.data[0].pages[3].context);
        setText5(res.data.data[0].pages[4].context);
        setText6(res.data.data[0].pages[5].context);
        setText7(res.data.data[0].pages[6].context);
        setBg1(res.data.data[0].pages[0].backgroundImageUrl);
        setBg2(res.data.data[0].pages[1].backgroundImageUrl);
        setBg3(res.data.data[0].pages[2].backgroundImageUrl);
        setBg4(res.data.data[0].pages[3].backgroundImageUrl);
        setBg5(res.data.data[0].pages[4].backgroundImageUrl);
        setBg6(res.data.data[0].pages[5].backgroundImageUrl);
        setBg7(res.data.data[0].pages[6].backgroundImageUrl);
      } catch (err) {
        console.error(err);
      }
    }
  };

  return (
    <S.Container>
      <S.Bg src={createBG} alt="배경" />
      <S.Book src={createBook} alt="기본 책" />
      {clickCount === 0 && bg1 && (
        <S.CreateBg src={bg1} alt="생성된 스토리 배경" />
      )}
      {clickCount === 1 && bg2 && (
        <S.CreateBg src={bg2} alt="생성된 스토리 배경" />
      )}
      {clickCount === 2 && bg3 && (
        <S.CreateBg src={bg3} alt="생성된 스토리 배경" />
      )}
      {clickCount === 3 && bg4 && (
        <S.CreateBg src={bg4} alt="생성된 스토리 배경" />
      )}
      {clickCount === 4 && bg5 && (
        <S.CreateBg src={bg5} alt="생성된 스토리 배경" />
      )}
      {clickCount === 5 && bg6 && (
        <S.CreateBg src={bg6} alt="생성된 스토리 배경" />
      )}
      {clickCount === 6 && bg7 && (
        <S.CreateBg src={bg7} alt="생성된 스토리 배경" />
      )}
      <S.BookFrame src={createBookS} alt="책 프레임" />
      <S.Header>
        <S.Home src={btnHome} alt="홈" onClick={onClickHomeBtn} />
        {clickCount + 1 === bookLength && (
          <S.EndBtn src={readEnd} alt="확인" onClick={onClickEnd} />
        )}
      </S.Header>
      <S.Body>
        <S.BodyContainer>
          {clickCount === 0 && text1 && (
            <S.StoryCreated>{text1}</S.StoryCreated>
          )}
          {clickCount === 1 && text2 && (
            <S.StoryCreated>{text2}</S.StoryCreated>
          )}
          {clickCount === 2 && text3 && (
            <S.StoryCreated>{text3}</S.StoryCreated>
          )}
          {clickCount === 3 && text4 && (
            <S.StoryCreated>{text4}</S.StoryCreated>
          )}
          {clickCount === 4 && text5 && (
            <S.StoryCreated>{text5}</S.StoryCreated>
          )}
          {clickCount === 5 && text6 && (
            <S.StoryCreated>{text6}</S.StoryCreated>
          )}
          {clickCount === 6 && text7 && (
            <S.StoryCreated>{text7}</S.StoryCreated>
          )}
          {canvasImageData && (
            <S.Character src={canvasImageData} alt="Saved Image" />
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
          <S.Check src={check} alt="다음으로(비활성화)" onClick={onClickNext} />
        )}
      </S.Body>
    </S.Container>
  );
};
