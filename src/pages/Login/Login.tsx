//import { useEffect, useState } from "react";
import * as S from "./style";
import logo from '../../assets/logo.png';
// import { Link } from "react-router-dom";
//import { useAtom } from "jotai";
//import { userIdAtom } from "@src/lib/stateJotai";
import kakaoLogo from '../../assets/kakaoLogo.png';

export const Login = () => {
  const REST_API_KEY = import.meta.env.VITE_REST_API_KEY;
  const REDIRECT_URI = import.meta.env.VITE_REDIRECT_URI;

  const kakaoOAuthLink = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

  const loginHandler = () => {
    window.location.href = kakaoOAuthLink;
  };

  return (
    <S.Container>
      <S.LoginForm>
        <S.LoginBox>
          <S.Logo
            src={logo}
            width={120}
            alt="logo_login"
          />
          <S.LoginTitle>
            어렵고 복잡한 정보들,
            <br />
            이젠 쉽고 간략하게 들어요!
          </S.LoginTitle>
          <S.Subtitle>
            kakao 로그인을 통해
            <br />
            ASSUM 서비스를 이용해보세요!
          </S.Subtitle>
          <S.KakaoContainer>
            <S.KakaoButton onClick={loginHandler}>
              <img src={kakaoLogo} alt="kakaoLogo"></img>
              카카오 로그인
            </S.KakaoButton>
          </S.KakaoContainer>
          <S.Liner />
          <S.PartSection>
            <S.Terms>
              이용약관
            </S.Terms>
            <S.Policy>
              개인정보처리방침
            </S.Policy>
          </S.PartSection>
          <S.Footer>Ⓒ 꼬마작가</S.Footer>
        </S.LoginBox>
      </S.LoginForm>
    </S.Container>
  );
}
