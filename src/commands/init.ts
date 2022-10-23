import { GluegunCommand, GluegunToolbox } from 'gluegun'
import { PackageJSON } from 'gluegun/build/types/toolbox/meta-types'
import prompts from 'timbo-prompts'

import { existsByRoot } from '@utils/existsByRoot'
import { getRootDir } from '@utils/getRootDir'
import { readJsonFileByRoot } from '@utils/readJsonFileByRoot'

export const configFileName = 'generator.config.json'
export const packageJSONFileName = 'package.json'

export default {
    name: 'init',
    alias: ['i'],
    description: 'generate the cli settings',

    run: async (toolbox: GluegunToolbox) => {
        const {
            template: { generate },
            parameters: { options },
            error,

        } = toolbox

        const rootDir = getRootDir()

        if (!rootDir) return error(`Could not find ${packageJSONFileName} file, make sure you are running commands from root directory or try starting a project with "npm init" command`)
        if (existsByRoot(configFileName)) {
            if (options.f || options.force) return await init()
            type Overwrite = {
                overwrite: boolean
            }

            const { overwrite }: Overwrite = await prompts({
                type: 'confirm',
                message: 'Configurations files already exists do you want to overwrite?',
                name: 'overwrite',
                initial: false,
                noOption: '(Y/N)',
                yesOption: '(Y/N)',
                yes: 'Yes',
                no: 'No'
            })

            if (overwrite) return await init()
            else return error('Operation cancelled')
        } else return await init()

        async function init() {
            await generateConfig()
            await generateCommands()

            async function generateConfig() {
                await generate({
                    template: 'generator.config.json.ejs',
                    target: `${rootDir}/generator.config.json`,
                })
            }

            async function generateCommands() {
                const packageJSON: PackageJSON = readJsonFileByRoot(packageJSONFileName)

                const dependencies = {
                    ...packageJSON.dependencies,
                    ...packageJSON.devDependencies
                }



            }

        }

    }
} as GluegunCommand
