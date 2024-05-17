import * as S from "./style";
import { useNavigate } from "react-router-dom";
import { fabric } from "fabric";
import { useEffect, useRef, useState } from "react";
import { useAtom } from "jotai";
import {
  aiImageDataAtom,
  canvasImageDataAtom,
  characterDescriptAtom,
  originImageDataAtom,
} from "../../../store/jotaiAtoms";
import { btnHome, btnCheck, btnCheckG } from "../../../assets";
import {
  btnPalette,
  blue,
  brown,
  green,
  lightBlue,
  orange,
  pink,
  purple,
  red,
  yellow,
  yellowGreen,
  brushBase,
  eraser,
  penCase,
  palette,
  black,
  white,
  lightOrange,
  mint,
  lightOrangePink,
  lightPink,
  lightPurple,
  grey,
  paper,
} from "../../../assets/Character/Draw";
import {
  brushBlack,
  brushBlue,
  brushBrown,
  brushGreen,
  brushLightBlue,
  brushOrange,
  brushPink,
  brushPurple,
  brushRed,
  brushYellow,
  brushYellowGreen,
  brushWhite,
  brushLightOrange,
  brushMint,
  brushLightOrangePink,
  brushLightPink,
  brushLightPurple,
  brushGrey,
  brushBaseS,
} from "../../../assets/Character/Draw/Brushes";

export const DrawAi = () => {
  const navigate = useNavigate();
  const canvasContainerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef(null);
  const [canvas, setCanvas] = useState<fabric.Canvas | null>();
  const [isCanvasEmpty, setIsCanvasEmpty] = useState<boolean>(true);
  const [, setCanvasImg] = useAtom(canvasImageDataAtom);
  const [, setOriginImg] = useAtom(originImageDataAtom);
  const [, setAiImg] = useAtom(aiImageDataAtom);
  const [isPalette, setIsPalette] = useState(true);
  const [brushColor, setBrushColor] = useState<string>("#393939");
  const [, setDescript] = useAtom(characterDescriptAtom);
  const [brushWidth, setBrushWidth] = useState<number>(10);
  const [isEraserActive, setIsEraserActive] = useState<boolean>(false);
  const [brushSrc, setBrushSrc] = useState(brushBase);
  const [isBrushActive, setIsBrushActive] = useState(false);

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

  const color01 = [
    "#FF1515",
    "#FFAD0E",
    "#ECFF15",
    "#5BFF0E",
    "#00C72C",
    "#15D5FF",
    "#3870FF",
    "#B43AFF",
    "#FF5BBD",
    "#B77A32",
  ];

  const color02 = [
    "#FF5BBD",
    "#B77A32",
    "#393939",
    "#F9F9F9",
    "#FFEAA1",
    "#0EFFA8",
    "#FF8F77",
    "#FFACD9",
    "#E69FFF",
    "#B9B9B9",
  ];

  // const penType = [pencilBase, brushBase, crayonBase, eraser];

  const brushColorType01 = [
    brushRed,
    brushOrange,
    brushYellow,
    brushYellowGreen,
    brushGreen,
    brushLightBlue,
    brushBlue,
    brushPurple,
    brushPink,
    brushBrown,
  ];

  const brushColorType02 = [
    brushPink,
    brushBrown,
    brushBlack,
    brushWhite,
    brushLightOrange,
    brushMint,
    brushLightOrangePink,
    brushLightPink,
    brushLightPurple,
    brushGrey,
  ];

  useEffect(() => {
    setAiImg("");
    setOriginImg("");
    setDescript("");

    const canvasContainer = canvasContainerRef.current;
    const canvasElement = canvasRef.current;

    if (canvasContainer && canvasElement) {
      const newCanvas = new fabric.Canvas(canvasElement, {
        width: canvasContainer.offsetWidth,
        height: canvasContainer.offsetHeight,
      });
      setCanvas(newCanvas);

      return () => {
        newCanvas.dispose();
      };
    }
  }, []);

  useEffect(() => {
    if (canvas) {
      const objects = canvas.getObjects().map((obj) => obj);
      canvas.clear();
      const rect = new fabric.Rect({
        left: 0,
        top: 0,
        width: canvas.width,
        height: canvas.height,
        fill: "white",
        selectable: false,
      });
      canvas.add(rect);
      canvas.isDrawingMode = true;
      canvas.freeDrawingBrush.width = brushWidth;
      canvas.freeDrawingBrush.color = isEraserActive ? "white" : brushColor; // 지우개 모드에 따른 색상 설정
      canvas.renderAll();
      objects.forEach((obj) => canvas.add(obj));
      canvas.on("path:created", () => {
        setIsCanvasEmpty(canvas.isEmpty());
      });
    }
  }, [canvas, brushColor, brushWidth, isEraserActive]);

  const saveAsImage = () => {
    if (canvas) {
      const imageData = canvas.toDataURL({
        format: "png",
        quality: 1,
      });

      setCanvasImg(imageData);
      setOriginImg(imageData.split(",")[1]);
      navigate("/character/descript");
    } else {
      alert("캐릭터를 그려주세요.");
    }
  };

  const onClickHomeBtn = () => {
    navigate("/");
  };

  const onClcickPalette = () => {
    setIsPalette(false);
  };
  const onClcickPaletteT = () => {
    setIsPalette(true);
  };

  const onColorClick01 = (index: number) => {
    const colosrS = color01[index];
    setBrushColor(colosrS);
    setBrushSrc(brushColorType01[index]);
    setIsEraserActive(false);
    setIsBrushActive(true);
  };

  const onColorClick02 = (index: number) => {
    const colosrS = color02[index];
    setBrushColor(colosrS);
    setBrushSrc(brushColorType02[index]);
    setIsEraserActive(false);
    setIsBrushActive(true);
  };

  const handleBrushWidthChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const newWidth = parseInt(event.target.value);
    setBrushWidth(newWidth);
    if (canvas) {
      canvas.freeDrawingBrush.width = newWidth;
      canvas.renderAll();
    }
  };

  const handleEraserClick = () => {
    setIsEraserActive(true); // 지우개 모드 활성화
    setIsBrushActive(false);
    if (canvas) {
      canvas.freeDrawingBrush.color = "white";
    }
  };

  const handleBrushClick = () => {
    setIsBrushActive(true);
    setIsEraserActive(false);
    if (brushSrc === brushBase) {
      setBrushSrc(brushBaseS);
    }
  };

  return (
    <S.Container>
      <S.Header>
        <S.Home src={btnHome} alt="홈" onClick={onClickHomeBtn} />
        <S.Logo>주인공 만들기</S.Logo>
        {isCanvasEmpty ? (
          <S.Check src={btnCheck} alt="확인" onClick={saveAsImage} />
        ) : (
          <S.Check src={btnCheckG} alt="확인(활성화)" onClick={saveAsImage} />
        )}
      </S.Header>
      <S.DrawAreaContainer>
        <S.Paper src={paper} alt="종이" />
        <S.DrawArea ref={canvasContainerRef}>
          <canvas ref={canvasRef} />
        </S.DrawArea>
        <S.BrushControlBarWrapper>
          <S.BrushControlBar
            type="range"
            min="1"
            max="50"
            value={brushWidth}
            onChange={handleBrushWidthChange}
          />
        </S.BrushControlBarWrapper>
      </S.DrawAreaContainer>
      <S.Body>
        <S.ColorPalette>
          <S.PaletteBG src={palette} alt="palette" />
          {isPalette === true ? (
            <S.PaletteContents>
              <S.ColorWrapper>
                {palette01.map((color, index) => (
                  <S.Color
                    key={index}
                    src={color}
                    alt={color}
                    onClick={() => onColorClick01(index)}
                  />
                ))}
              </S.ColorWrapper>
              <S.PaletteBtn
                src={btnPalette}
                alt="다음 팔레트"
                onClick={onClcickPalette}
              />
            </S.PaletteContents>
          ) : (
            <S.PaletteContents>
              <S.PaletteBtn
                src={btnPalette}
                alt=" 팔레트"
                onClick={onClcickPaletteT}
                style={{ transform: "rotate(180deg)" }}
              />
              <S.ColorWrapper>
                {palette02.map((color, index) => (
                  <S.Color
                    key={index}
                    src={color}
                    alt={color}
                    onClick={() => onColorClick02(index)}
                  />
                ))}
              </S.ColorWrapper>
            </S.PaletteContents>
          )}
        </S.ColorPalette>
        <S.PenCase>
          <S.PenCaseImg src={penCase} alt="penCase" />
          <S.PenWrapper>
            <S.PenType
              src={brushSrc}
              alt="brushBase"
              onClick={handleBrushClick} // 지우개 아이콘 클릭 시 지우개 모드로 전환
              style={
                isBrushActive
                  ? { height: "7.5rem", width: "auto", marginLeft: "-5rem" }
                  : undefined
              }
            />
            <S.PenType
              src={eraser}
              alt="eraser"
              onClick={handleEraserClick} // 지우개 아이콘 클릭 시 지우개 모드로 전환
              style={
                isEraserActive
                  ? { height: "10rem", width: "auto", marginLeft: "-5rem" }
                  : undefined
              }
            />
          </S.PenWrapper>
        </S.PenCase>
      </S.Body>
    </S.Container>
  );
};
