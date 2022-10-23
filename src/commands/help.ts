import { GluegunCommand } from 'gluegun'
import { GluegunToolbox } from 'gluegun/build/types/domain/toolbox'

export default {
    name: 'help',
    alias: ['h'],
    description: 'show generator commands',

    run: (toolbox: GluegunToolbox) => toolbox.showHelp()
} as GluegunCommand
