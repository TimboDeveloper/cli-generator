import { GluegunToolbox } from 'gluegun'

export default (toolbox: GluegunToolbox) => {

    const {
        meta: { commandInfo }
    } = toolbox

    const getCommands = () => {
        let commands = commandInfo()
        commands = commands.map(([commandName, description]) => {
            commandName = commandName.replaceAll('(', '[')
            commandName = commandName.replaceAll(')', ']')

            const [, ...rest] = commandName.split(' ')
            const alias = rest.join(' ') as string

            commandName = commandName.replace(` ${alias}`, '')

            if (description === '-') description = ''

            return [commandName, alias, description]
        }) as string[][]
        for(let i = 0; i < 100; i++) commands.push([`command-${i}`, '[a, b]', `Description at command ${i}`])
        return commands
    }

    toolbox.getCommands = getCommands

}
