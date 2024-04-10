import { styled } from "styled-components";

export const Container = styled.div`
  position: relative;
  height: 100dvh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LoginBox = styled.div`
  max-width: 26rem;
  min-height: 84dvh;
  width: 100%;
  display: flex;
  justify-items: center;
  overflow: auto;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: white;
  border: 1px solid #e1e2e3;
  border-radius: 0.5rem;
  padding: 2rem;
`;

export const Logo = styled.img`
  width: 10rem;
  height: auto;
  flex-shrink: 0;
  margin: 0 auto;
  align-items: center;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin: 2rem auto 2.5rem auto;
`;

export const InputForm = styled.input `
  width: 20rem;
  height: 3.1rem;
  box-sizing: border-box;
  font-size: 1rem;
  font-weight: 400;
  border-bottom: 1px solid #c9c9c9;
  border-radius: 0;
`;

export const LoginBtn = styled.button`
  width: 20rem;
  height: 3.4rem;
  border: none;
  border-radius: 0.4rem;
  background: #FFA131;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.6rem;
  color: #FFFFFF;
  font-size: 1.1rem;
  font-style: normal;
  font-weight: 600;
  margin-bottom: 1rem;
  cursor: pointer;
`;

export const KakaoButton = styled.button`
  width: 20rem;
  height: 3.4rem;
  border: none;
  border-radius: 0.4rem;
  background: #FEE500;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.6rem;
  color: #181600;
  position: relative;
  cursor: pointer;
`;

export const KakaoLogo = styled.img`
  width: 2rem;
  height: 2rem;
  margin: 0;
  position: absolute;
  left: 1rem;
`;

export const KakaoLogin = styled.p`
  color: #181600;
  font-size: 1.1rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  display: inline;
`;

export const Liner = styled.hr`
  width: 20rem;
  border: none;
  border-bottom: 1px solid #e1e2e3;
  margin-top: 4rem;
`;

export const PartSection = styled.div`
  margin: 1.3rem auto 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const Terms = styled.p`
  margin: auto 0.5rem;
  color: #767676;
  font-size: 0.8rem;
  text-align: center;
  font-weight: 600;
  text-decoration: none;
  cursor: pointer;
`;

export const Join = styled.p`
  margin: auto 0.5rem;
  color: #767676;
  font-size: 0.8rem;
  text-align: center;
  font-weight: 600;
  text-decoration: underline;
  cursor: pointer;
`;

