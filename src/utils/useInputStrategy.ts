import { Key, useInput } from 'ink'

type KeyCommands = {
    [keyName in keyof Key]?: () => void
}
type InputCommands = {
    [keyName: string]: () => void
}

export const useInputStrategyCommand = (input: InputCommands, key: KeyCommands = {}) => {

    const InputCommandList: InputCommands = {
        ...input
    }

    const keyCommandList: KeyCommands = {
        ...key
    }

    useInput((input, key) => {
        for (const command in keyCommandList) {
            if (key[command]) keyCommandList[command]()
        }

        for (const command in InputCommandList) {
            if (input === command) InputCommandList[command]()
        }
    })

    //for (const command in keyCommandList) if (key[command]) keyCommandList[command]()
}
