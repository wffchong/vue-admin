import type { App } from 'vue'
import auth from './auth'
import copy from './copy'
import waterMarker from './waterMarker'
import draggable from './draggable'
import debounce from './debounce'

const directiveList: Record<string, any> = {
	auth,
	copy,
	waterMarker,
	draggable,
	debounce
}

const directives = {
	install(app: App<Element>) {
		Object.keys(directiveList).forEach(key => {
			app.directive(key, directiveList[key])
		})
	}
}

export default directives
