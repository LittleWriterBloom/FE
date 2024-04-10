import * as S from './style';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BubbleP } from '../../components/Bubble/BubbleP'
import {
  bring,
  draw,
  paint
} from '../../assets/Character';
import {
  btnHome,
  ggummi,
} from '../../assets';

export const Character = () => {
  const navigate = useNavigate();
  const [showFirst, setShowFirst] = useState(false);
  const [showSecond, setShowSecond] = useState(false);
  const [showThird, setShowThird] = useState(false);
  const [showFourth, setShowFourth] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowFirst(true);
      setTimeout(() => {
        setShowSecond(true);
        setTimeout(() => {
          setShowThird(true);
          setTimeout(() => {
            setShowFourth(true);
          }, 2000); 
        }, 2000); 
      }, 2000); 
    }, 2000); 
  }, []);

  const onClickHomeBtn = () => {
    navigate("/");
  };

  const onClickDrawBtn = () => {
    navigate("/character/draw");
  };
  
  const onClickBringBtn = () => {
    navigate("/character/mycharacters");
  };

  return (
    <S.Container>
      {showFirst && <BubbleP text="동화를 만드려면 주인공이 있어야겠지?" length={38} />}
      {showSecond && <BubbleP text="만들어 놓은 캐릭터를 불러와도 되구," length={36} />}
      {showThird && <BubbleP text="직접 캐릭터를 그려봐도 좋아!" length={30} />}
      {showFourth && <BubbleP text="그리는 게 어렵다면 색칠만 해보는 건 어때?" length={42} />}
      <S.Header>
        <S.Home src={btnHome} alt='홈' onClick={onClickHomeBtn} />
        <S.Logo>주인공 만들기</S.Logo>
        <S.Settings src={btnHome} alt='홈' />
      </S.Header>
      <S.Body>
        <S.BtnWrapper>
          <S.Btn onClick={onClickBringBtn}>
            <S.BtnImg src={bring} alt='버튼' />
            <S.BtnContent>캐릭터 불러오기</S.BtnContent>
          </S.Btn>
          <S.Btn onClick={onClickDrawBtn}>
            <S.BtnImg src={draw} alt='버튼' />
            <S.BtnContent>내가 직접 그리기</S.BtnContent>
          </S.Btn>
          <S.Btn>
            <S.BtnImg src={paint} alt='버튼' />
            <S.BtnContent>색칠하기</S.BtnContent>
          </S.Btn>
        </S.BtnWrapper>
        <S.Ggummi src={ggummi} alt='꾸미' />
      </S.Body>
    </S.Container>
  )
}