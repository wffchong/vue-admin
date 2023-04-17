import type { App } from 'vue'
import auth from './auth'

const directiveList: Record<string, any> = {
	auth
}

const directives = {
	install(app: App<Element>) {
		Object.keys(directiveList).forEach(key => {
			app.directive(key, directiveList[key])
		})
	}
}

export default directives
