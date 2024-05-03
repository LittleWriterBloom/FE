import * as S from "./style";
import { useNavigate } from "react-router-dom";
// import { useAtom, useAtomValue } from "jotai";
import { completeBg } from "../../../assets/Character";
import { btnHome } from "../../../assets";
import { useAtom } from "jotai";
import {
  canvasImageDataAtom,
  characterNameAtom,
  characterPersonalityAtom,
  accessTokenAtom,
  aiImageDataAtom,
  characterDescriptAtom,
} from "../../../store/jotaiAtoms";
import Lottie from "react-lottie-player";
import characterCompletion from "../../../assets/Lottie/characterCompletion.json";
import { useEffect } from "react";
import apis from "../../../apis/apis";

export const Complete = () => {
  const navigate = useNavigate();
  const [canvasImageData] = useAtom(canvasImageDataAtom);
  const [aiImg] = useAtom(aiImageDataAtom);
  const [descript] = useAtom(characterDescriptAtom);
  const [characterName] = useAtom(characterNameAtom);
  const [characterPersonality] = useAtom(characterPersonalityAtom);
  const [act] = useAtom(accessTokenAtom);

  useEffect(() => {
    setTimeout(() => {
      postCharacterData(characterData, characterAIData);
    }, 500);
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
    imageType: "BASE_64",
    base64Image: canvasImageData?.split(",")[1],
  };

  const characterAIData = {
    name: characterName,
    personality: characterPersonality,
    description: descript,
    imageType: "URL",
    imageUrl: aiImg,
  };

  const postCharacterData = async (
    characterData: CharacterData,
    characterAIData: CharacterData
  ) => {
    const config = {
      headers: {
        Authorization: `Bearer ${act}`,
      },
    };

    if (act && aiImg === "") {
      try {
        const res = await apis.post("/character", characterData, config);
        console.log(res.data);
        navigate("/character/mycharacters");
      } catch (err) {
        console.error(err);
      }
    }
    if (act && canvasImageData === "") {
      try {
        const res = await apis.post("/character", characterAIData, config);
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
  console.log(characterAIData);
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
        {canvasImageData && (
          <S.Character src={canvasImageData} alt="Saved Image" />
        )}
        {aiImg && <S.Character src={aiImg} alt="Saved Image" />}
      </S.Body>
    </S.Container>
  );
};
