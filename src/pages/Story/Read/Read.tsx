import * as S from "./style";
import { useNavigate } from "react-router-dom";
import { check } from "../../../assets/Story";
import { useEffect, useState } from "react";
import { useAtom, useAtomValue } from "jotai";
import {
  accessTokenAtom,
  background1,
  background2,
  background3,
  bookId,
  canvasImageDataAtom,
  context1,
  context2,
  context3,
} from "../../../store/jotaiAtoms";
import { createBG, createBook, createBookS } from "../../../assets/Story/Create";
import { btnHome, readEnd } from "../../../assets";
import apis from "../../../apis/apis";

export const Read = () => {
  const navigate = useNavigate();
  const [act] = useAtom(accessTokenAtom);
  const canvasImageData = useAtomValue(canvasImageDataAtom);
  const [bookid] = useAtom(bookId);

  const [text1, setText1] = useAtom(context1);
  const [bg1, setBg1] = useAtom(background1);
  const [text2, setText2] = useAtom(context2);
  const [bg2, setBg2] = useAtom(background2);
  const [text3, setText3] = useAtom(context3);
  const [bg3, setBg3] = useAtom(background3);

  const [clickCount, setClickCount] = useState(0);

  useEffect(() => {
    getBookTotalData();
  }, []);

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
          `{/books/board/${bookid}}`,
          config
        );
        setText1(res.data.data[0].pages[0].context);
        setText2(res.data.data[0].pages[1].context);
        setText3(res.data.data[0].pages[2].context);
        setBg1(res.data.data[0].pages[0].backgroundImageUrl);
        setBg2(res.data.data[0].pages[1].backgroundImageUrl);
        setBg3(res.data.data[0].pages[2].backgroundImageUrl);
        console.log(res.data.data[0].pages);
      } catch (err) {
        console.error(err);
      }
    }
  };

  return (
    <S.Container>
          <S.Bg src={createBG} alt="배경" />
          <S.Book src={createBook} alt="기본 책" />
          {(clickCount === 0 && bg1) && <S.CreateBg src={bg1} alt="생성된 스토리 배경" />}
          {(clickCount === 1 && bg2) && <S.CreateBg src={bg2} alt="생성된 스토리 배경" />}
          {(clickCount === 2 && bg3) && <S.CreateBg src={bg3} alt="생성된 스토리 배경" />}
          <S.BookFrame src={createBookS} alt="책 프레임" />
          <S.Header>
            <S.Home src={btnHome} alt="홈" onClick={onClickHomeBtn} />
            {(clickCount === 2) &&
              <S.EndBtn
              src={readEnd}
              alt="확인"
              onClick={onClickEnd}
            />}
          </S.Header>
          <S.Body>
            <S.BodyContainer>
              {(clickCount === 1 && text1) && <S.StoryCreated>{text1}</S.StoryCreated>}
              {(clickCount === 2 && text2) && <S.StoryCreated>{text2}</S.StoryCreated>}
              {(clickCount === 3 && text3) && <S.StoryCreated>{text3}</S.StoryCreated>}
              {canvasImageData && (
                <S.Character src={canvasImageData} alt="Saved Image" />
              )}
            </S.BodyContainer>
            {(clickCount === 2) ? (
              <></>
              // <S.CheckG
              //   src={checkG}
              //   alt="다음으로(활성화)"
              //   onClick={onClickNext}
              // />
            ) : (
              <S.Check
                src={check}
                alt="다음으로(비활성화)"
                onClick={onClickNext}
              />
            )}
          </S.Body>
    </S.Container>
  );
};
