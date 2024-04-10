import * as S from "./style";
import { useNavigate } from "react-router-dom";
// import { useAtom, useAtomValue } from "jotai";
import { completeBg } from "../../../assets/Character";
import { btnHome } from "../../../assets";
import { useAtom, useAtomValue } from "jotai";
import { 
  canvasImageDataAtom, 
  characterNameAtom, 
  characterPersonalityAtom,
  accessTokenAtom
} from "../../../store/jotaiAtoms";
import axios from "axios";

export const Complete = () => {
  const navigate = useNavigate();
  const canvasImageData = useAtomValue(canvasImageDataAtom);
  const characterName = useAtomValue(characterNameAtom);
  const characterPersonality = useAtomValue(characterPersonalityAtom);
  const [act] = useAtom(accessTokenAtom);
  const ImageData = canvasImageData?.split(",")[1];

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
        const res = await axios.post("/api/character", characterData, config);
        console.log(res.data);
        alert("캐릭터를 저장하시겠습니까?")
        navigate("/character/mycharacters")
      } catch (err) {
        console.error(err);
      }
    }
  }

  const onClickHomeBtn = () => {
    navigate("/");
  };

  const onClickBtn = () => {
    postCharacterData(characterData);
  };

  return (
    <S.Container>
      <S.Bg src={completeBg} alt="배경" />
      <S.Header>
        <S.Home src={btnHome} alt="홈" onClick={onClickHomeBtn} />
      </S.Header>
      <S.Body onClick={onClickBtn}>
        <S.Personality>{characterPersonality}</S.Personality>
        <S.Name>{characterName}</S.Name>
        {canvasImageData && (
          <S.Character src={canvasImageData} alt="Saved Image" />
        )}
      </S.Body>

    </S.Container>
  );
};
