import VaultService from './vault'
import { RepositoryProvider } from '@main/repository'

export interface ServiceProvider {
  vault_service: VaultService
}

export function initService(repoProvider: RepositoryProvider): ServiceProvider {
  return { vault_service: new VaultService(repoProvider.password_vault) }
}
