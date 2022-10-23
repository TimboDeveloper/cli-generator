import 'gluegun'

declare module 'gluegun' {
    interface GluegunToolbox {
        showHelp: () => void
        showVersion: () => void

        getCommands: () => string[][]

        error: (message: string) => void
    }
}
