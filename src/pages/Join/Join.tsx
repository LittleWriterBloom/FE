import { useState } from "react";
import * as S from "./style";
import logo from '../../assets/logo.png';
// import { Link } from "react-router-dom";
//import { useAtom } from "jotai";
//import { userIdAtom } from "@src/lib/stateJotai";
import { useNavigate } from "react-router-dom";
import apis from "../../apis/apis";

export const Join = () => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const router = useNavigate();

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setId(e.target.value);
  };

  const handleInputPw = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const joinHandler = async () => {
    // 이메일 또는 패스워드가 비어있을 경우 회원가입 막음
    if (!id || !password) {
      alert("아이디와 비밀번호를 입력하세요.");
      return;
    }
    
    const data = {
      username: id,
      password: password,
    };
  
    try {
      const res = await apis.post("/auth/signup", data);
      if (res.status === 200) {
        alert("회원가입이 완료되었습니다.")
        router("/login");
      } else {
        alert("회원가입에 실패했습니다. 다시 시도해주세요.");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <S.Container>
      <S.LoginBox>
        <S.Logo
          src={logo}
          alt="logo_login"
        />
        <S.Join>회원가입</S.Join>
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
        <S.PartSection>
        </S.PartSection>
        <S.JoinBtn onClick={joinHandler}>
          회원가입
        </S.JoinBtn>
      </S.LoginBox>
    </S.Container>
  );
}
