import { styled } from "styled-components";

export const Container = styled.div`
  position: relative;
  padding: 30px 0;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LoginForm = styled.div`
  width: 100%;
  max-width: 600px;
  margin: 0;
  display: flex;
  justify-content: center;
  height: auto;
`;

export const LoginBox = styled.div`
  max-width: 400px;
  width: 100%;
  margin: auto auto;
  display: flex;
  justify-items: center;
  overflow: auto;
  flex-direction: column;
  align-items: center;
  background-color: white;
  border: 1px solid #e1e2e3;
  border-radius: 5px;
  padding: 20px;
`;

export const LoginTitle = styled.h2`
  font-size: 26px;
  letter-spacing: -0.023em;
  text-align: center;
  font-weight: 700;
  line-height: 32px;
`;

export const Subtitle = styled.p`
  color: #888;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-weight: 400;
  text-align: center;
  font-size: 14px;
  margin-top: 185px;
`;

export const FormTitle = styled.label`
  margin: 17px 0px 7px 0px;
  font-weight: 600;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-size: 14px;
  color: #888;
  width: 100%;
  text-align: left;
`;

export const KakaoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 60px;
`;

export const KakaoButton = styled.button`
  width: 400px;
  height: 60px;
  border: none;
  border-radius: 8px;
  background: #fee500;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
  color: #371d1e;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

export const Logo = styled.img`
  width: 269px;
  height: 117px;
  flex-shrink: 0;
  margin: 0 auto;
  align-items: center;
  padding-top: 150px;
  margin-bottom: 10px;
  padding-left: -2px;
`;

export const Chevron = styled.img`
  vertical-align: text-bottom;
  margin-left: 4px;
  opacity: 0.5;
`;

export const Liner = styled.hr`
  width: 100%;
  border: none;
  border-bottom: 1px solid #e1e2e3;
  margin-top: 30px;
`;

export const PartSection = styled.div`
  margin: 30px auto 15px auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const Terms = styled.a`
  margin-right: 12px;
  color: #767676;
  text-decoration: none;
  font-size: 13px;
  letter-spacing: 0.0192em;
  text-align: center;
  line-height: 18px;
  font-weight: 600;
`;

export const Policy = styled.a`
  color: #767676;
  text-decoration: none;
  font-size: 13px;
  letter-spacing: 0.0192em;
  text-align: center;
  line-height: 18px;
  font-weight: 900;
`;

export const Footer = styled.footer`
  font-size: 10px;
  line-height: 16px;
  margin-bottom: 30px;
  letter-spacing: 0.025em;
  text-align: center;
  font-family: "Arimo";
  color: #888;
  font-weight: 400;
`;