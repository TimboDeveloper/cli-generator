import { existsSync } from 'fs'

import { pathByRoot } from './pathByRoot'

export const existsByRoot = (path: string) => {
    path = pathByRoot(path)

    if (path) return existsSync(path)
    return undefined
}
