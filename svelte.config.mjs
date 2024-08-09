import { vitePreprocess } from '@astrojs/svelte'

/** @type {boolean} */
const isProd = !process.env.NODE_ENV || process.env.NODE_ENV === 'production'

/** @type {string} */
const prefix = 'component'

/**
 * Generate a hash.
 * @param {{ hash: (name: string) => string, name: string }} params
 * @returns {string}
 */
const cssHash = ({ hash, name }) => `${prefix}-${hash(name)}`

/**
 * @type {object}
 * @property {object} [compilerOptions]
 * @property {function} [compilerOptions.cssHash]
 */
const options = isProd ? { compilerOptions: { cssHash } } : {}

/** @type {object} */
export default { ...options, preprocess: vitePreprocess() }
