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
}

/* AuthState */
export interface AuthState {
	routeName: string
	authButtonList: {
		[key: string]: string[]
	}
	authMenuList: Menu.MenuOptions[]
}
