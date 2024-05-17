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
  crayonBase,
  eraser,
  pencilBase,
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

export const DrawAi = () => {
  const navigate = useNavigate();
  const canvasContainerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef(null);
  const [canvas, setCanvas] = useState<fabric.Canvas | null>();
  const [isCanvasEmpty, setIsCanvasEmpty] = useState<boolean>(true); // 캔버스가 비어있는지 여부 상태 추가
  const [, setCanvasImg] = useAtom(canvasImageDataAtom);
  const [, setOriginImg] = useAtom(originImageDataAtom);
  const [, setAiImg] = useAtom(aiImageDataAtom);
  const [isPalette, setIsPalette] = useState(true);
  const [brushColor, setBrushColor] = useState<string>("black");
  const [, setDescript] = useAtom(characterDescriptAtom);

  useEffect(() => {
    setAiImg("");
    setOriginImg("");
    setDescript("");

    const canvasContainer = canvasContainerRef.current;
    const canvasElement = canvasRef.current;

    if (canvasContainer && canvasElement) {
      // 캔버스 생성
      const newCanvas = new fabric.Canvas(canvasElement, {
        width: canvasContainer.offsetWidth,
        height: canvasContainer.offsetHeight,
      });
      setCanvas(newCanvas);

      // 언마운트 시 캔버스 정리
      return () => {
        newCanvas.dispose();
      };
    }
  }, []);

  useEffect(() => {
    if (canvas) {
      // 배경을 하얀색으로 설정하는 사각형 생성
      const rect = new fabric.Rect({
        left: 0,
        top: 0,
        width: canvas.width,
        height: canvas.height,
        fill: "white",
        selectable: false, // 선택 불가능하도록 설정
      });

      canvas.add(rect); // 캔버스에 사각형 추가

      canvas.isDrawingMode = true;
      canvas.freeDrawingBrush.width = 10;
      canvas.freeDrawingBrush.color = brushColor;
      canvas.renderAll();

      // 캔버스 이벤트 리스너 등록
      canvas.on("path:created", () => {
        setIsCanvasEmpty(canvas.isEmpty());
      });
    }
  }, [canvas, brushColor]);

  // 이미지 저장 함수
  const saveAsImage = () => {
    if (canvas) {
      // 캔버스의 이미지 데이터 가져오기
      const imageData = canvas.toDataURL({
        format: "png", // 이미지 포맷 지정 (png, jpeg 등)
        quality: 1, // 이미지 품질 (0 ~ 1)
      });

      setCanvasImg(imageData);
      setOriginImg(imageData.split(",")[1]);
      navigate("/character/descript");
      /*
			// 이미지 데이터를 사용하여 이미지 파일 생성
			const link = document.createElement("a");
			link.href = imageData;
			link.download = "canvas_image.png"; // 다운로드할 이미지 파일 이름 지정
			document.body.appendChild(link);
			link.click();
			document.body.removeChild(link);
      */
    } else {
      alert("캐릭터를 그려주세요.");
    }
  };

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

  const penType = [pencilBase, brushBase, crayonBase, eraser];

  const onClickHomeBtn = () => {
    navigate("/");
  };

  const onClcickPalette = () => {
    setIsPalette(false);
  };
  const onClcickPaletteT = () => {
    setIsPalette(true);
  };

  const onColorClick = (color: string) => {
    const colosrS = color.split("/")[5].split(".")[0];
    console.log(colosrS);
    setBrushColor(colosrS);
  };

  return (
    <S.Container>
      <S.Header>
        <S.Home src={btnHome} alt="홈" onClick={onClickHomeBtn} />
        <S.Logo>주인공 만들기</S.Logo>
        {isCanvasEmpty ? (
          <S.Check src={btnCheck} alt="확인" onClick={saveAsImage} />
        ) : (
          <S.Check
            src={btnCheckG}
            alt="확인(활성화)"
            onClick={saveAsImage}
          />
        )}
      </S.Header>
      <S.DrawAreaContainer>
        <S.Paper src={paper} alt="종이" />
        <S.DrawArea ref={canvasContainerRef}>
          <canvas ref={canvasRef} />
        </S.DrawArea>
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
                    onClick={() => onColorClick(color)}
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
                isPalette
              />
              <S.ColorWrapper>
                {palette02.map((color, index) => (
                  <S.Color
                    key={index}
                    src={color}
                    alt={color}
                    onClick={() => onColorClick(color)}
                  />
                ))}
              </S.ColorWrapper>
            </S.PaletteContents>
          )}
        </S.ColorPalette>
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
