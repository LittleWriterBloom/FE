import * as S from "./style";
import { useNavigate } from "react-router-dom";
// import { useAtom, useAtomValue } from "jotai";
import { completeBg } from "../../../assets/Character";
import { btnHome } from "../../../assets";
import { useAtom } from "jotai";
import {
  characterNameAtom,
  characterPersonalityAtom,
  accessTokenAtom,
  aiImageDataAtom,
  characterDescriptAtom,
  originImageDataAtom,
} from "../../../store/jotaiAtoms";
import Lottie from "react-lottie-player";
import characterCompletion from "../../../assets/Lottie/characterCompletion.json";
import { useEffect } from "react";
import apis from "../../../apis/apis";

export const Complete = () => {
  const navigate = useNavigate();
  const [aiImg] = useAtom(aiImageDataAtom);
  const [originImg, ] = useAtom(originImageDataAtom);
  const [descript] = useAtom(characterDescriptAtom);
  const [characterName] = useAtom(characterNameAtom);
  const [characterPersonality] = useAtom(characterPersonalityAtom);
  const [act] = useAtom(accessTokenAtom);

  useEffect(() => {
    setTimeout(() => {
      postCharacterData(characterData);
    }, 2000);
  }, []);

  interface CharacterData {
    name: string | null;
    personality: string | null;
    description: string | null;
  }

  const characterData = {
    name: characterName,
    personality: characterPersonality,
    description: descript,
    imageType: "URL",
    imageUrl: aiImg,
    originImageUrl: originImg
  };

  const postCharacterData = async (
    characterData: CharacterData,
  ) => {
    const config = {
      headers: {
        Authorization: `Bearer ${act}`,
      },
    };

    if (act) {
      try {
        const res = await apis.post("/character", characterData, config);
        console.log(res.data);
        navigate("/character/mycharacters");
      } catch (err) {
        console.error(err);
      }
    }
  };

  const onClickHomeBtn = () => {
    navigate("/");
  };

  console.log(characterData);
  return (
    <S.Container>
      <S.Bg src={completeBg} alt="배경" />
      <S.LottieWrapper>
        <Lottie
          loop
          animationData={characterCompletion}
          play
          style={{
            width: "105vw",
            paddingLeft: "2.3vw",
          }}
        />
      </S.LottieWrapper>
      {/* <S.Book src={book} alt="책" /> */}
      <S.Header>
        <S.Home src={btnHome} alt="홈" onClick={onClickHomeBtn} />
      </S.Header>
      <S.Body>
        <S.Personality>{characterPersonality}</S.Personality>
        <S.Name>{characterName}</S.Name>
        {aiImg && <S.Character src={aiImg} alt="Saved Image" />}
      </S.Body>
    </S.Container>
  );
};
