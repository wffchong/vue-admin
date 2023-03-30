import { createApp } from 'vue'
import icons from '@/global/registerIcons'
import App from './App.vue'
// reset style sheet
import '@/styles/reset.scss'
// CSS common style sheet
import '@/styles/common.scss'
// iconfont css
import '@/assets/iconfont/iconfont.scss'
// font css
import '@/assets/fonts/font.scss'
// element dark(内置暗黑模式)
import 'element-plus/theme-chalk/dark/css-vars.css'
// custom element dark(自定义暗黑模式)
import '@/styles/theme/element-dark.scss'
// custom element css
import '@/styles/element.scss'
import router from '@/routers'
// pinia store
import pinia from '@/stores/index'
// vue i18n
import I18n from '@/languages/index'

const app = createApp(App)
app.use(icons)
app.use(I18n)
app.use(router)
app.use(pinia)

app.mount('#app')
