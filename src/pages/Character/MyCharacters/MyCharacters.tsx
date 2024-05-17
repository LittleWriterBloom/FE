import { useEffect, useState } from "react";
import * as S from "./style";
import { useNavigate } from "react-router-dom";
import { useAtom } from "jotai";
import {
  accessTokenAtom,
  canvasImageDataAtom,
  characterIdAtom,
  characterNameAtom,
  characterPersonalityAtom,
} from "../../../store/jotaiAtoms";
import {
  bg,
  boardBG,
  btnMakeChar,
  btnStoryMake,
  cardBG,
  memoBlue,
  title,
} from "../../../assets/Character/MyCharacters";
import { btnHome, ggummi2, btnBack } from "../../../assets";
import apis from "../../../apis/apis";
import { bring } from "../../../assets/Character";

interface Character {
  id: number;
  name: string;
  personality: string;
  imageUrl: string;
}

export const MyCharacters = () => {
  const navigate = useNavigate();
  const [act] = useAtom(accessTokenAtom);
  const [charactersData, setCharactersData] = useState<Character[]>([]);
  const [card, setCard] = useState(false);
  const [selectedChar, setSelectedChar] = useState<Character | null>(null);
  const [, setCharImg] = useAtom(canvasImageDataAtom);
  const [, setCharName] = useAtom(characterNameAtom);
  const [, setCharFeat] = useAtom(characterPersonalityAtom);
  const [, setCharId] = useAtom(characterIdAtom);
  const [pageNum, setPageNum] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [currPage, setCurrPage] = useState(1);

  const onClickHomeBtn = () => {
    navigate("/");
  };

  const onClickCharBtn = () => {
    navigate("/character/draw");
  };

  const getCharactersData = async () => {
    if (act) {
      try {
        const config = {
          headers: {
            Authorization: `Bearer ${act}`,
          },
        };
        const res = await apis.get(`/character?page=${pageNum}&size=9`, config);
        console.log(res.data.data[0]);
        setCharactersData(res.data.data[0].characters);
        setTotalPages(res.data.data[0].pageInfo.totalPages);
      } catch (err) {
        console.error(err);
      }
    }
  };

  const onClickStoryBtn = () => {
    if (selectedChar) {
      setCharImg(selectedChar.imageUrl || "");
      setCharName(selectedChar.name || "");
      setCharFeat(selectedChar.personality || "");
      setCharId(selectedChar.id);
    }
    navigate("/story/stage");
  };

  useEffect(() => {
    getCharactersData();
  }, [act]);

  useEffect(() => {
    getCharactersData();
  }, [pageNum]);

  const onClickCharacter = (index: number) => {
    const selected = charactersData[index];
    setSelectedChar(selected);
    setCard(true);
  };

  const onClickBackBtn = () => {
    setCard(false);
  };

  const pageNumbers = Array.from(
    { length: totalPages },
    (_, index) => index + 1
  );

  const onClickPage = (page: number) => {
    setCurrPage(page);
    setPageNum(page - 1);
  };

  return (
    <S.Container>
      <S.Header>
        <S.Home src={btnHome} alt="홈" onClick={onClickHomeBtn} />
        {card === true && (
          <S.ExitBtn src={btnBack} alt="나가기" onClick={onClickBackBtn} />
        )}
        <S.Bring src={bring} alt="캐릭터 불러오기" onClick={onClickCharBtn} />
      </S.Header>
      <S.Ggummi src={ggummi2} alt="꾸미" />
      <S.Logo src={title} alt="홈" />
      {card === false ? (
        <>
          {charactersData.length === 0 ? (
            <>
              <S.BgT src={bg} alt="배경" />
              <S.CardBG src={cardBG} alt="배경" />
              <S.BodyContainerN>
                <p>아직 캐릭터가 없어요</p>
                <S.MakeBtn
                  src={btnMakeChar}
                  alt="캐릭터 만들러가기"
                  onClick={onClickCharBtn}
                />
              </S.BodyContainerN>
            </>
          ) : (
            <S.Body>
              <S.Bg src={bg} alt="배경" />
              <S.BoardBG src={boardBG} alt="확인" />
              <S.BodyContainer>
                {charactersData.map((item, index) => (
                  <S.CharacterContainer
                    key={index}
                    onClick={() => onClickCharacter(index)}
                  >
                    <S.CharacterMemoBG src={memoBlue} alt="메모 배경" />
                    <S.Character>
                      <S.CharacterImg src={item.imageUrl} alt="이미지" />
                    </S.Character>
                    <S.CharacterName>{item.name}</S.CharacterName>
                  </S.CharacterContainer>
                ))}
              </S.BodyContainer>
              <S.PageWrapper>
                {pageNumbers.map((pageNumber) => (
                  <>
                    <S.PageNum
                      key={pageNumber}
                      style={{
                        color: pageNumber === currPage ? "#947A48" : "#C9B782",
                      }}
                      onClick={() => onClickPage(pageNumber)}
                    >
                      {pageNumber}
                    </S.PageNum>
                  </>
                ))}
              </S.PageWrapper>
            </S.Body>
          )}
        </>
      ) : (
        <>
          <S.BgT src={bg} alt="배경" />
          <S.BodyContainerT>
            <S.CardBG src={cardBG} alt="배경" />
            <S.CardContainer>
              <S.CardCharacter>
                <S.CardCharacterBG src={memoBlue} alt="메모 배경" />
                <S.CardCharacterImg src={selectedChar?.imageUrl} alt="이미지" />
              </S.CardCharacter>
              <S.CardDataContainer>
                <S.CardCharName>{selectedChar?.name}</S.CardCharName>
                <S.CardCharFeat>{selectedChar?.personality}</S.CardCharFeat>
                <S.MakeStoryBtn src={btnStoryMake} onClick={onClickStoryBtn} />
              </S.CardDataContainer>
            </S.CardContainer>
          </S.BodyContainerT>
        </>
      )}
    </S.Container>
  );
};
