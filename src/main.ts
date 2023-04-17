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
// element css
import 'element-plus/dist/index.css'
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
// errorHandler
import errorHandler from '@/utils/errorHandler'
// svg icons
import 'virtual:svg-icons-register'
// custom directives
import directives from '@/directives/index'

const app = createApp(App)
// 全局代码错误捕捉
app.config.errorHandler = errorHandler

app.use(icons)
app.use(I18n)
app.use(router)
app.use(pinia)
app.use(directives)
app.mount('#app')
