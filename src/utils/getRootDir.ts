import { readdirSync } from 'fs'
import { resolve } from 'path'

export const getRootDir = () => {
    let currentDirPath = process.cwd()
    while(true) {
        const currentDirContent = readdirSync(currentDirPath)
        if (currentDirContent.includes('package.json')) return resolve(currentDirPath)

        const parentCurrentDirPath = resolve(`${currentDirPath}/../`)
        if (currentDirPath === parentCurrentDirPath) return undefined

        currentDirPath = parentCurrentDirPath
    }
}
