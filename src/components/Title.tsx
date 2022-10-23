import React, { ReactNode } from 'react'

import { Text } from 'ink'
import { Props } from 'ink/build/components/Text'

interface TitleProps extends Props {
    children: ReactNode,
}

export const Title: React.FC<TitleProps> = ({children, ...rest}) => {
    return <Text color={'grey'} bold {...rest}>{children}</Text>
}
