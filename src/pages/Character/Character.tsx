import * as S from './style';
import { useNavigate } from 'react-router-dom';
import {
  bring,
  draw,
  paint
} from '../../assets/Character';
import {
  btnHome,
  ggummi
} from '../../assets';

export const Character = () => {
  const navigate = useNavigate();

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