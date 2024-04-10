import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
// import { createProxyMiddleware } from 'http-proxy-middleware';
// import dns from 'node:dns'

// dns.setDefaultResultOrder('verbatim')

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/foo': 'http://localhost:5173',
      '/api': {
        target: 'http://3.34.45.2', // 프록시할 대상 URL
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''), // 요청 경로 재작성
      },
    },
  },
});