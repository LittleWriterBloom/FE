import * as S from "./style";
import { useNavigate } from "react-router-dom";
// import { useAtom, useAtomValue } from "jotai";
import { completeBg, book } from "../../../assets/Character";
import { btnHome } from "../../../assets";
import { useAtom, useAtomValue } from "jotai";
import { 
  canvasImageDataAtom, 
  characterNameAtom, 
  characterPersonalityAtom,
  accessTokenAtom
} from "../../../store/jotaiAtoms";
import complete from "../../../assets/Lottie/complete1.json";
import Lottie from "react-lottie-player";
import { useEffect } from "react";
import apis from "../../../apis/apis";

export const Complete = () => {
  const navigate = useNavigate();
  const canvasImageData = useAtomValue(canvasImageDataAtom);
  const characterName = useAtomValue(characterNameAtom);
  const characterPersonality = useAtomValue(characterPersonalityAtom);
  const [act] = useAtom(accessTokenAtom);
  const ImageData = canvasImageData?.split(",")[1];

  useEffect(() => {
    setTimeout(() => {
      postCharacterData(characterData);
    }, 4000); 
  }, [])
  interface CharacterData {
    name: string | null;
    personality: string | null;
    base64Image: string | undefined;
  }
  
  const characterData = {
    name: characterName,
    personality: characterPersonality,
    base64Image: ImageData
  };

  const postCharacterData = async(characterData: CharacterData) => {
    const config = {
      headers: {
        Authorization: `Bearer ${act}`,
      },
    };

    if (act) {
      try {
        const res = await apis.post("/character", characterData, config);
        console.log(res.data);
        navigate("/character/mycharacters")
      } catch (err) {
        console.error(err);
      }
    }
  }

  const onClickHomeBtn = () => {
    navigate("/");
  };

  return (
    <S.Container>
      <S.Bg src={completeBg} alt="배경" />
      <S.Book src={book} alt="책" />
      <S.LottieWrapper>
        <Lottie loop animationData={complete} play style={{width: "115vw"}}/>
      </S.LottieWrapper>
      <S.Header>
        <S.Home src={btnHome} alt="홈" onClick={onClickHomeBtn} />
      </S.Header>
      <S.Body>
        <S.Personality>{characterPersonality}</S.Personality>
        <S.Name>{characterName}</S.Name>
        {canvasImageData && (
          <S.Character src={canvasImageData} alt="Saved Image" />
        )}
      </S.Body>

    </S.Container>
  );
};
