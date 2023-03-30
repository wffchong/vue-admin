/* GlobalState */
export interface GlobalState {
	token: string
	userInfo: any
	themeConfig: ThemeConfigProps
}

/* themeConfigProp */
export interface ThemeConfigProps {
	primary: string
	isDark: boolean
	isCollapse: boolean
	breadcrumb: boolean
	breadcrumbIcon: boolean
	footer: Boolean
	tabs: boolean
	tabsIcon: true
	maximize: boolean
}

/* AuthState */
export interface AuthState {
	routeName: string
	authButtonList: {
		[key: string]: string[]
	}
	authMenuList: Menu.MenuOptions[]
}

/* tabsMenuProps */
export interface TabsMenuProps {
	icon: string
	title: string
	path: string
	name: string
	close: boolean
}

/* TabsState */
export interface TabsState {
	tabsMenuList: TabsMenuProps[]
}

/* keepAliveState */
export interface keepAliveState {
	keepAliveName: string[]
}
