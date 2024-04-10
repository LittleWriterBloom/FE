import * as S from "./style";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useAtom } from "jotai";
import {
  accessTokenAtom,
  background1,
  bookBGInit,
  bookId1,
  characterId,
} from "../../store/jotaiAtoms";
import Lottie from "react-lottie-player";
import loadAnim from "../../assets/Lottie/loading.json";
import btnHome from "../../assets/btn-home.png";
import {
  background,
  character,
  cloudLeft,
  cloudRight,
  bg,
  story,
} from "../../assets/Guide";

export const GuideThird = () => {
  const navigate = useNavigate();
  const [act] = useAtom(accessTokenAtom);
  const [charId] = useAtom(characterId);
  const [bgInit] = useAtom(bookBGInit);
  const [, setInitImgUrl] = useAtom(background1);
  const [, setBookId1] = useAtom(bookId1);
  const [initImgLoaded, setInitImgLoaded] = useState(false);

  interface BookInitDataTypes {
    characterId: number | null;
    backgroundInfo: string | null;
  }

  const bookInitData = {
    characterId: charId,
    backgroundInfo: bgInit,
  };

  const onClickHomeBtn = () => {
    navigate("/");
  };

  // const onClickCharacter = () => {
  //   navigate("/character");
  // };

  // const onClickStage = () => {
  //   navigate("/story");
  // };

  const onClickStory = () => {
    setInitImgLoaded(true);
    postBookInit(bookInitData);
  };

  console.log(bookInitData);

  const postBookInit = async (bookInitData: BookInitDataTypes) => {
    const config = {
      headers: {
        Authorization: `Bearer ${act}`,
      },
    };

    if (act) {
      try {
        const res = await axios.post("/api/books/builder/init", bookInitData, config);
        console.log(res.data);
        setInitImgUrl(res.data.data[0].imageUrl);
        setBookId1(res.data.data[0].bookId);
        navigate("/story/create");
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
      <S.Bg src={bg} alt="배경" />
      {initImgLoaded ? (
        <LoadingComp />
      ) : (
        <>
          <S.Header>
            <S.Home src={btnHome} alt="홈" onClick={onClickHomeBtn} />
          </S.Header>
          <S.Body>
            <S.Clouds>
              <S.Cloud src={cloudLeft} alt="구름다리왼쪽" />
              <S.Cloud src={cloudRight} alt="구름다리오른쪽" />
            </S.Clouds>
            <S.MenuContainer>
              <S.Menu
                src={character}
                alt="주인공 만들기"
                /* onClick={onClickCharacter} */
              />
              <S.MenuCenter
                src={background}
                alt="배경 정하기"
                /* onClick={onClickStage} */
              />
              <S.Menu
                src={story}
                alt="동화 짓기"
                onClick={onClickStory}
                style={{ 
                  cursor: "pointer",
                  filter: "drop-shadow(0px 4px 45px #0395FF)"
                }}
              />
            </S.MenuContainer>
          </S.Body>
        </>
      )}
    </S.Container>
  );
};
