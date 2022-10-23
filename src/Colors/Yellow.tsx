import React from 'react'

import { Text } from 'ink'
import { ColorProps } from 'src/Colors/Colors'

export const Yellow: React.FC<ColorProps> = ({children}) => {
    return <Text color='yellow'>{children}</Text>
}
