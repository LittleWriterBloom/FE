import { styled } from "styled-components";

export const Container = styled.div`
  position: relative;
  height: 100dvh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LogoutBox = styled.div`
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
  gap: 12dvh;
`;

export const Logo = styled.img`
  width: 10rem;
  height: auto;
  flex-shrink: 0;
  margin: 0 auto;
  align-items: center;
`;

export const LogoutBtn = styled.button`
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
