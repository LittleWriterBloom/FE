import { useEffect, useState } from "react";
import * as S from "./style";
import logo from '../../assets/logo.png';
// import { Link } from "react-router-dom";
//import { useAtom } from "jotai";
//import { userIdAtom } from "@src/lib/stateJotai";
import kakaoLogo from '../../assets/kakaoLogo.png';
import { Link, useNavigate } from "react-router-dom";
import { useAtom } from "jotai";
import { accessTokenAtom } from "../../store/jotaiAtoms";
import apis from "../../apis/apis";

export const Login = () => {
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");
  const router = useNavigate();
  const [act, setAct] = useAtom(accessTokenAtom);
  
  // const REST_API_KEY = import.meta.env.VITE_REST_API_KEY;
  // const REDIRECT_URI = import.meta.env.VITE_REDIRECT_URI;

  const kakaoOAuthLink = `https://kauth.kakao.com/oauth/authorize?client_id={REST_API_KEY}&redirect_uri={REDIRECT_URI}&response_type=code`;

  useEffect(() => {
    // act 상태가 업데이트될 때마다 콘솔에 출력
    console.log("Access Token from Jotai:", act);
    if (act) {
      router("/"); // act가 업데이트 되면 라우팅
    }
  }, [act, router]); // act가 변경될 때마다 useEffect 실행

  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setId(event.target.value);
  };

  const handleInputPw = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPw(event.target.value);
  };

  const loginHandler = async () => {
    // 이메일 또는 패스워드가 비어있을 경우 로그인 막음
    if (!id || !pw) {
      alert("아이디와 비밀번호를 입력하세요.");
      return;
    }
    
    const data = {
      username: id,
      password: pw
    };
  
    try {
      const res = await apis.post("/auth/signin", data);
      const accessToken = res.data.data[0].token;
      setAct(accessToken); // 액세스 토큰을 Jotai 상태에 업데이트
      localStorage.setItem("accessToken", accessToken);
    } catch (err) {
      alert("아이디와 비밀번호를 정확하게 입력해주세요.")
      console.log(err);
    }
  };

  const kakaologinHandler = () => {
    window.location.href = kakaoOAuthLink;
  };

  return (
    <S.Container>
      <S.LoginBox>
        <S.Logo
          src={logo}
          alt="logo_login"
        />
        <S.InputContainer>
          <S.InputForm 
            onChange={handleInput}
            type="id" 
            placeholder="아이디" 
          />
          <S.InputForm 
            onChange={handleInputPw}
            type="password" 
            placeholder="비밀번호" 
          />
        </S.InputContainer>
        <S.LoginBtn onClick={loginHandler}>
          로그인
        </S.LoginBtn>
        <S.KakaoButton onClick={kakaologinHandler}>
          <S.KakaoLogo src={kakaoLogo} alt="kakaoLogo"></S.KakaoLogo>
          <S.KakaoLogin>카카오 로그인</S.KakaoLogin>
        </S.KakaoButton>
        <S.Liner />
        <S.PartSection>
          <Link to="/join">
            <S.Join>
              회원가입
            </S.Join>
          </Link>
          <S.Terms>
            이용약관
          </S.Terms>
          <S.Terms>
            개인정보처리방침
          </S.Terms>
        </S.PartSection>
      </S.LoginBox>
    </S.Container>
  );
}
