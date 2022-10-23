import React from 'react'

import { Box, Text } from 'ink'

import { Container } from '@components/Container'
import { Title } from '@components/Title'

import { Green } from '@colors/Green'

interface VersionProps {
    version: string
}

export const Version: React.FC<VersionProps> = ({version}) => {
    return (
        <Container width='75%'>
            <Box flexDirection='column'>
                <Box>
                    <Title> Version </Title>
                </Box>
                <Box marginBottom={1}>
                    <Text> Generator CLI: <Green>{version}</Green> </Text>
                </Box>
            </Box>
        </Container>
    )
}
