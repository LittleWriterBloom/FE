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
  isSDModeAtom,
} from "../../../store/jotaiAtoms";
import {
  bg,
  boardBG,
  btnAI,
  btnMakeChar,
  btnStoryMake,
  cardBG,
  memoBlue,
  title,
} from "../../../assets/Character/MyCharacters";
import { btnHome, btnCheck, ggummi2, btnBack } from "../../../assets";
import apis from "../../../apis/apis";

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
  const [, setIsSDAtom] = useAtom(isSDModeAtom);

  const onClickHomeBtn = () => {
    navigate("/");
  };

  const onClickCharBtn = () => {
    navigate("/character");
  };

  const getCharactersData = async () => {
    if (act) {
      try {
        const config = {
          headers: {
            Authorization: `Bearer ${act}`,
          },
        };
        const res = await apis.get("/character", config);
        console.log(res.data);
        setCharactersData(res.data.data);
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
      setIsSDAtom(false);
    }
    navigate("/story/stage");
  };

  const onClickAIStoryBtn = () => {
    if (selectedChar) {
      setCharImg(selectedChar.imageUrl || "");
      setCharName(selectedChar.name || "");
      setCharFeat(selectedChar.personality || "");
      setCharId(selectedChar.id);
      setIsSDAtom(true);
    }
    navigate("/story/stage");
  };

  useEffect(() => {
    getCharactersData();
  }, [act]);

  const onClickCharacter = (index: number) => {
    const selected = charactersData[index];
    setSelectedChar(selected);
    setCard(true);
  };

  const onClickBackBtn = () => {
    setCard(false);
  };

  return (
    <S.Container>
      <S.Header>
        <S.Home src={btnHome} alt="홈" onClick={onClickHomeBtn} />
        {card === true && (
          <S.ExitBtn src={btnBack} alt="나가기" onClick={onClickBackBtn} />
        )}
        <S.Check src={btnCheck} alt="확인" />
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
                <S.MakeStoryBtn src={btnAI} onClick={onClickAIStoryBtn} />
              </S.CardDataContainer>
            </S.CardContainer>
          </S.BodyContainerT>
        </>
      )}
    </S.Container>
  );
};
