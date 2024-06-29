
import type { CustomThemeConfig } from '@skeletonlabs/tw-plugin';

export const myCustomTheme: CustomThemeConfig = {
    name: 'my-custom-theme',
    properties: {
		// =~= Theme Properties =~=
		"--theme-font-family-base": `system-ui`,
		"--theme-font-family-heading": `system-ui`,
		"--theme-font-color-base": "0 0 0",
		"--theme-font-color-dark": "255 255 255",
		"--theme-rounded-base": "8px",
		"--theme-rounded-container": "8px",
		"--theme-border-base": "1px",
		// =~= Theme On-X Colors =~=
		"--on-primary": "255 255 255",
		"--on-secondary": "0 0 0",
		"--on-tertiary": "0 0 0",
		"--on-success": "0 0 0",
		"--on-warning": "0 0 0",
		"--on-error": "255 255 255",
		"--on-surface": "0 0 0",
		// =~= Theme Colors  =~=
		// primary | #0000ff 
		"--color-primary-50": "217 217 255", // #d9d9ff
		"--color-primary-100": "204 204 255", // #ccccff
		"--color-primary-200": "191 191 255", // #bfbfff
		"--color-primary-300": "153 153 255", // #9999ff
		"--color-primary-400": "77 77 255", // #4d4dff
		"--color-primary-500": "0 0 255", // #0000ff
		"--color-primary-600": "0 0 230", // #0000e6
		"--color-primary-700": "0 0 191", // #0000bf
		"--color-primary-800": "0 0 153", // #000099
		"--color-primary-900": "0 0 125", // #00007d
		// secondary | #ffffff 
		"--color-secondary-50": "255 255 255", // #ffffff
		"--color-secondary-100": "255 255 255", // #ffffff
		"--color-secondary-200": "255 255 255", // #ffffff
		"--color-secondary-300": "255 255 255", // #ffffff
		"--color-secondary-400": "255 255 255", // #ffffff
		"--color-secondary-500": "255 255 255", // #ffffff
		"--color-secondary-600": "230 230 230", // #e6e6e6
		"--color-secondary-700": "191 191 191", // #bfbfbf
		"--color-secondary-800": "153 153 153", // #999999
		"--color-secondary-900": "125 125 125", // #7d7d7d
		// tertiary | #0EA5E9 
		"--color-tertiary-50": "219 242 252", // #dbf2fc
		"--color-tertiary-100": "207 237 251", // #cfedfb
		"--color-tertiary-200": "195 233 250", // #c3e9fa
		"--color-tertiary-300": "159 219 246", // #9fdbf6
		"--color-tertiary-400": "86 192 240", // #56c0f0
		"--color-tertiary-500": "14 165 233", // #0EA5E9
		"--color-tertiary-600": "13 149 210", // #0d95d2
		"--color-tertiary-700": "11 124 175", // #0b7caf
		"--color-tertiary-800": "8 99 140", // #08638c
		"--color-tertiary-900": "7 81 114", // #075172
		// success | #3de600 
		"--color-success-50": "226 251 217", // #e2fbd9
		"--color-success-100": "216 250 204", // #d8facc
		"--color-success-200": "207 249 191", // #cff9bf
		"--color-success-300": "177 245 153", // #b1f599
		"--color-success-400": "119 238 77", // #77ee4d
		"--color-success-500": "61 230 0", // #3de600
		"--color-success-600": "55 207 0", // #37cf00
		"--color-success-700": "46 173 0", // #2ead00
		"--color-success-800": "37 138 0", // #258a00
		"--color-success-900": "30 113 0", // #1e7100
		// warning | #EAB308 
		"--color-warning-50": "252 244 218", // #fcf4da
		"--color-warning-100": "251 240 206", // #fbf0ce
		"--color-warning-200": "250 236 193", // #faecc1
		"--color-warning-300": "247 225 156", // #f7e19c
		"--color-warning-400": "240 202 82", // #f0ca52
		"--color-warning-500": "234 179 8", // #EAB308
		"--color-warning-600": "211 161 7", // #d3a107
		"--color-warning-700": "176 134 6", // #b08606
		"--color-warning-800": "140 107 5", // #8c6b05
		"--color-warning-900": "115 88 4", // #735804
		// error | #c20000 
		"--color-error-50": "246 217 217", // #f6d9d9
		"--color-error-100": "243 204 204", // #f3cccc
		"--color-error-200": "240 191 191", // #f0bfbf
		"--color-error-300": "231 153 153", // #e79999
		"--color-error-400": "212 77 77", // #d44d4d
		"--color-error-500": "194 0 0", // #c20000
		"--color-error-600": "175 0 0", // #af0000
		"--color-error-700": "146 0 0", // #920000
		"--color-error-800": "116 0 0", // #740000
		"--color-error-900": "95 0 0", // #5f0000
		// surface | #e6e6e6 
		"--color-surface-50": "251 251 251", // #fbfbfb
		"--color-surface-100": "250 250 250", // #fafafa
		"--color-surface-200": "249 249 249", // #f9f9f9
		"--color-surface-300": "245 245 245", // #f5f5f5
		"--color-surface-400": "238 238 238", // #eeeeee
		"--color-surface-500": "230 230 230", // #e6e6e6
		"--color-surface-600": "207 207 207", // #cfcfcf
		"--color-surface-700": "173 173 173", // #adadad
		"--color-surface-800": "138 138 138", // #8a8a8a
		"--color-surface-900": "113 113 113", // #717171
		
	}
}