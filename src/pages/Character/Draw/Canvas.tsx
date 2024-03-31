import { fabric } from "fabric";
import { useEffect, useRef, useState } from "react";
import { styled } from "styled-components";
import { useAtom } from 'jotai';
import { canvasImageDataAtom } from '../../../store/jotaiAtoms';

export const Canvas = () => {
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

  return (
    <>
      <CanvasContainer ref={canvasContainerRef}>
        <canvas ref={canvasRef} />
        <button style={{width:50, height:50, backgroundColor: "beige"}} onClick={saveAsImage}>Save</button>
      </CanvasContainer>
    </>
  );
};

export default Canvas;

const CanvasContainer = styled.div`
  width: 100%;
  height: 90%;
`;