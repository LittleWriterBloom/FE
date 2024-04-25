import * as S from "./style";
import logo from "../../assets/logo.png";
import { useNavigate } from "react-router-dom";
import { useAtom } from "jotai";
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
  const [accessToken] = useAtom(accessTokenAtom);
  const navigate = useNavigate();

  const onClickMakeBtn = () => {
    if (accessToken) {
      navigate("/character");
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
        <S.Arrows src={btnArrowL} alt="btnArrowL" style={{opacity: "0"}} />
        <S.StoryMake>
          <S.StoryMakeBG src={bgStoryMake} alt="배경" />
          <S.StoryMakeBtn
            src={btnStoryMake}
            alt="동화 만들기"
            onClick={onClickMakeBtn}
          />
        </S.StoryMake>
        <S.Arrows src={btnArrowR} alt="btnArrowR" style={{opacity: "0"}} />
      </S.Body>
    </S.Container>
  );
};
