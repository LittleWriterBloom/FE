import * as S from "./style";
import { useNavigate } from "react-router-dom";
import { btnHome, btnCheck, dong } from "../../assets/index";
import { stageBg, textBG } from "../../assets/Story";
import { useState } from "react";
import { useAtomValue } from "jotai";
import { canvasImageDataAtom } from "../../store/jotaiAtoms";

export const Story = () => {
  const navigate = useNavigate();
  const [bg, setBg] = useState("");
  const canvasImageData = useAtomValue(canvasImageDataAtom);

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBg(e.target.value);
  };

  const onClickHomeBtn = () => {
    navigate("/");
  };
  const onClickCheck = () => {
    navigate("/story/guide");
  };

  return (
    <S.Container>
      <S.Bg src={stageBg} alt="배경" />
      <S.Header>
        <S.Home src={btnHome} alt="홈" onClick={onClickHomeBtn} />
        <S.Check src={btnCheck} alt="확인" onClick={onClickCheck} />
      </S.Header>
      <S.Body>
        <S.BGContainer>
          <S.BGText src={textBG} alt="동화의 배경을 상상해볼까요?" />
          <S.BGInput
            onChange={handleInput}
            type="name"
            placeholder="이야기 배경"
          />
          {canvasImageData && (
            <S.Character src={canvasImageData} alt="Saved Image" />
          )}
        </S.BGContainer>
        <S.Dong src={dong} alt="동동이" />
      </S.Body>
    </S.Container>
  );
};
