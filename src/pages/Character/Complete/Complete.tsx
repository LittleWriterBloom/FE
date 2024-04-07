import * as S from "./style";
import { useNavigate } from "react-router-dom";
// import { useAtom, useAtomValue } from "jotai";
import { completeBg } from "../../../assets/Character";
import { btnHome } from "../../../assets";
import { useAtomValue } from "jotai";
import { canvasImageDataAtom, characterNameAtom } from "../../../store/jotaiAtoms";

export const Complete = () => {
  const navigate = useNavigate();
  const canvasImageData = useAtomValue(canvasImageDataAtom);
  const characterName = useAtomValue(characterNameAtom);

  const onClickHomeBtn = () => {
    navigate("/");
  };

  const onClickBtn = () => {
    navigate("/guide");
  };

  return (
    <S.Container>
      <S.Bg src={completeBg} alt="배경" />
      <S.Header>
        <S.Home src={btnHome} alt="홈" onClick={onClickHomeBtn} />
      </S.Header>
      <S.Body onClick={onClickBtn}>
        <S.Name>{characterName}</S.Name>
        {canvasImageData && (
          <S.Character src={canvasImageData} alt="Saved Image" />
        )}
      </S.Body>
    </S.Container>
  );
};
