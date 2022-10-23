import React, { ReactNode } from 'react'

import { Box } from 'ink'

interface ToolGuideProps {
    children: ReactNode
}

export const ToolGuide: React.FC<ToolGuideProps> = ({children}) => {
    return (
        <Box
            flexDirection='column'
            borderColor='yellow'
            borderStyle='round'
            marginBottom={1}
            marginTop={0.5}>
            {children}
        </Box>
    )
}
