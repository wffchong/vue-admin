import { defineStore, createPinia } from 'pinia'
import { AssemblySizeType, GlobalState, ThemeConfigProps } from './interface'
import piniaPersistConfig from '@/config/piniaPersist'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import { DEFAULT_PRIMARY } from '@/config/config'

// defineStore 调用后返回一个函数，调用该函数获得 Store 实体
export const useGlobalStore = defineStore({
	// id: 必须的，在所有 Store 中唯一
	id: 'GlobalState',
	// state: 返回对象的函数
	state: (): GlobalState => ({
		token: '',
		userInfo: '',
		// 组件大小
		assemblySize: 'default',
		// 系统语言
		language: '',
		themeConfig: {
			// 默认 primary 主题颜色
			primary: DEFAULT_PRIMARY,
			// 深色模式
			isDark: false,
			// 折叠菜单
			isCollapse: false,
			// 面包屑导航
			breadcrumb: false,
			// 面包屑导航图标
			breadcrumbIcon: true,
			// 页脚
			footer: true,
			// 标签页
			tabs: true,
			// 标签页图标
			tabsIcon: true,
			// 当前页面是否全屏
			maximize: false
		}
	}),
	getters: {},
	actions: {
		// setToken
		setToken(token: string) {
			this.token = token
		},
		// setUserInfo
		setUserInfo(userInfo: any) {
			this.userInfo = userInfo
		},
		// setThemeConfig
		setThemeConfig(themeConfig: ThemeConfigProps) {
			this.themeConfig = themeConfig
		},
		// setAssemblySizeSize
		setAssemblySizeSize(assemblySize: AssemblySizeType) {
			this.assemblySize = assemblySize
		},
		// updateLanguage
		updateLanguage(language: string) {
			this.language = language
		}
	},
	persist: piniaPersistConfig('GlobalState')
})

// piniaPersist(持久化)
const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)

export default pinia
