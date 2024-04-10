import * as S from "./style";
import logo from "../../assets/logo.png";
import { useNavigate } from "react-router-dom";
import { useAtomValue } from "jotai";
import { accessTokenAtom } from "../../store/jotaiAtoms";
import {
  btnArrowL,
  btnArrowR,
  btnProfile,
  btnSettings,
  btnStoryMake,
  bgStoryMake,
} from "../../assets/Home";

export const Home = () => {
  const [accessToken] = useAtomValue(accessTokenAtom);
  const navigate = useNavigate();

  const onClickMakeBtn = () => {
    if (accessToken) {
      navigate("/guide-first");
    } else {
      navigate("/login");
    }
  };

  const onClickProfile = () => {
    if (accessToken) {
      navigate("/logout");
    } else {
      navigate("/login");
    }
  };

  return (
    <S.Container>
      <S.Header>
        <S.Profile src={btnProfile} alt="내 프로필" onClick={onClickProfile} />
        <S.Logo src={logo} alt="꼬마작가" />
        <S.Settings src={btnSettings} alt="설정" />
      </S.Header>
      <S.Body>
        <S.Arrows src={btnArrowL} alt="btnArrowL" />
        <S.StoryMake>
          <S.StoryMakeBG src={bgStoryMake} alt="배경" />
          <S.StoryMakeBtn
            src={btnStoryMake}
            alt="동화 만들기"
            onClick={onClickMakeBtn}
          />
        </S.StoryMake>
        <S.Arrows src={btnArrowR} alt="btnArrowR" />
      </S.Body>
    </S.Container>
  );
};
