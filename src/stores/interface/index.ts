/* GlobalState */
export interface GlobalState {
	token: string
	userInfo: any
	themeConfig: ThemeConfigProps
	assemblySize: AssemblySizeType
	language: string
}

/* themeConfigProp */
export interface ThemeConfigProps {
	primary: string
	isDark: boolean
	isGrey: boolean
	isWeak: boolean
	isCollapse: boolean
	breadcrumb: boolean
	breadcrumbIcon: boolean
	footer: boolean
	tabs: boolean
	tabsIcon: true
	maximize: boolean
	layout: LayoutType
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

export type AssemblySizeType = 'default' | 'small' | 'large'

export type LayoutType = 'vertical' | 'classic' | 'transverse' | 'columns'
