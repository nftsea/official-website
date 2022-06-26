import {
	defineConfig
} from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [vue()],
	server: {
		proxy: {
			'/api': {
				// target: 'https://app.armourtraders.com/api/v1',
				target: 'http://13.124.59.249:8088/api/v1',
				changeOrigin: true,
				rewrite: (path) => path.replace(/^\/api/,'')
			}
		}
	}
})
