import { GluegunCommand, GluegunToolbox } from 'gluegun'

export default {
    name: 'version',
    alias: ['v'],
    description: 'show the cli version',

    run: (toolbox: GluegunToolbox) => toolbox.showVersion()
} as GluegunCommand
