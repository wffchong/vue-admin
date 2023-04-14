/**
 * @description 获取当前时间对应的提示语
 * @return string
 */
export function getTimeState() {
	// 获取当前时间
	let timeNow = new Date()
	// 获取当前小时
	let hours = timeNow.getHours()
	// 判断当前时间段
	if (hours >= 6 && hours <= 10) return `早上好 ⛅`
	if (hours >= 10 && hours <= 14) return `中午好 🌞`
	if (hours >= 14 && hours <= 18) return `下午好 🌞`
	if (hours >= 18 && hours <= 24) return `晚上好 🌛`
	if (hours >= 0 && hours <= 6) return `凌晨好 🌛`
}

/**
 * @description 判断数据类型
 * @param {Any} val 需要判断类型的数据
 * @return string
 */
export function isType(val: any) {
	if (val === null) return 'null'
	if (typeof val !== 'object') return typeof val
	else return Object.prototype.toString.call(val).slice(8, -1).toLocaleLowerCase()
}

/**
 * @description 扁平化数组对象(主要用来处理路由菜单)
 * @param {Array} menuList 所有菜单列表
 * @return array
 */
export function getFlatArr(menuList: Menu.MenuOptions[]) {
	let newMenuList: Menu.MenuOptions[] = JSON.parse(JSON.stringify(menuList))
	return newMenuList.reduce((pre: Menu.MenuOptions[], current: Menu.MenuOptions) => {
		let flatArr = [...pre, current]
		if (current.children) flatArr = [...flatArr, ...getFlatArr(current.children)]
		return flatArr
	}, [])
}

/**
 * @description 使用递归，过滤出需要渲染在左侧菜单的列表（剔除 isHide == true 的菜单）
 * @param {Array} menuList 所有菜单列表
 * @return array
 * */
export function getShowMenuList(menuList: Menu.MenuOptions[]) {
	let newMenuList: Menu.MenuOptions[] = JSON.parse(JSON.stringify(menuList))
	return newMenuList.filter(item => {
		item.children?.length && (item.children = getShowMenuList(item.children))
		return !item.meta?.isHide
	})
}

/**
 * @description 递归找出所有面包屑存储到 pinia/vuex 中
 * @param {Array} menuList 所有菜单列表
 * @param {Object} result 输出的结果
 * @param {Array} parent 父级菜单
 * @returns object
 */
export const getAllBreadcrumbList = (menuList: Menu.MenuOptions[], result: { [key: string]: any } = {}, parent = []) => {
	for (const item of menuList) {
		result[item.path] = [...parent, item]
		if (item.children) getAllBreadcrumbList(item.children, result, result[item.path])
	}
	return result
}

/**
 * @description 获取浏览器默认语言
 * @return string
 */
export function getBrowserLang() {
	let browserLang = navigator.language ? navigator.language : navigator.browserLanguage
	let defaultBrowserLang = ''
	if (browserLang.toLowerCase() === 'cn' || browserLang.toLowerCase() === 'zh' || browserLang.toLowerCase() === 'zh-cn') {
		defaultBrowserLang = 'zh'
	} else {
		defaultBrowserLang = 'en'
	}
	return defaultBrowserLang
}

/**
 * @description 生成唯一 uuid
 * @return string
 */
export function generateUUID() {
	if (typeof crypto === 'object') {
		if (typeof crypto.randomUUID === 'function') {
			return crypto.randomUUID()
		}
		if (typeof crypto.getRandomValues === 'function' && typeof Uint8Array === 'function') {
			const callback = (c: any) => {
				const num = Number(c)
				return (num ^ (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (num / 4)))).toString(16)
			}
			return '10000000-1000-4000-8000-100000000000'.replace(/[018]/g, callback)
		}
	}
	let timestamp = new Date().getTime()
	let performanceNow = (typeof performance !== 'undefined' && performance.now && performance.now() * 1000) || 0
	return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
		let random = Math.random() * 16
		if (timestamp > 0) {
			random = (timestamp + random) % 16 | 0
			timestamp = Math.floor(timestamp / 16)
		} else {
			random = (performanceNow + random) % 16 | 0
			performanceNow = Math.floor(performanceNow / 16)
		}
		return (c === 'x' ? random : (random & 0x3) | 0x8).toString(16)
	})
}
