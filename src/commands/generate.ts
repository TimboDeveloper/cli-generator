import { GluegunCommand } from 'gluegun'
import { GluegunToolbox } from 'gluegun/build/types/domain/toolbox'

export default {
    name: 'generate',
    alias: ['gen'],
    description: 'main command',

    run: (toolbox: GluegunToolbox) => {
        const {
            parameters:{ options, first},
            error,
            showHelp,
            showVersion
        } = toolbox

        if (options.v || options.version) return showVersion()
        if (options.h || options.help || first === undefined) return showHelp()

        error(`"${first}" command not found`)
        return showHelp()
    }
} as GluegunCommand
