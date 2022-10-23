import React from 'react'

import { Text } from 'ink'
import { ColorProps } from 'src/Colors/Colors'

export const Red: React.FC<ColorProps> = ({children}) => {
    return <Text color='red'>{children}</Text>
}
