import { GluegunToolbox } from 'gluegun'
import color from 'kleur'

import { figures } from '@utils/figures'

export default (toolbox: GluegunToolbox) => {

    const { red } = color
    const {
        print: { error: errorMessage }
    } = toolbox

    const error = (message: string) => {
        errorMessage(red().bold(`${figures.cross} ${message}`))
    }

    toolbox.error = error
}
