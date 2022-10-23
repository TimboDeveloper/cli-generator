import { resolve } from 'path'

import { getRootDir } from './getRootDir'

export const pathByRoot = (path: string) => {
    const rootDir = getRootDir()
    if (!rootDir) return undefined
    return resolve(`${rootDir}/${path}`)
}
