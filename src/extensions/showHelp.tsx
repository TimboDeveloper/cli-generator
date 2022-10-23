import React from 'react'

import {GluegunToolbox} from 'gluegun'
import { render } from 'ink'

import { spliceChunk } from '@utils/spliceChunk'

import { Help } from '@components/Help'


export default (toolbox: GluegunToolbox) => {

    const {
        getCommands
    } = toolbox

    const showHelp = () => {
        const commands = spliceChunk(getCommands(), 5)
        render(<Help commandsList={commands} />)
    }

    toolbox.showHelp = showHelp

}
