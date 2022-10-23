import React from 'react'

import { Text } from 'ink'
import { ColorProps } from 'src/Colors/Colors'

export const Green: React.FC<ColorProps> = ({children}) => {
    return <Text color='green'>{children}</Text>
}
