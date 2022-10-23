import React, { useState } from 'react'

import { Box, Text, useApp } from 'ink'

import { figures } from '@utils/figures'
import { useInputStrategyCommand } from '@utils/useInputStrategy'

import { Container } from '@components/Container'
import { Map } from '@components/Map'
import { Title } from '@components/Title'
import { Tool } from '@components/Tool'
import { ToolGuide } from '@components/ToolGuide'

import { Green } from '@colors/Green'
import { Red } from '@colors/Red'
import { Yellow } from '@colors/Yellow'


interface HelpProps {
    commandsList: string[][][]
}

interface CommandListProps {
    commandsList: string[][]
}

interface CommandProps {
    command: string
    alias: string
    description: string
}

const Command: React.FC<CommandProps> = ({command, alias, description}) => {

    return (
        <>
            <Red> <Green>{figures.pointer}</Green> {command}</Red>
            <Yellow> {alias}</Yellow>
            <Text> {description} </Text>
        </>
    )
}

const CommandList: React.FC<CommandListProps> = ({commandsList}) => {
    return (
        <Map
            items={commandsList}
            mapCallback={([command, alias, description], keyId) => {
                return (
                    <Box
                        key={keyId}>
                        <Command
                            command={command}
                            alias={alias}
                            description={description}
                        />
                    </Box>
                )
            }}
        />
    )
}

export const Help: React.FC<HelpProps> = ({commandsList}) => {

    const [page, setPage] = useState(1)

    const screen = useApp()

    const maxPage = commandsList.length
    const minPage = 1

    useInputStrategyCommand({
        q: () => exit(),
    }, {
        leftArrow: () => prevPage(),
        rightArrow: () => nextPage(),
        escape: () => exit()
    })

    function exit() {
        screen.exit()
    }

    function nextPage() {
        if (page < maxPage) setPage(prev => prev + 1)
        else setPage(minPage)
    }

    function prevPage() {
        if (page > minPage) setPage(prev => prev - 1)
        else setPage(maxPage)
    }

    return (
        <Container width="80%">
            <Box flexDirection='column'>
                <Box marginBottom={1}>
                    <Title> Generator commands </Title>
                </Box>
                <CommandList commandsList={commandsList[page - 1]} />
                <Box marginTop={2}>
                    <Text> Page: (<Yellow>{page}</Yellow>/<Yellow>{maxPage}</Yellow>) </Text>
                </Box>
            </Box>

            <ToolGuide>
                <Tool toolKey={figures.arrowRight} description='Next Page' />
                <Tool toolKey={figures.arrowLeft} description='Previous Page' />
                <Tool toolKey={'Q, ESC'} description='Exit' />
            </ToolGuide>
        </Container>
    )
}
