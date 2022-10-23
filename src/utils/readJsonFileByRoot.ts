import { existsSync, readFileSync } from 'fs'

import { pathByRoot } from './pathByRoot'

export const readJsonFileByRoot = (path: string) => {
    path = pathByRoot(path)


    if (existsSync(path)) {
        const stringifiedData = readFileSync(path, {
            encoding: 'utf-8'
        })
        return JSON.parse(stringifiedData)
    }
    return undefined
}
