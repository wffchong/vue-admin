import type { App } from 'vue'
import auth from './modules/auth'
import copy from './modules/copy'
import waterMarker from './modules/waterMarker'
import draggable from './modules/draggable'
import debounce from './modules/debounce'
import longpress from './modules/longpress'

const directiveList: Record<string, any> = {
	auth,
	copy,
	waterMarker,
	draggable,
	debounce,
	longpress
}

const directives = {
	install(app: App<Element>) {
		Object.keys(directiveList).forEach(key => {
			app.directive(key, directiveList[key])
		})
	}
}

export default directives
