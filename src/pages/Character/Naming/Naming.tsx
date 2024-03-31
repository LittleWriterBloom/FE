import * as S from "./style";
import { useNavigate } from "react-router-dom";
// import { useAtom, useAtomValue } from "jotai";
import {
  btnHome,
  btnCheck,
  ggummi
} from "../../../assets/Character/index";
import {
  easel
} from "../../../assets/Character/Naming/index";

export const Naming = () => {
  const navigate = useNavigate();


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
        <S.Easel src={easel} alt='이젤' />
        <S.Ggummi src={ggummi} alt='꾸미' />
        <S.BottomBox />
      </S.Body>
    </S.Container>
  );
};
