import { defineWindiSetup } from '@slidev/types'
import { resolve } from 'path'

export default defineWindiSetup(() => ({
  extract: {
    include: [resolve(__dirname, '**/*.vue')],
    exclude: [resolve(__dirname, 'node_modules')],
  },
  shortcuts: {
    'bg-main': 'bg-white text-[#555] dark:(bg-[#121212] text-[#ddd])',
  },
}))
