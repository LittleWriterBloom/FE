import * as S from './style';
import { useNavigate } from "react-router-dom";
import {
  btnHome,
  btn,
  ggummi,
} from '../../assets/Character/index';

export const Character = () => {
  const navigate = useNavigate();

  const onClickDrawBtn = () => {
    navigate("/character/draw");
  };
  return (
    <S.Container>
      <S.Header>
        <S.Profile src={btnHome} alt='홈' />
        <S.Logo>주인공 만들기</S.Logo>
        <S.Settings src={btnHome} alt='홈' />
      </S.Header>
      <S.Body>
        <S.BtnWrapper>
          <S.Btn>
            <S.BtnImg src={btn} alt='버튼' />
            <S.BtnContent>캐릭터 불러오기</S.BtnContent>
          </S.Btn>
          <S.Btn onClick={onClickDrawBtn}>
            <S.BtnImg src={btn} alt='버튼' />
            <S.BtnContent>내가 직접 그리기</S.BtnContent>
          </S.Btn>
          <S.Btn>
            <S.BtnImg src={btn} alt='버튼' />
            <S.BtnContent>색칠하기</S.BtnContent>
          </S.Btn>
        </S.BtnWrapper>
        <S.Ggummi src={ggummi} alt='꾸미' />
      </S.Body>
    </S.Container>
  )
}