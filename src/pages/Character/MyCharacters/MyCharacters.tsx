import { useEffect, useState } from "react";
import * as S from "./style";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useAtom } from "jotai";
import { 
  accessTokenAtom, 
  canvasImageDataAtom, 
  characterId, 
  characterNameAtom, 
  characterPersonalityAtom 
} from "../../../store/jotaiAtoms";
import { title } from "../../../assets/Character/MyCharacters";
import {
  btnHome,
  btnCheck,
  ggummi,
  btnX,
} from "../../../assets";

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
  const [, setCharId] = useAtom(characterId);

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
        const res = await axios.get("/api/character", config);
        console.log(res.data);
        setCharactersData(res.data.data);
      } catch (err) {
        console.error(err);
      }
    }
  };

  const onClickStoryBtn = () => {
    if (selectedChar) {
      setCharImg(selectedChar.imageUrl || ''); 
      setCharName(selectedChar.name || ''); 
      setCharFeat(selectedChar.personality || ''); 
      setCharId(selectedChar.id);
    }
    navigate("/story/stage")
  }

  useEffect(() => {
    getCharactersData();
  }, [act]);

  const onClickCharacter = (index: number) => {
    const selected = charactersData[index];
    setSelectedChar(selected);
    setCard(true);
  };

  return (
    <S.Container>
      <S.Header>
        <S.Home src={btnHome} alt="홈" onClick={onClickHomeBtn} />
        <S.Logo src={title} alt="홈"/>
        <S.Check src={btnCheck} alt="확인" />
      </S.Header>
      <S.Body>
        {card === false ? (
          <>
            {charactersData.length === 0 ? (
              <S.BodyContainerN>
                <p>아직 캐릭터가 없어요</p>
                <S.MakeBtn onClick={onClickCharBtn}>캐릭터 만들러 가기</S.MakeBtn>
              </S.BodyContainerN>
            ) : (
              <S.BodyContainer>
                {charactersData.map((item, index) => (
                  <S.CharacterContainer key={index} onClick={() => onClickCharacter(index)}>
                    <S.Character>
                      <S.CharacterImg src={item.imageUrl} alt="이미지" />
                    </S.Character>
                    <S.CharacterName>{item.name}</S.CharacterName>
                  </S.CharacterContainer>
                ))}
              </S.BodyContainer>
            )}
          </>
        ) : (
          <S.BodyContainerT>
            <S.CardBG />
            <S.CardContainer>
              <S.CardCharacter>
                <S.CardCharacterImg src={selectedChar?.imageUrl} alt="이미지" />
              </S.CardCharacter>
              <S.CardDataContainer>
                <S.CardCharName>{selectedChar?.name}</S.CardCharName>
                <S.CardCharFeat>{selectedChar?.personality}</S.CardCharFeat>
                <S.MakeStoryBtn onClick={onClickStoryBtn}>동화 만들기</S.MakeStoryBtn>
                <S.ExitBtn src={btnX} alt="나가기" onClick={() => setCard(false)}/>
              </S.CardDataContainer>
            </S.CardContainer>
          </S.BodyContainerT>
        )}
        <S.Ggummi src={ggummi} alt='꾸미' />
      </S.Body>
    </S.Container>
  );
};
