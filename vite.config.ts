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
  server: {
    proxy: {
      '/api': {
        target: process.env.VITE_CLOVA_VOICE_API_URL, // 프록시할 대상 URL
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''), // 요청 경로 재작성
      },
    },
  },
});