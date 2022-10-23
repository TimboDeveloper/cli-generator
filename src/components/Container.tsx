import React, { ReactNode } from 'react'

import { Box } from 'ink'

interface ContainerProps {
    width: string
    children: ReactNode
}

export const Container: React.FC<ContainerProps> = ({children, width}) => {
    return (
        <Box
            alignItems='center'>
            <Box
                height={width}
                borderColor='magentaBright'
                borderStyle='round'
                justifyContent='space-between'
                alignItems='center'>
                {children}
            </Box>
        </Box>
    )
}
