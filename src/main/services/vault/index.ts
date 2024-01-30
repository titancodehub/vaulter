import { PasswordVault } from '../../model/password_vault'
import PasswordVaultRepository from '../../repository/password_vault_repository'

export default class VaultService {
  constructor(public passwordVaultRepository: PasswordVaultRepository) {}

  async addVault(password: PasswordVault): Promise<PasswordVault> {
    return await this.passwordVaultRepository.create(password)
  }

  async getVaults(): Promise<PasswordVault[]> {
    return await this.passwordVaultRepository.getPasswords()
  }
}
