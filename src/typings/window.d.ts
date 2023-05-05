// * global
declare global {
	interface Navigator {
		browserLanguage: string
		msSaveOrOpenBlob: (blob: Blob, fileName: string) => void
	}
}

export {}
