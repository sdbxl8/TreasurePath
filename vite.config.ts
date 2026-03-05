import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    vue(),
    tailwindcss()
  ],
  server:{
    proxy:{
      '/api':{
        target:'http://localhost/treasurepath/TreasurePath/server',
        changeOrigin: true,
        secure: false,
        rewrite: path => path.replace(/^\/api/, ''),

        configure: (proxy)=>{
           proxy.on('proxyRes', (proxyRes) => {
            const cookies = proxyRes.headers['set-cookie'];
            if (cookies){
              const newCookies = cookies.map((cookie) =>
                cookie
                  .replace(/;?\s*SameSite=Lax/i, '')
                  .replace(/;?\s*SameSite=Strict/i, '')
                  + '; SameSite=None; Secure'
              );
              proxyRes.headers['set-cookie'] = newCookies;
            }
           });
        }
      }
    }
  }
})
