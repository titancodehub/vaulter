import { Sequelize } from 'sequelize'
import { SequelizeStorage, Umzug } from 'umzug'
import AddPasswordVaultsTableMigration from '../migrations/00-add-password-vaults-table'

export async function openDatabaseConnection(filename: string): Promise<Sequelize> {
  const s = new Sequelize({
    dialect: 'sqlite',
    storage: filename
  })
  try {
    await s.authenticate()
  } catch (e) {
    throw new Error('Unable to connect to the database')
  }
  return s
}

export async function runMigration(sq: Sequelize): Promise<void> {
  const umzug = new Umzug({
    migrations: [AddPasswordVaultsTableMigration],
    context: sq.getQueryInterface(),
    storage: new SequelizeStorage({ sequelize: sq }),
    logger: console
  })
  await umzug.up()
}
