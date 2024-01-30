import { Sequelize } from 'sequelize'
import PasswordVaultRepository from './password_vault_repository'

export interface RepositoryProvider {
  password_vault: PasswordVaultRepository
}

export function initRepository(sq: Sequelize): RepositoryProvider {
  return {
    password_vault: new PasswordVaultRepository(sq)
  }
}
