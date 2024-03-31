import * as S from "./style";
import { useNavigate } from "react-router-dom";
import { Canvas } from "./Canvas";
import {
  btnHome,
  btnCheck,
  btnPalette,
  black,
  blue,
  brown,
  green,
  grey,
  lightBlue,
  lightOrange,
  lightOrangePink,
  lightPink,
  lightPurple,
  mint,
  orange,
  pink,
  purple,
  red,
  white,
  yellow,
  yellowGreen,
  brushBase,
  crayonBase,
  eraser,
  pencilBase,
  penCase,
  palette,
} from "../../../assets/Character/Draw/index";

export const Draw = () => {
  const navigate = useNavigate();

  const palette01 = [
    red,
    orange,
    yellow,
    yellowGreen,
    green,
    lightBlue,
    blue,
    purple,
    pink,
    brown,
  ];
  /*
  const palette02 = [
    pink,
    brown,
    black,
    white,
    lightOrange,
    mint,
    lightOrangePink,
    lightPink,
    lightPurple,
    grey,
  ];
  */
  const penType = [pencilBase, brushBase, crayonBase, eraser];

  const onClickMakeBtn = () => {
    navigate("/");
  };

  const onClickCheck = () => {
    navigate("/character/naming");
  };

  return (
    <S.Container>
      <S.Header>
        <S.Home src={btnHome} alt="홈" onClick={onClickMakeBtn} />
        <S.Logo>주인공 만들기</S.Logo>
        <S.Check src={btnCheck} alt="확인" onClick={onClickCheck} />
      </S.Header>
      <S.Body>
        <S.ColorPalette>
          <S.PaletteBG src={palette} alt="palette" />
          <S.PaletteContents>
            <S.ColorWrapper>
              {palette01.map((color, index) => (
                <S.Color key={index} src={color} alt={color} />
              ))}
            </S.ColorWrapper>
            <S.PaletteBtn src={btnPalette} alt="다음 팔레트" />
          </S.PaletteContents>
        </S.ColorPalette>
        <S.DrawArea>
          <Canvas />
        </S.DrawArea>
        <S.PenCase>
          <S.PenCaseImg src={penCase} alt="penCase" />
          <S.PenWrapper>
            {penType.map((type, index) => (
              <S.PenType key={index} src={type} alt={type} />
            ))}
          </S.PenWrapper>
        </S.PenCase>
      </S.Body>
    </S.Container>
  );
};
