import type { App } from 'vue'
import auth from './auth'
import copy from './copy'
import waterMarker from './waterMarker'

const directiveList: Record<string, any> = {
	auth,
	copy,
	waterMarker
}

const directives = {
	install(app: App<Element>) {
		Object.keys(directiveList).forEach(key => {
			app.directive(key, directiveList[key])
		})
	}
}

export default directives
