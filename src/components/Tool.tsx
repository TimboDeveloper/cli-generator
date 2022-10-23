import React from 'react'

import { Yellow } from '@colors/Yellow'

interface ToolProps {
    toolKey: string
    description: string
}

export const Tool: React.FC<ToolProps> = ({description, toolKey}) => {
    return (
        <Yellow>
            [{toolKey}] - {description}
        </Yellow>
    )
}
