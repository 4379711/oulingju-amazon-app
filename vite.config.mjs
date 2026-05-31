import {defineConfig} from 'vite'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import {ElementPlusResolver} from 'unplugin-vue-components/resolvers'
import {fileURLToPath, URL} from 'node:url'
import vue from "@vitejs/plugin-vue"
import ElementPlus from 'unplugin-element-plus/vite'
import Pages from 'vite-plugin-pages'
import Layouts from 'vite-plugin-vue-layouts';
// https://vitejs.dev/config/
export default defineConfig({
    build: {
        chunkSizeWarningLimit: 1500,
    },
    plugins: [
        vue(),
        Layouts({
            layoutsDirs: 'src/layout',  // 布局文件存放目录
            defaultLayout: 'amazon-layout/index'  // 默认布局，对应 src/layout/amazon-layout/index.vue
        }),
        Pages({
            // 读取vue文件，生成路由信息
            dirs: [{dir: "src/views", baseRoute: "/"}],
            // 排除某些组件
            exclude: ['**/components/*.vue']
        }),
        ElementPlus(),
        AutoImport({
            resolvers: [ElementPlusResolver()],
        }),
        Components({
            resolvers: [ElementPlusResolver()],
        }),
    ],
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url))
        }
    },
    server: {
        host: "0.0.0.0",
        https: false,//是否启用 http 2
        cors: false,//设为 false 表示禁用。
        open: false,//服务启动时自动在浏览器中打开应用
        port: 9000,
        strictPort: true, //设为true时端口被占用则直接退出，不会尝试下一个可用端口
        force: false,//是否强制依赖预构建
        hmr: true,//模块热更新
        //配置代理转发，解决跨域问题，可以配置多个
        proxy: {
            "/api": {
                target: "http://127.0.0.1:43799/",
                changeOrigin: true,
                rewrite: (path) =>
                    path.replace(/^\/api/, ""),
            },
            // 代理 websockets 或 socket.io
            '/socket.io': {
                target: 'ws://localhost:5174',
                ws: true,
            },
        },
    },
})
