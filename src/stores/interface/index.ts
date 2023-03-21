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
}
