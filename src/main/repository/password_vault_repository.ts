import { PasswordVault } from '../model/password_vault'
import { QueryTypes, Sequelize } from 'sequelize'
import uuid from 'uuid'

export default class PasswordVaultRepository {
  constructor(private readonly sq: Sequelize) {}

  async create(password: PasswordVault): Promise<PasswordVault> {
    const id = password.id || uuid.v4()
    await this.sq.query(
      'INSERT INTO password_vaults (id, name, host, username, password) VALUES (?,?,?,?,?)',
      {
        replacements: [id, password.name, password.host, password.username, password.password],
        type: QueryTypes.INSERT
      }
    )

    return {
      ...password
    }
  }

  async getPasswords(): Promise<PasswordVault[]> {
    const rawResult = await this.sq.query<PasswordVault>(`SELECT * FROM password_vaults`, {
      type: QueryTypes.SELECT,
      raw: true
    })

    return rawResult
  }
}
