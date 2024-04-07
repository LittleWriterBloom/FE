import * as S from "./style";
import logo from '../../assets/logo.png';
import { useNavigate } from "react-router-dom";
import { useAtom } from "jotai";
import { accessTokenAtom } from "../../store/jotaiAtoms";

export const Logout = () => {
  const router = useNavigate();
  const [, setAccessToken] = useAtom(accessTokenAtom);

  const logout = () => {
		if (confirm("정말 로그아웃 하시겠습니까?")) {
			localStorage.removeItem("accessToken");
			setAccessToken("");
      router("/login");
		}
  }

  return (
    <S.Container>
      <S.LogoutBox>
        <S.Logo
          src={logo}
          alt="logo_login"
        />
        <S.LogoutBtn onClick={logout}>
          로그아웃
        </S.LogoutBtn>
      </S.LogoutBox>
    </S.Container>
  );
}
