import {createApp} from 'vue'
import App1 from '@/app.vue'
import ElementPlus from 'element-plus'
import {setupRouter} from "@/router";


const app1 = createApp(App1);
setupRouter(app1)
app1.use(ElementPlus)
app1.mount('#root');