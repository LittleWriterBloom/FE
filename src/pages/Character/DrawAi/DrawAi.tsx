import * as S from "./style";
import { useNavigate } from "react-router-dom";
import { fabric } from "fabric";
import { useEffect, useRef, useState } from "react";
import { useAtom } from 'jotai';
import { accessTokenAtom, aiImageDataAtom, characterDescriptAtom } from '../../../store/jotaiAtoms';
import {
  btnHome,
  btnCheck,
  btnCheckG,
} from "../../../assets";
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
  aiCircleBtn,
} from "../../../assets/Character/Draw";
import Lottie from "react-lottie-player";
import loadAnim from "../../../assets/Lottie/loading.json";
import apis from "../../../apis/apis";
import { CompareAi } from "./CompareAi/CompareAi";

export const DrawAi = () => {
  const navigate = useNavigate();
	const canvasContainerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef(null);
  const [canvas, setCanvas] = useState<fabric.Canvas | null>();
  const [isCanvasEmpty, setIsCanvasEmpty] = useState<boolean>(true); // 캔버스가 비어있는지 여부 상태 추가
  const [canvasImg, setCanvasImg] = useState("");
  const [aiImg, setAiImg] = useAtom(aiImageDataAtom);
  const [isPalette, setIsPalette] = useState(true);
  const [brushColor, setBrushColor] = useState<string>('black');
  const [descript, setDescript] = useAtom(characterDescriptAtom);
  const [act] = useAtom(accessTokenAtom);
  const [clickCheck, setClickCheck] = useState(false);

  const [isLoading, setIsLoading] = useState(false);
  const [isCompareAi, setIsCompareAi] = useState(false);

  useEffect(() => {
    setAiImg("");
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
      canvas.isDrawingMode = true;
      canvas.freeDrawingBrush.width = 10;
      canvas.freeDrawingBrush.color = brushColor;
      canvas.renderAll();
      
      // 캔버스 이벤트 리스너 등록
      canvas.on('path:created', () => {
        setIsCanvasEmpty(canvas.isEmpty());
      });
    }
  }, [canvas, brushColor]);

	// 이미지 저장 함수
	const saveAsImage = () => {
		if (canvas && (isCanvasEmpty === false) && (descript !== "")) {
			// 캔버스의 이미지 데이터 가져오기
			const imageData = canvas.toDataURL({
				format: "png", // 이미지 포맷 지정 (png, jpeg 등)
				quality: 1, // 이미지 품질 (0 ~ 1)
			});

      setCanvasImg(imageData.split(",")[1]);
      setClickCheck(true);
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
    else if (canvas && (isCanvasEmpty === false) && (descript === "")) {
      alert("어떤 캐릭터인지 설명해주세요.");
    }
    else {
      alert("캐릭터를 그려주세요.");
    }
	};

  const changeToAi = () => {
    setIsLoading(true);
    postCharacterData(characterData);
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

  const onClickMakeBtn = () => {
    navigate("/");
  };

  const onClcickPalette = () => {
    setIsPalette(false)
  }
  ;
  const onClcickPaletteT = () => {
    setIsPalette(true)
  };

  const onColorClick = (color: string) => { 
    const colosrS = color.split("/")[5].split(".")[0];
    console.log(colosrS);
    setBrushColor(colosrS);
  };

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDescript(e.target.value);
  };

  interface CharacterData {
    prompt: string | null;
    base64Image: string | null;
  }
  
  const characterData = {
    prompt: descript,
    imageType: "BASE_64",
    base64Image: canvasImg
  };
  console.log(characterData);

  const postCharacterData = async(characterData: CharacterData) => {
    const config = {
      headers: {
        Authorization: `Bearer ${act}`,
      },
    };

    if (act) {
      try {
        const res = await apis.post("/character/ai", characterData, config);
        console.log(res.data);
        setCanvasImg(res.data.data[0].originUrl);
        setAiImg(res.data.data[0].aiGeneratedImageUrl);
        setIsLoading(true);
        setIsCompareAi(true);
      } catch (err) {
        console.error(err);
      }
    }
  };

  const LoadingComp = () => {
    return (
      <>
        {isCompareAi ? (
          <CompareAi canvasImg={canvasImg} aiImg={aiImg} />
        ) : (
          <S.LoadingContainer>
            <S.LottieWrapper>
              <Lottie loop animationData={loadAnim} play />
            </S.LottieWrapper>
            <S.LoadingText>캐릭터 그리는 중 ...<br />약 1~2분 정도 걸려요.</S.LoadingText>
          </S.LoadingContainer>
          )}
      </>
    );
  };

  return (
    <S.Container>
      {isLoading ? (
        <LoadingComp />
      ) : (
        <>
          <S.Header>
            <S.Home src={btnHome} alt="홈" onClick={onClickMakeBtn} />
            <S.Logo>주인공 만들기</S.Logo>
            {isCanvasEmpty || (descript === "") ? (
              <S.Check src={btnCheck} alt="확인" onClick={saveAsImage}/>
            ) : (
              <>
                {clickCheck ? (
                  <S.Check src={aiCircleBtn} alt="확인(활성화)" onClick={changeToAi} />
                ) : (
                  <S.Check src={btnCheckG} alt="확인(활성화)" onClick={saveAsImage} />
                )} 
              </>
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
          <S.CharacterDataInput
            onChange={handleInput}
            type="name" 
            placeholder="어떤 캐릭터인지 설명해주세요."
          />
        </>
      )}
    </S.Container>
  );
};
