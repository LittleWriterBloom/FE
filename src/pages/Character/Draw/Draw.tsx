import * as S from "./style";
import { useNavigate } from "react-router-dom";
import { fabric } from "fabric";
import { useEffect, useRef, useState } from "react";
import { useAtom } from 'jotai';
import { canvasImageDataAtom } from '../../../store/jotaiAtoms';
import {
  btnHome,
  btnCheck,
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
} from "../../../assets/Character/Draw";

export const Draw = () => {
  const navigate = useNavigate();
	const canvasContainerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef(null);
  const [canvas, setCanvas] = useState<fabric.Canvas | null>();
  const [, setCanvasImageData] = useAtom(canvasImageDataAtom);

  useEffect(() => {
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
      canvas.isDrawingMode = true;
      canvas.freeDrawingBrush.width = 10;
      canvas.renderAll();
    }
  }, [canvas]);

	// 이미지 저장 함수
	const saveAsImage = () => {
		if (canvas) {
			// 캔버스의 이미지 데이터 가져오기
			const imageData = canvas.toDataURL({
				format: "png", // 이미지 포맷 지정 (png, jpeg 등)
				quality: 1, // 이미지 품질 (0 ~ 1)
			});

      setCanvasImageData(imageData); // jotai 상태 업데이트
      navigate("/character/naming");

      /*
			// 이미지 데이터를 사용하여 이미지 파일 생성
			const link = document.createElement("a");
			link.href = imageData;
			link.download = "canvas_image.png"; // 다운로드할 이미지 파일 이름 지정
			document.body.appendChild(link);
			link.click();
			document.body.removeChild(link);
      */
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

  return (
    <S.Container>
      <S.Header>
        <S.Home src={btnHome} alt="홈" onClick={onClickMakeBtn} />
        <S.Logo>주인공 만들기</S.Logo>
        <S.Check src={btnCheck} alt="확인" onClick={saveAsImage} />
      </S.Header>
        <S.DrawArea ref={canvasContainerRef}>
          <canvas ref={canvasRef} />
        </S.DrawArea>
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
