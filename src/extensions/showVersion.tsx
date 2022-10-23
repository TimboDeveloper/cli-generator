import React from 'react'

import { GluegunToolbox } from 'gluegun'
import { render } from 'ink'

import { Version } from '@components/Version'

export default (toolbox: GluegunToolbox) => {

    const showVersion = () => {
        render(<Version version={toolbox.meta.version()} />)
    }

    toolbox.showVersion = showVersion
}
