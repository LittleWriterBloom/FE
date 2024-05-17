// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
// });
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dotenv from 'dotenv';

// dotenv를 사용하여 .env 파일을 로드합니다.
dotenv.config();

export default defineConfig({
  plugins: [react()],
  base: './', // 이 설정을 추가하여 상대 경로로 빌드된 파일들의 경로를 맞춤
  server: {
    proxy: process.env.NODE_ENV === 'development' ? {
      '/api': {
        target: process.env.VITE_CLOVA_VOICE_API_URL, // 프록시할 대상 URL
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''), // 요청 경로 재작성
      },
    } : undefined, // 배포 환경에서는 프록시 사용X
  },
});

// 배포환경 프록시 제거, 프록시 조건부 설정