import { createGlobalStyle } from "styled-components";

export const GlobalStyle = () => {
  return <GlobalStyleComponent />;
};

const GlobalStyleComponent = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    flex-shrink: 0;
  }
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    -ms-overflow-style: none;
    scrollbar-width: none; 
  }
  html {
    font-family: 'SUIT', sans-serif;
  }
  #root,
  html,
  body {
    width: 100%;
    height: 100dvh;
    overflow-x: hidden;
    /* 미디어 쿼리에 따른 폰트 크기 설정 */
    @media (max-width: 400px) {
      font-size: 9px;
    }
    @media (min-width: 401px) and (max-width: 480px) {
      font-size: 11px;
    }
    @media (min-width: 481px) and (max-width: 768px) {
      font-size: 12px;
    }
    @media (min-width: 769px) and (max-width: 1023px) {
      font-size: 14px;
    }
    @media (min-width: 1024px) and (max-width: 1439px) {
      font-size: 16px;
    }
    @media (min-width: 1440px) and (max-width: 1919px) {
      font-size: 18px;
    }
    @media (min-width: 1920px) {
      font-size: 21px;
    }
  }
  body, button, html {
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
    font-family:
      'Pretendard Variable',
      Pretendard,
      -apple-system,
      BlinkMacSystemFont,
      system-ui,
      Roboto,
      'Helvetica Neue',
      'Segoe UI',
      'Apple SD Gothic Neo',
      'Noto Sans KR',
      'Malgun Gothic',
      'Apple Color Emoji',
      'Segoe UI Emoji',
      'Segoe UI Symbol',
      sans-serif,
  }
  input,
  button,
  textarea,
  select {
    font: inherit;
    border: none;
    background-color: transparent;
  }
  button {
    cursor: pointer;
  }
  p,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    overflow-wrap: break-word;
  }
  #root,
  #__next {
    isolation: isolate;
  }
  span {
    white-space: pre-line;
  }
  @font-face {
    font-family: 'SUIT';
    font-weight: 100;
    src: local('SUIT Thin'), url('./font/suit/SUIT-Thin.woff2') format('woff2');
  }
  @font-face {
    font-family: 'BMJUA';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_one@1.0/BMJUA.woff') format('woff');
  }
  @font-face {
    font-family: 'LeeSeoyun';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2202-2@1.0/LeeSeoyun.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }
`;
