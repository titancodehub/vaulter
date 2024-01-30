import { App } from 'electron'

import fs from 'fs'
import { openDatabaseConnection } from './database'
import { Sequelize } from 'sequelize'

export interface Config {
  database: Sequelize
  config_file: string
}

export async function loadConfig(app: App): Promise<Config> {
  const home = app.getPath('home')
  const vaulterDirectory = `${home}/.vaulter`
  const configFile = `${vaulterDirectory}/config`
  const dbPath = `${vaulterDirectory}/database.db`
  if (!fs.existsSync(vaulterDirectory)) {
    fs.mkdirSync(vaulterDirectory)
  }

  if (!fs.existsSync(configFile)) {
    fs.writeFileSync(configFile, JSON.stringify({}))
  }

  return {
    config_file: configFile,
    database: await openDatabaseConnection(dbPath)
  }
}
